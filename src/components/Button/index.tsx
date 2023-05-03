import { IconName, SvgIcon } from "../SvgIcon";
import styles from "./style.module.scss";

type ButtonProps = {
  title: string;
  disabled?: boolean;
  icon?: IconName | "";
  toggleHandler?: (e: React.MouseEvent<HTMLElement>) => void;
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
      {icon && <SvgIcon name={icon} />}
      <span>{title}</span>
    </button>
  );
};
