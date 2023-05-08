import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body>
      <Main/>
      <NextScript/>
      <script
        dangerouslySetInnerHTML={{
          __html: themeInitializerScript,
        }}
      />
      </body>
    </Html>
  );
}

const themeInitializerScript = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`;

function setInitialColorMode() {
  // Check initial color preference
  function getInitialColorMode() {
    const persistedPreferenceMode = window.localStorage.getItem('theme');
    if(persistedPreferenceMode){
      return persistedPreferenceMode;
    }else{
      return "light";
    }
    // const hasPersistedPreference = typeof persistedPreferenceMode === 'string';
    // if (hasPersistedPreference) {
    //   return persistedPreferenceMode;
    // }
    //
    // // Check the current preference
    // const preference = window.matchMedia('(prefers-color-scheme: light)');
    // const hasMediaQueryPreference = true;

    // if (hasMediaQueryPreference) {
    //   return preference.matches ? 'light' : 'dark';
    // }
    //
    // return 'light';
  }

  const currentColorMode = getInitialColorMode();
  const element = document.documentElement;
  element.style.setProperty('--initial-color-mode', currentColorMode);

  // If darkmode apply darkmode
  if (currentColorMode === 'dark')
    document.documentElement.setAttribute('data-theme', 'dark');
}