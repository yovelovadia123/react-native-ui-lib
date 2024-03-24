import {RadioButtonProps} from './index';
import {useComponentDriver, ComponentProps} from '../../testkit/new/Component.driver';
import {usePressableDriver, PressableDriverResult} from '../../testkit/new/usePressable.driver';
import {TextDriver} from '../text/Text.driver.new';
import {ImageDriver} from '../image/Image.driver.new';

interface RadioButtonDriverInterface extends PressableDriverResult<RadioButtonProps> {
  hasLabel: () => boolean;
  hasIcon: () => boolean;
}

export const RadioButtonDriver = (props: ComponentProps): RadioButtonDriverInterface => {
  const {renderTree, testID} = props;
  const baseDriver = usePressableDriver<any>(useComponentDriver(props));
  const labelDriver = TextDriver({renderTree, testID: `${testID}.label`});
  const iconDriver = ImageDriver({renderTree, testID: `${testID}.icon`});

  return {
    ...baseDriver,
    hasLabel: () => labelDriver.exists(),
    hasIcon: () => iconDriver.exists()
  };
};
