import { LinksWithQuery, rolesType } from "@/types/types";
import { ReactElement, createContext, useEffect, useState } from "react";

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
};

export const AppContext = createContext<AppContextProps>({
  tootleMenu: false,
  screenType: "",
  tootleMenuHandlerOpen: () => {},
  tootleMenuHandlerClose: () => {},
  discoverWeb3HeaderNavigators: [],
  discoverWeb3LinksContent: [],
  roles: [],
});

export const AppProvider = ({ children }: { children: ReactElement }) => {
  const [isMenuInScreen, setIsMenuInScreen] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<string>("");

  const tootleMenuHandlerOpen = () => {
    setIsMenuInScreen(true);
  };
  const tootleMenuHandlerClose = () => {
    setIsMenuInScreen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 600 && window.innerWidth < 767) {
        setScreenSize("mobile");
      }
      if (window.innerWidth > 768 && window.innerWidth < 1024) {
        setScreenSize("tablet");
      }
      if (window.innerWidth > 1100) {
        setScreenSize("desktop");
      }
    });
  }, []);

  const discoverWeb3HeaderNavigators = [
    {
      href: "/app/discover/overview",
      linkName: "Overview",
      query: { headerCurrentLink: "overview" },
    },
    {
      href: "/app/discover/projects",
      linkName: "Projects",
      query: { headerCurrentLink: "projects" },
    },
    {
      href: "/app/discover/events",
      linkName: "Events",
      query: { headerCurrentLink: "events" },
    },
    {
      href: "/app/discover/news",
      linkName: "News",
      query: { headerCurrentLink: "news" },
    },
    {
      href: "/app/discover/developer",
      linkName: "Developer Toolkit",
      query: { headerCurrentLink: "developer" },
    },
    {
      href: "/app/discover/entrepreneur",
      linkName: "Entrepreneur Toolkit",
      query: { headerCurrentLink: "entrepreneur" },
    },
  ];

  const roles = [
    {
      id: "Individual",
      title: "Individual",
      description:
        "For individuals who want to participate, develop or build with a click of a button.",
      icon: "individual",
      status: false,
    },
    {
      id: "Business",
      title: "Business",
      description:
        "For companies and institutions who need access to our suite of tools and real-time insights to manage and run their operations.",
      icon: "business",
      status: false,
    },
  ];

  const discoverWeb3LinksContent = [
    { id: "overview", data: { title: "Overview", description: "" } },
    { id: "projects", data: { title: "Projects", description: "" } },
    { id: "events", data: { title: "Events", description: "" } },
    { id: "news", data: { title: "News", description: "" } },
    { id: "developer", data: { title: "Developer", description: "" } },
    {
      id: "entrepreneur",
      data: {
        title: "Setup Guide",
        description:
          "Unlock your highest potential with our personalized guide!",
        steps: [
          {
            question: "How do you plan to use Edgevana?",
            variants: [
              "High Performant Validator",
              "Public Full Node Producer",
              "RPC (full program IDs)",
              "Web3 Developer",
              "Web2 Developer",
            ],
          },
          {
            question:
              "Is this your first time trying to run a node? If not, where have you participated in the past? ",
            variants: [
              "QuickNode",
              "Amazon Managed Blockchain",
              "Azure Blockchain Workbench",
              "Alchemy",
              "Blockdaemon",
              "This will be my first deployment! ",
            ],
          },
          {
            question: "Question 2?",
            variants: [
              "variants 1",
              "variants 2",
              "variants 3",
              "variants 4",
              "variants 5",
            ],
          },
          {
            question: "Question 3?",
            variants: [
              "variants 1",
              "variants 2",
              "variants 3",
              "variants 4",
              "variants 5",
            ],
          },
          {
            question: "Question 4?",
            variants: [
              "variants 1",
              "variants 2",
              "variants 3",
              "variants 4",
              "variants 5",
            ],
          },
          {
            question: "Question 5?",
            variants: [
              "variants 1",
              "variants 2",
              "variants 3",
              "variants 4",
              "variants 5",
            ],
          },
          {
            question: "Question 6?",
            variants: [
              "variants 1",
              "variants 2",
              "variants 3",
              "variants 4",
              "variants 5",
            ],
          },
        ],
      },
    },
  ];

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
