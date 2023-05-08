import {LinksWithQuery, rolesType} from "@/types/types";
import {createContext, ReactElement, useEffect, useState} from "react";
import {roles, web3} from "@/Context/db";

type AppContextProps = {
  tootleMenu?: boolean;
  tootleMenuHandlerOpen: () => void;
  tootleMenuHandlerClose: () => void;
  screenType: string;
  roles: rolesType[];
  appContainerHeaderLinks: {
    [key: string]: LinksWithQuery[] | null;
  },
  theme: {
    themeValue: boolean;
    setThemeValue: () => void
  };
};

export const AppContext = createContext<AppContextProps>({
  tootleMenu: false,
  screenType: "",
  tootleMenuHandlerOpen: () => {
  },
  tootleMenuHandlerClose: () => {
  },
  roles: [],
  appContainerHeaderLinks: {
    web3: null,
    teams: null,
    analytics: null,
    ecosystem: null,
    dashboard: null,
    nodes: null,
  },
  theme: {
    themeValue: false,
    setThemeValue: () => {
    },
  },
});

export const AppProvider = ({children}: { children: ReactElement }) => {
  const [isMenuInScreen, setIsMenuInScreen] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<string>("");
  const [themeValue, setThemeValue] = useState<boolean>(false);

  const appContainerHeaderLinks = {
    web3,
    teams: null,
    analytics: null,
    ecosystem: null,
    dashboard: null,
    nodes: null,
  }

  const tootleMenuHandlerOpen = () => {
    setIsMenuInScreen(true);
  };
  const tootleMenuHandlerClose = () => {
    setIsMenuInScreen(false);
  };

  const themeHandler = () => {
    const theme = themeValue ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
    setThemeValue(!themeValue);
  }

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    const isDarkMode = selectedTheme === 'dark';

    if (selectedTheme != null) {
      document.documentElement.setAttribute('data-theme', selectedTheme);
    }
    setThemeValue(isDarkMode);


    const resizeHandler = () => {
      if (window.innerWidth > 600 && window.innerWidth < 767) {
        setScreenSize("mobile");
      }
      if (window.innerWidth > 768 && window.innerWidth < 1024) {
        setScreenSize("tablet");
      }
      if (window.innerWidth > 1100) {
        setScreenSize("desktop");
      }
    }

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler)
  }, []);

  return (
    <AppContext.Provider
      value={{
        tootleMenu: isMenuInScreen,
        tootleMenuHandlerOpen,
        tootleMenuHandlerClose,
        screenType: screenSize,
        roles,
        appContainerHeaderLinks,
        theme: {
          themeValue,
          setThemeValue: themeHandler,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
