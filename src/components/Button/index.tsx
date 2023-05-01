import { SvgIcon } from "../SvgIcons";
import styles from "./style.module.scss";

type ButtonProps = {
  title: string;
  disabled?: boolean;
  icon?: string;
  toggleHandler?: (event: any) => void;
  btnType?: string;
};

export const Button = ({
  title,
  disabled = false,
  icon = "",
  toggleHandler,
  btnType = "blue",
}: ButtonProps) => {
  return (
    <button
      className={
        btnType === "blue" ? styles.customButtonBlue : styles.customButtonGray
      }
      disabled={disabled}
      onClick={toggleHandler}
    >
      {icon && <SvgIcon svgIconType={icon} />}
      <span>{title}</span>
    </button>
  );
};