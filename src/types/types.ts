export type LinksWithQuery = {
  href: string;
  linkName: string;
  query: { headerCurrentLink: string };
};

export type svgObjectType = {
  individual: JSX.Element;
  business: JSX.Element;
  eye: JSX.Element;
  lineEye: JSX.Element;
  nodes: JSX.Element;
  dashboard: JSX.Element;
  ecosystem: JSX.Element;
  analytics: JSX.Element;
  teams: JSX.Element;
  discover: JSX.Element;
  light: JSX.Element;
  dark: JSX.Element;
  logout: JSX.Element;
  search: JSX.Element;
  noneActiveSwitchArrow: JSX.Element;
  activeSwitchArrow: JSX.Element;
};

export type rolesType = {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: boolean;
};
