import React  from "react";
import { SvgIcon } from "../SvgIcon";
import styles from "./styles.module.scss";

type SwitchProps = {
  value: boolean;
  onChangeHandler: ()=>void;
}

export const Switch = ({onChangeHandler, value}: SwitchProps) => {

  return (
    <div className={styles.switch} onClick={onChangeHandler}>
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
        onChange={onChangeHandler}
        checked={value}
      />

      <span className={styles.switchSlider}>
        <label className={styles.switchLabel}/>
      </span>
    </div>
  );
};
