import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { ReactElement, useContext, useEffect, useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { SvgIcon } from "@/components/SvgIcons";
import Image from "next/image";
import { Switch } from "@/components/Switch";
import { AppContext } from "@/Context";

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

export const AppLayout = ({ children }: AppLayoutProps) => {
  const router = useRouter();
  const {
    tootleMenu,
    tootleMenuHandlerOpen,
    tootleMenuHandlerClose,
    screenType,
  } = useContext(AppContext);
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

  const currentRoute = router.asPath
    .split("/")
    .filter((item) => item !== "")[1];

  const [userData, setUserData] = useState<UserData>();
  const navigationLinks = [
    { linkName: "Nodes", href: "/app/nodes", iconType: "nodes" },
    { linkName: "Dashboard", href: "/app/dashboard", iconType: "dashboard" },
    { linkName: "Ecosystem", href: "/app/ecosystem", iconType: "ecosystem" },
    { linkName: "Analytics", href: "/app/analytics", iconType: "analytics" },
    { linkName: "Teams", href: "/app/teams", iconType: "teams" },
    { linkName: "Discover Web3", href: "/app/discover", iconType: "discover" },
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
  }, [router]);

  return (
    <main
      className={styles.appContainer}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <nav
        className={styles.appContainerNav}
        style={{
          left:
            tootleMenu || screenType === "desktop"
              ? 0
              : screenType === "tablet"
              ? "-33%"
              : "-99%",
        }}
      >
        <Header />
        <div className={styles.navigationContainer}>
          {navigationLinks.map((item) => (
            <div
              key={item.linkName}
              className={`${styles.navigationLink} ${
                currentNavLinkItem?.href === item.href
                  ? styles.activeLink
                  : null
              }`}
            >
              <div className={styles.iconContainer}>
                <SvgIcon svgIconType={item.iconType} />
              </div>
              <Link href={`${item.href}`} onClick={tootleMenuHandlerClose}>
                {item.linkName}
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.userSettings}>
          <div className={styles.userData}>
            <div className={styles.userImage}>
              <Image
                src={"/assets/images/testImage.png"}
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
                <SvgIcon svgIconType="logout" />
              </div>
            </div>
          </div>

          <div>
            <Switch />
          </div>
        </div>
      </nav>

      <section className={styles.section}>
        <header className={styles.header}>
          <div className={styles.navigationContainer}>
            <div className={styles.navigationBlock}>
              <div className={styles.icon}>
                <SvgIcon svgIconType={currentRoute} />
              </div>
              <div className={styles.breadCrumbs}>
                <h2>{currentNavLinkItem?.linkName}</h2>
                <div>{currentNavLinkItem?.linkName}</div>
              </div>
            </div>
          </div>
          <div className={styles.searchInput}>
            <input type="text" placeholder="Search" />
            <i>
              <SvgIcon svgIconType="search" />
            </i>
          </div>
        </header>
        <div className={styles.childrenContent}>{children}</div>
      </section>
    </main>
  );
};