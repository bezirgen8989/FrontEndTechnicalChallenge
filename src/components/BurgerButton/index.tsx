import styles from "./styles.module.scss";

export const BurgerButton = () => {
  return (
    <div className={styles.menuIcon}>
      <input className={styles.menuIconCheeckbox} type="checkbox" />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
