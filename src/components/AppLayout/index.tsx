import styles from "./styles.module.scss";
import {useRouter} from "next/router";
import {ReactElement, useContext, useEffect, useState} from "react";
import Header from "@/components/Header";
import Link from "next/link";
import {IconName, SvgIcon} from "@/components/SvgIcon";
import Image from "next/image";
import {Switch} from "@/components/Switch";
import {AppContext} from "@/Context";
import testUserAvatar from "../../assets/images/testImage.png";
import {HeaderNavigation} from "@/components/HeaderNavigation";
import Breadcrumbs from "@/components/BreadCrumbs";
import {LinksWithQuery} from "@/types/types";

type AppLayoutProps = {
  children?: ReactElement;
};

type UserData = {
  agreement: boolean;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  userName: string;
};

export const AppLayout = ({children}: AppLayoutProps) => {
  const router = useRouter();
  const {
    tootleMenu,
    tootleMenuHandlerOpen,
    tootleMenuHandlerClose,
    screenType,
    theme,
    appContainerHeaderLinks
  } = useContext(AppContext);
  const currentAppRoute = router.pathname.split("/").filter(item => item !== "")[1]
  const [startX, setStartX] = useState<number | null>(null);

  const swipeRightHandler = () => {
    tootleMenuHandlerOpen();
  };
  const swipeLeftHandler = () => {
    tootleMenuHandlerClose();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX) {
      const distanceX = e.changedTouches[0].pageX - startX;
      if (distanceX > 50) {
        swipeRightHandler();
      } else if (distanceX < -50) {
        swipeLeftHandler();
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.pageX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (startX) {
      const distanceX = e.pageX - startX;
      if (distanceX > 50) {
        swipeRightHandler();
      } else if (distanceX < -50) {
        swipeLeftHandler();
      }
    }
  };

  const handleMouseUp = () => {
    if (startX) {
      setStartX(null);
    }
  };

  const currentRoute = router.asPath
    .split("/")
    .filter((item) => item !== "")[1];

  const [userData, setUserData] = useState<UserData>();
  const navigationLinks = [
    {linkName: "Nodes", href: "/app/nodes", iconType: "nodes"},
    {linkName: "Dashboard", href: "/app/dashboard", iconType: "dashboard"},
    {linkName: "Ecosystem", href: "/app/ecosystem", iconType: "ecosystem"},
    {linkName: "Analytics", href: "/app/analytics", iconType: "analytics"},
    {linkName: "Teams", href: "/app/teams", iconType: "teams"},
    {linkName: "Discover Web3", href: "/app/web3", iconType: "web3"},
  ];

  const currentNavLinkItem = navigationLinks.find(
    (item) => item.href === `/app/${currentRoute}`
  );

  const logout = () => {
    localStorage.clear();
    router.push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("userFormData");

    if (typeof window !== "undefined" && token) {
      setUserData(JSON.parse(token));
    }
    if (!token) {
      router.push("/auth");
    }
  }, [router]);

  return (
    <main
      className={styles.appContainer}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <nav
        className={styles.appContainerNav}
        style={{
          left:
            tootleMenu || screenType === "desktop"
              ? 0
              : screenType === "tablet"
                ? "-40%"
                : "-99%",
        }}
      >
        <Header isDarkTheme={theme.themeValue}/>
        <div className={styles.navigationContainer}>
          {navigationLinks.map((item) => (
            <Link
              key={item.linkName}
              href={`${item.href}`}
              onClick={tootleMenuHandlerClose}
              className={`${styles.navigationLink} ${
                currentNavLinkItem?.href === item.href
                  ? styles.activeLink
                  : null
              }`}
            >
              <div className={styles.iconContainer}>
                <SvgIcon
                  name={
                    currentNavLinkItem?.href !== item.href && !theme.themeValue
                      ? (item.iconType as IconName)
                      : (`${item.iconType}_active` as IconName)
                  }
                />
              </div>
              <span>{item.linkName}</span>
            </Link>
          ))}
        </div>

        <div className={styles.userSettings}>
          <div className={styles.userData}>
            <div className={styles.userImage}>
              <Image
                src={testUserAvatar}
                alt={"userAva"}
                width={35}
                height={35}
              />
            </div>

            <div className={styles.userInfo}>
              <div className={styles.info}>
                <p>{userData?.userName}</p>
                <p>{userData?.email}</p>
              </div>
              <div className={styles.logout} onClick={logout}>
                <SvgIcon name="logout"/>
              </div>
            </div>
          </div>

          <div>
            <Switch onChangeHandler={theme.setThemeValue} value={theme.themeValue}/>
          </div>
        </div>
      </nav>

      <section className={styles.section}>
        <header className={styles.header}>
          <div className={styles.navigationContainer}>
            <div className={styles.navigationBlock}>
              <div className={styles.icon}>
                <SvgIcon name={currentRoute as IconName}/>
              </div>
              <div className={styles.breadCrumbs}>
                <h2>{currentNavLinkItem?.linkName}</h2>
                <Breadcrumbs/>
              </div>
            </div>
          </div>
          <div className={styles.searchInput}>
            <input type="text" placeholder="Search"/>
            <i>
              <SvgIcon name="search"/>
            </i>
          </div>
        </header>
        <div className={styles.childrenContent}>
          {
            appContainerHeaderLinks && <HeaderNavigation headerNavigators={appContainerHeaderLinks[currentAppRoute]}/>
          }
          {children}
        </div>
      </section>
    </main>
  );
};
