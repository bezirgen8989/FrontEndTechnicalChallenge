import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./styles.module.scss";

interface I_Layout {
  children: ReactNode;
}

const Layout = ({ children }: I_Layout) => {
  return (
    <main className={styles.mainLayoutContainer}>
      <Header />
      <div className={styles.appContainer}>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
