import React, { useState } from "react";
import { SvgIcon } from "../SvgIcon";
import styles from "./styles.module.scss";

type SwitchProps = {
  onChangeHandler: ()=>void;
}

export const Switch = ({onChangeHandler}: SwitchProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const switchHandler = () => {
    setChecked((prev) => !prev);
    onChangeHandler()
  };

  return (
    <div className={styles.switch} onClick={switchHandler}>
      <div className={styles.switchTexts}>
        <div className={styles.switchItem}>
          <div>
            <SvgIcon name="light" />
          </div>
          <div className={styles.text}>Light</div>
        </div>
        <div className={styles.switchItem}>
          <div>
            <SvgIcon name="dark" />
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
        <label className={styles.switchLabel}/>
      </span>
    </div>
  );
};
