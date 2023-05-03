import { IconName, SvgIcon } from "../SvgIcon";
import styles from "./style.module.scss";

type FormInputProps = {
  name: string;
  type?: string;
  label?: string;
  disabled?: boolean;
  icon?: IconName;
  switchIconType?: () => void;
};

export const FormInput = ({
  name,
  type = "text",
  label,
  disabled = false,
  icon,
  switchIconType,
}: FormInputProps) => {
  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <div>
        <input
          type={type}
          name={name}
          disabled={disabled}
          className={`${type === "password" && styles.password}`}
        />
        {icon && (
          <div className={styles.iconInto} onClick={switchIconType}>
            <SvgIcon name={icon} />
          </div>
        )}
      </div>
      <p></p>
    </div>
  );
};
