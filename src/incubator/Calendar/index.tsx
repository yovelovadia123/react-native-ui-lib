import React, {PropsWithChildren, useCallback, useMemo, useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Reanimated, {useSharedValue, useAnimatedReaction, runOnJS, useAnimatedRef, scrollTo, useAnimatedScrollHandler} from 'react-native-reanimated';
import {Constants} from '../../commons/new';
import {generateMonthItems} from './helpers/CalendarProcessor';
import {addHeaders} from './helpers/DataProcessor';
import {isSameMonth, getTimestamp, addYears} from './helpers/DateUtils';
import {CalendarContextProps, CalendarProps, FirstDayOfWeek, UpdateSource, DateObjectWithOptionalDay} from './types';
import View from '../../components/view';
import CalendarContext from './CalendarContext';
import CalendarItem from './CalendarItem';
import Agenda from './Agenda';
import TodayButton from './TodayButton';
import Header from './Header';
import {useDidUpdate} from 'hooks';

const AnimatedFlatList = Reanimated.createAnimatedComponent(FlatList);

const YEARS_RANGE = 1;
const PAGE_RELOAD_THRESHOLD = 3;
const NOW = Date.now(); // so the 'initialDate' effect won't get called since the now different on every rerender 
const CALENDAR_WIDTH = Constants.screenWidth;

function Calendar(props: PropsWithChildren<CalendarProps>) {
  const {
    data,
    children,
    initialDate = NOW,
    onChangeDate,
    firstDayOfWeek = FirstDayOfWeek.MONDAY,
    staticHeader = false,
    showExtraDays = true
  } = props;

  const initialItems = generateMonthItems(initialDate, YEARS_RANGE, YEARS_RANGE);
  const [items, setItems] = useState<DateObjectWithOptionalDay[]>(initialItems);

  const flatListRef = useAnimatedRef<Reanimated.FlatList>();

  const getItemIndex = useCallback((date: number) => {
    'worklet';
    for (let i = 0; i < items.length; i++) {
      if (isSameMonth(items[i], date)) {
        return i;
      }
    }
    return -1;
  }, [items]);

  const current = useSharedValue<number>(initialDate);
  const initialIndex = useSharedValue<number>(getItemIndex(current.value));
  const lastUpdateSource = useSharedValue<UpdateSource>(UpdateSource.INIT);
  const processedData = useMemo(() => addHeaders(data), [data]);
  const scrolledByUser = useSharedValue<boolean>(false);
  const headerHeight = useSharedValue(0);

  const setDate = useCallback<CalendarContextProps['setDate']>((date: number, updateSource: UpdateSource) => {
    'worklet';
    current.value = date;
    lastUpdateSource.value = updateSource;
    if (updateSource !== UpdateSource.PROP_UPDATE) {
      runOnJS(onChangeDate)?.(date);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    'worklet';
    scrolledByUser.value = false;
    console.warn('scrollToIndex: ', index);
    scrollTo(flatListRef, index * CALENDAR_WIDTH, 0, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItemIndex]);

  useDidUpdate(() => {
    setDate(initialDate, UpdateSource.PROP_UPDATE);
  }, [initialDate]);

  useEffect(() => { //useEffect instead of useDidUpdate to scroll to initial position (not scrolling)
    const index = getItemIndex(current.value);
    setTimeout(() => {
      console.warn('useEffect items scrolling to: ', index);
      scrollToIndex(3);
    }, 5000); // not even 10s make a difference
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, getItemIndex, scrollToIndex]);

  const setHeaderHeight = useCallback((height: number) => {
    headerHeight.value = height;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = useMemo<CalendarContextProps>(() => {
    return {
      data: processedData,
      firstDayOfWeek,
      selectedDate: current,
      setDate,
      showWeeksNumbers: true,
      showExtraDays,
      updateSource: lastUpdateSource,
      staticHeader,
      setHeaderHeight,
      headerHeight
    };
  }, [processedData]);

  /** Pages reload */

  const mergeArrays = (prepend: boolean, array: DateObjectWithOptionalDay[], newArray: DateObjectWithOptionalDay[]) => {
    const arr: DateObjectWithOptionalDay[] = array.slice();
    if (prepend) {
      arr.unshift(...newArray);
    } else {
      arr.push(...newArray);
    }
    return arr;
  };

  const addPages = useCallback((index: number) => {
    const prepend = index < PAGE_RELOAD_THRESHOLD;
    const append = index > items.length - PAGE_RELOAD_THRESHOLD;
    const pastRange = prepend ? YEARS_RANGE : 0;
    const futureRange = append ? YEARS_RANGE : 0;
    const newDate = addYears(current.value, prepend ? -1 : 1);
    const newItems = generateMonthItems(newDate, pastRange, futureRange);
    const newArray = mergeArrays(prepend, items, newItems);
    setItems(newArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const shouldAddPages = useCallback((index: number) => {
    'worklet';
    return index !== -1 && 
      (index < PAGE_RELOAD_THRESHOLD || index > items.length - PAGE_RELOAD_THRESHOLD);
  }, [items]);

  useAnimatedReaction(() => {
    return current.value;
  },
  (selected, previous) => {
    const index = getItemIndex(selected);
    if (shouldAddPages(index)) {
      runOnJS(addPages)(index);
    } else if (lastUpdateSource.value !== UpdateSource.MONTH_SCROLL) {
      if (previous && !isSameMonth(selected, previous)) {
        scrollToIndex(index);
      }
    }
  }, [getItemIndex]);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (scrolledByUser.value) {
        if (event.contentOffset.x % CALENDAR_WIDTH === 0) {
          const index = event.contentOffset.x / CALENDAR_WIDTH;
          const item = items[index];
          if (item) {
            if (!isSameMonth(item, current.value)) {
              const newDate = getTimestamp({year: item.year, month: item.month, day: 1});
              setDate(newDate, UpdateSource.MONTH_SCROLL);
            }
          }
        }
      }
    },
    onBeginDrag: () => {
      scrolledByUser.value = true;
    },
    onMomentumBegin: () => {
      scrolledByUser.value = true;
    }
  });

  const onScrollToIndexFailed = (info: {
    index: number;
    highestMeasuredFrameIndex: number;
    averageItemLength: number;
  }) => {
    console.log('onScrollToIndexFailed: ', info);
  };

  const renderCalendarItem = useCallback(({item}: any) => {
    return <CalendarItem year={item.year} month={item.month}/>;
  }, []);

  const renderList = () => {
    return (
      <View>
        <AnimatedFlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={items}
          keyExtractor={(item: any, _) => `${item.year}-${item.month}`}
          renderItem={renderCalendarItem}
          // initialScrollIndex={initialIndex.value} // massing list up...
          // contentOffset={{x: initialIndex.value * CALENDAR_WIDTH, y: 0}}
          // initialNumToRender={items.length} // take 10s to render 36 items...
          onScroll={scrollHandler}
          onScrollToIndexFailed={onScrollToIndexFailed}
        />
      </View>
    );
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {staticHeader && <Header/>}
      {renderList()}
      {children}
      <TodayButton/>
    </CalendarContext.Provider>
  );
}

Calendar.Agenda = Agenda;
export default Calendar;
