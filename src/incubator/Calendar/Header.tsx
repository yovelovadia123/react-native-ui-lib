import React, {useContext, useCallback} from 'react';
import {StyleSheet, TextInput, LayoutChangeEvent} from 'react-native';
import Reanimated, {useAnimatedProps} from 'react-native-reanimated';
import {Gesture, GestureDetector, TapGesture} from 'react-native-gesture-handler';
import {Colors, Typography} from 'style';
import View from '../../components/view';
import Icon from '../../components/icon';
import {getDateObject, getMonthForIndex, addMonths, getTimestamp} from './helpers/DateUtils';
import {HeaderProps, DayNamesFormat, UpdateSource} from './types';
import CalendarContext from './CalendarContext';
import WeekDaysNames from './WeekDaysNames';


const WEEK_NUMBER_WIDTH = 32;
const ARROW_NEXT = require('./assets/arrowNext.png');
const ARROW_BACK = require('./assets/arrowBack.png');

const AnimatedTextInput = Reanimated.createAnimatedComponent(TextInput);

const Header = (props: HeaderProps) => {
  const {month, year} = props;
  const {selectedDate, setDate, showWeeksNumbers, staticHeader, setHeaderHeight} = useContext(CalendarContext);

  const getNewDate = useCallback((count: number) => {
    'worklet';
    const newDate = addMonths(selectedDate.value, count);
    const dateObject = getDateObject(newDate);
    return getTimestamp({year: dateObject.year, month: dateObject.month, day: 1});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gestureRight = Gesture.Tap().onBegin(() => {
    setDate(getNewDate(1), UpdateSource.MONTH_ARROW);
  });

  const gestureLeft = Gesture.Tap().onBegin(() => {
    setDate(getNewDate(-1), UpdateSource.MONTH_ARROW);
  });

  const animatedProps = useAnimatedProps(() => {
    const dateObject = getDateObject(selectedDate.value);
    const monthString = getMonthForIndex(staticHeader ? dateObject.month : month!);
    const dateString = staticHeader ? monthString + ` ${dateObject.year}` : monthString + ` ${year}`;
    return {
      text: dateString
    };
  });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setHeaderHeight?.(event.nativeEvent.layout.height);
  }, [setHeaderHeight]);

  const renderTitle = () => {
    // @ts-expect-error
    return <AnimatedTextInput {...{animatedProps}} editable={false} style={styles.title}/>;
  };

  const renderArrow = (source: number, gesture: TapGesture) => {
    return (
      <GestureDetector gesture={gesture}>
        <Icon source={source}/>
      </GestureDetector>
    );
  };

  const renderNavigation = () => {
    return (
      <View row spread style={styles.navigation}>
        {renderArrow(ARROW_BACK, gestureLeft)}
        {renderTitle()}
        {renderArrow(ARROW_NEXT, gestureRight)}
      </View>
    );
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      {renderNavigation()}
      <WeekDaysNames
        format={DayNamesFormat.LONG_ABBREVIATION}
        containerStyle={[styles.weekDaysNames, showWeeksNumbers && {marginLeft: WEEK_NUMBER_WIDTH}]}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
  navigation: {
    marginTop: 12,
    marginBottom: 16,
    marginHorizontal: 8
  },
  title: {
    color: Colors.$textDefault,
    paddingVertical: 0, // for Android inner paddings
    ...Typography.text60
  },
  weekDaysNames: {
    marginBottom: 8,
    marginHorizontal: 16
  }
});
