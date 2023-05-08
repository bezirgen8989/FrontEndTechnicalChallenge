import {LinksWithQuery, rolesType} from "@/types/types";
import {createContext, ReactElement, useEffect, useState} from "react";
import {discoverWeb3HeaderNavigators, discoverWeb3LinksContent, roles} from "@/Context/db";
import {lock} from "next/dist/client/components/react-dev-overlay/internal/components/Overlay/body-locker";

type DiscoverWeb3Links = {
  id: string;
  data: {
    title: string;
    description: string;
    steps?: {
      question: string;
      variants: string[];
    }[];
  };
};

type AppContextProps = {
  tootleMenu?: boolean;
  tootleMenuHandlerOpen: () => void;
  tootleMenuHandlerClose: () => void;
  screenType: string;
  discoverWeb3HeaderNavigators: LinksWithQuery[];
  discoverWeb3LinksContent: DiscoverWeb3Links[];
  roles: rolesType[];
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
  discoverWeb3HeaderNavigators: [],
  discoverWeb3LinksContent: [],
  roles: [],
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

    screen.orientation?.lock("landscape")

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
    return()=> window.removeEventListener("resize", resizeHandler)
  }, []);

  return (
    <AppContext.Provider
      value={{
        tootleMenu: isMenuInScreen,
        tootleMenuHandlerOpen,
        tootleMenuHandlerClose,
        screenType: screenSize,
        discoverWeb3HeaderNavigators,
        discoverWeb3LinksContent,
        roles,
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
