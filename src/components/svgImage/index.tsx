import React from 'react';
import {isSvg, isSvgUri} from '../../utils/imageUtils';
import {SvgPackage} from '../../optionalDependencies';

const SvgXml = SvgPackage?.SvgXml;
const SvgCssUri = SvgPackage?.SvgCssUri;
const SvgCss = SvgPackage?.SvgCss;
// const SvgProps = SvgPackage?.SvgProps; TODO: not sure how (or if) we can use their props

const fillReg = /fill="((#[0-9a-fA-F]*)|([a-zA-Z]*))"/g;
type dynamicColorsType = Record<string, string>;
export interface SvgImageProps {
  /**
   * the asset tint
   */
  tintColor?: string | null;
  data: any; // TODO: I thought this should be string | React.ReactNode but it doesn't work properly
  /**
   * SVG dynamic colors
   */
  colors?: dynamicColorsType;
}

// const getDynamicColorsChange = (xml: string, colors: dynamicColorsType) => {
//   let index = 0;
//   const found = xml.replace(fillReg, match => {
//     const replacement = colors[index];
//     index += 1;
//     return replacement ? `fill="${replacement}"` : match;
//   });
//   return found;
// };
const getDynamicColorsChange = (xml: string, colors: dynamicColorsType) => {
  // let index = 0;
  const changeFillings = xml.replace(fillReg, (match, g1) => {
    if (g1 in colors) {
      return `fill="${colors[g1]}"`;
    }
    return match;
  });
  return changeFillings;
};

function SvgImage(props: SvgImageProps) {
  // tintColor crashes Android, so we're removing this until we properly support it.
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const {data, tintColor, colors, ...others} = props;
  const [xml, setXml] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!isSvgUri(data)) {
      return;
    }
    fetch(data?.uri)
      .then(res => res.text())
      .then(setXml)
      .catch(console.log);
  }, [data]);
  if (!SvgXml) {
    // eslint-disable-next-line max-len
    console.error(`RNUILib Image "svg" prop requires installing "react-native-svg" and "react-native-svg-transformer" dependencies`);
    return null;
  }
  if (isSvgUri(data)) {
    return <SvgCss {...others} xml={colors && xml ? getDynamicColorsChange(xml, colors) : xml}/>;
  } else if (typeof data === 'string') {
    return <SvgXml xml={colors ? getDynamicColorsChange(data, colors) : data} {...others}/>;
  } else if (data) {
    const File = data; // Must be with capital letter
    return <File {...others}/>;
  }

  return null;
}

SvgImage.displayName = 'IGNORE';
SvgImage.isSvg = isSvg;

export default SvgImage;
