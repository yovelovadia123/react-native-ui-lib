import {fireEvent} from '@testing-library/react-native';
import {ComponentDriverResult} from './Component.driver';
import {NativeScrollEvent, NativeScrollPoint} from 'react-native';

type ScrollableDriverOptions = Omit<NativeScrollEvent, 'contentOffset'>;

type ContentOffset = Partial<NativeScrollPoint>;

export type ScrollProps = ContentOffset & {options?: ScrollableDriverOptions};

export interface ScrollableDriverResult<Props> extends ComponentDriverResult<Props> {
  scroll: (contentOffset: ContentOffset, options?: ScrollableDriverOptions) => void;
  triggerEvent: (eventName?: string, event?: Partial<NativeScrollEvent>) => void;
}

export const useScrollableDriver = 
<Props, DriverProps extends ComponentDriverResult<Props> = ComponentDriverResult<Props>>(driver: DriverProps): 
ScrollableDriverResult<Props> & DriverProps => {

  const getContentOffset = async () => await driver.getElement().props.contentOffset;

  const scroll = ({x = 0, y = 0}, options?: ScrollableDriverOptions) => {
    fireEvent.scroll(driver.getElement(), {
      nativeEvent: {
        ...options,
        contentOffset: {x, y}
      }
    });
  };

  const triggerEvent = (eventName?: string, event?: Partial<NativeScrollEvent>) => {
    if (eventName) {
      fireEvent(driver.getElement(), eventName, {
        nativeEvent: event
      });
    }
  };

  return {
    ...driver,
    getContentOffset,
    scroll,
    triggerEvent
  };
};
