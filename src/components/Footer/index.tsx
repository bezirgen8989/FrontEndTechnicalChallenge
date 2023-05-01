import styles from "./styles.module.scss";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.footerBlock}>
          <h5>© Edegvana 2022</h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;
