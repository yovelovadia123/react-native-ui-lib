import {RadioGroupProps} from './index';
import {
  ComponentProps,
  ComponentDriverResult,
  useComponentDriver
} from '../../testkit/new/Component.driver';
import {RadioButtonDriver} from '../radioButton/RadioButton.driver.new';

type RadioGroupDriverProps = ComponentProps & {testIDs: Record<string, string>};

interface RadioGroupDriverInterface extends ComponentDriverResult<RadioGroupProps> {
  pressOn: (radioButtonTestId: string) => void;
}

export const RadioGroupDriver = (props: RadioGroupDriverProps): RadioGroupDriverInterface => {
  const {renderTree, testIDs} = props;
  const baseDriver = useComponentDriver<RadioGroupDriverProps>(props);
  const radioButtonDrivers: Record<string, ReturnType<typeof RadioButtonDriver>> = {};
  Object.values(testIDs).forEach((radioButtonTestId: string) => {
    radioButtonDrivers[radioButtonTestId] = RadioButtonDriver({renderTree, testID: radioButtonTestId});
  });
  return {
    ...baseDriver,
    pressOn: (radioButtonTestId: string) => radioButtonDrivers[radioButtonTestId].press()
  };
};
