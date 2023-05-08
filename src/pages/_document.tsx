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
      window.localStorage.setItem("theme", "light")
      return "light";
    }
  }

  const currentColorMode = getInitialColorMode();
  const element = document.documentElement;
  element.style.setProperty('--initial-color-mode', currentColorMode);

  // If darkmode apply darkmode
  if (currentColorMode === 'dark')
    document.documentElement.setAttribute('data-theme', 'dark');
}