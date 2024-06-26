import {RefObject, useCallback, useState, useEffect} from 'react';
import _ from 'lodash';
import {
  PickerProps,
  PickerValue,
  PickerSingleValue,
  PickerMultiValue,
  PickerModes,
  PickerPropsDeprecation
} from '../types';

type UsePickerSelectionProps = Pick<PickerProps, 'value' | 'onChange' | 'mode' | 'onCancel'> &
  Pick<PickerPropsDeprecation, 'migrate' | 'getItemValue' | 'topBarProps'> & {
    pickerExpandableRef: RefObject<any>;
    setSearchValue: (searchValue: string) => void;
  };

const usePickerSelection = (props: UsePickerSelectionProps) => {
  const {migrate, value, onChange, onCancel, topBarProps, pickerExpandableRef, getItemValue, setSearchValue, mode} =
    props;
  const [multiDraftValue, setMultiDraftValue] = useState(value as PickerMultiValue);
  const [multiFinalValue, setMultiFinalValue] = useState(value as PickerMultiValue);

  useEffect(() => {
    if (mode === PickerModes.MULTI && multiFinalValue !== value) {
      setMultiDraftValue(value as PickerMultiValue);
      setMultiFinalValue(value as PickerMultiValue);
    }
  }, [value]);

  const onDoneSelecting = useCallback((item: PickerValue) => {
    setSearchValue('');
    setMultiFinalValue(item as PickerMultiValue);
    pickerExpandableRef.current?.closeExpandable?.();
    onChange?.(item);
  },
  [onChange]);

  const toggleItemSelection = useCallback((item: PickerSingleValue) => {
    let newValue;
    const itemAsArray = [item];
    if (!migrate) {
      newValue = _.xorBy(multiDraftValue, itemAsArray, getItemValue || 'value');
    } else {
      newValue = _.xor(multiDraftValue, itemAsArray);
    }

    setMultiDraftValue(newValue);
  },
  [multiDraftValue, getItemValue]);

  const cancelSelect = useCallback(() => {
    setSearchValue('');
    setMultiDraftValue(multiFinalValue);
    pickerExpandableRef.current?.closeExpandable?.();
    if (onCancel) {
      onCancel();
    } else {
      topBarProps?.onCancel?.();
    }
  }, [multiFinalValue, topBarProps, onCancel, setSearchValue, pickerExpandableRef]);

  return {
    multiDraftValue,
    onDoneSelecting,
    toggleItemSelection,
    cancelSelect
  };
};

export default usePickerSelection;
