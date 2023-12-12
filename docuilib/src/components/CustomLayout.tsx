import React, {useEffect} from 'react';
import DocPage from '@theme/DocPage';
import StandWithUkraine from '@site/src/components/StandWithUkraine';

export default function CustomLayout(props) {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://snack.expo.dev/embed.js';
    // document.body.appendChild(script);
    const div = document.createElement('div');
    div.id = 'snack-container';
    div.appendChild(script);
    document.body.appendChild(div);
    return () => {
      document.body.removeChild(div);
    };
  }, []);

  return (
    <>
      <StandWithUkraine/>
      <DocPage {...props}/>
    </>
  );
}
