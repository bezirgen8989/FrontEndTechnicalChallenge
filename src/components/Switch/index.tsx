import { useState } from "react";
import { SvgIcon } from "../SvgIcons";
import styles from "./styles.module.scss";

export const Switch = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const switchHandler = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={styles.switch} onClick={switchHandler}>
      <div className={styles.switchTexts}>
        <div className={styles.switchItem}>
          <div>
            <SvgIcon svgIconType="light" />
          </div>
          <div className={styles.text}>Light</div>
        </div>
        <div className={styles.switchItem}>
          <div>
            <SvgIcon svgIconType="dark" />
          </div>
          <div className={styles.text}>Dark</div>
        </div>
      </div>

      <input
        type="checkbox"
        className={styles.switchInput}
        onChange={switchHandler}
        checked={checked}
      />

      <span className={styles.switchSlider}>
        <label className={styles.switchLabel}></label>
      </span>
    </div>
  );
};
