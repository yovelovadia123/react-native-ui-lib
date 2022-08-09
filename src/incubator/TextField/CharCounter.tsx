import React, {useContext, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import _ from 'lodash';
import Text from '../../components/text';
import FieldContext from './FieldContext';
import {CharCounterProps} from './types';

const CharCounter = ({maxLength, charCounterStyle, testID}: CharCounterProps) => {
  const {value} = useContext(FieldContext);

  const textStyle = useMemo(() => [styles.container, charCounterStyle], [charCounterStyle]);

  if (_.isUndefined(maxLength)) {
    return null;
  }

  return (
    <Text $textNeutral style={textStyle} testID={testID}>
      {`${_.size(value)}/${maxLength}`}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'right'
  }
});

CharCounter.displayName = 'Incubator.TextField';
export default CharCounter;
