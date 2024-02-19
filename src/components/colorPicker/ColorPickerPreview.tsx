import React, {useContext, useEffect, useRef} from 'react';
import {StyleSheet, TextInput, PixelRatio, I18nManager} from 'react-native';

import {Colors, Typography} from '../../style';
import {ColorPickerDialogProps} from './ColorPickerDialog';
import {BORDER_RADIUS, getTextColor} from './ColorPickerPresenter';
import {ColorPickerContext} from './context/ColorPickerContext';
import View from '../view';
import TouchableOpacity from '../touchableOpacity';
import Text from '../text';
import {Constants} from '../../commons/new';
import Animated, {useAnimatedStyle, useAnimatedProps, useAnimatedRef, useDerivedValue} from 'react-native-reanimated';

type PreviewProps = Pick<ColorPickerDialogProps, 'accessibilityLabels' | 'previewInputStyle' | 'testID'> & {
  onChangeText: (value: string) => void;
  onFocus: () => void;
};

Animated.addWhitelistedNativeProps({text: true, selectionColor: true});

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Preview = (props: PreviewProps) => {
  const {onChangeText, previewInputStyle, onFocus, accessibilityLabels, testID} = props;
  const colorPickerContext = useContext(ColorPickerContext);
  const {grey10, white} = Colors;
  const fontScale = PixelRatio.getFontScale();

  const previewBackgroundColor = useAnimatedStyle(() => {
    return {
      backgroundColor: colorPickerContext?.hex.value || '#ffffff'
    };
  });

  const textColor = useDerivedValue(() => {
    const l = colorPickerContext?.value.value.l;
    return l && l > 0.45 ? grey10 : white;
  });

  const textStyle = useAnimatedStyle(() => {
    const value = colorPickerContext?.hex.value;
    return {
      color: textColor.value,
      width: value ? value.length * 16.5 * fontScale : undefined
    };
  });

  const underlineStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: textColor.value
    };
  });

  const animatedProps = useAnimatedProps(() => {
    return {
      text: colorPickerContext?.hex.value?.toUpperCase()
      // selectionColor: textColor.value
    } as any;
  }, [colorPickerContext]);

  const textInput = useAnimatedRef<TextInput>();

  return (
    <Animated.View style={[styles.preview, previewBackgroundColor]}>
      <TouchableOpacity
        center
        onPress={() => {
          textInput.current?.focus();
        }}
        activeOpacity={1}
        accessible={false}
      >
        <View style={styles.inputContainer}>
          <AnimatedTextInput
            // @ts-expect-error
            ref={textInput}
            value={colorPickerContext?.hex.value}
            maxLength={6}
            numberOfLines={1}
            onChangeText={onChangeText}
            style={[styles.input, textStyle, Constants.isAndroid && {padding: 0}, previewInputStyle]}
            underlineColorAndroid="transparent"
            autoCorrect={false}
            autoComplete={'off'}
            autoCapitalize={'characters'}
            // keyboardType={'numbers-and-punctuation'} // doesn't work with `autoCapitalize`
            returnKeyType={'done'}
            enablesReturnKeyAutomatically
            onFocus={onFocus}
            accessibilityLabel={accessibilityLabels?.input}
            testID={`${testID}.dialog.textInput`}
            {...{animatedProps}}
          />
        </View>
        <Animated.View style={[underlineStyle, styles.underline]}/>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Preview;

const styles = StyleSheet.create({
  header: {
    height: 56,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    backgroundColor: Colors.$backgroundDefault
  },
  preview: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.$outlineDisabled,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.$outlineDisabled
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: Constants.isAndroid ? 5 : 8,
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },
  input: {
    ...Typography.text60,
    letterSpacing: 3,
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },
  underline: {
    height: 1.5,
    width: Constants.isAndroid ? 119 : 134,
    marginRight: Constants.isAndroid ? 13 : 8
  }
});
