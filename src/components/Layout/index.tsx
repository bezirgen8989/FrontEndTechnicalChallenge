import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./styles.module.scss";

interface I_Layout {
  children: ReactNode;
  isFooterVisible: boolean;
}

const Layout = ({ children, isFooterVisible }: I_Layout) => {
  return (
    <main className={styles.mainLayoutContainer}>
      <Header />
      <div className={styles.appContainer}>{children}</div>
      <Footer isVisible={isFooterVisible} />
    </main>
  );
};

export default Layout;
