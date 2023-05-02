import { useEffect, useState } from "react";
import styles from "./style.module.scss";

type PasswordPowerProps = {
  enteredPassword: string;
};
enum Statuses {
  weak = "weak",
  normal = "normal",
  strong = "strong",
}

type StatusesMap = Record<Statuses, boolean>;

export const PasswordPower = ({ enteredPassword }: PasswordPowerProps) => {
  const [passwordStrongStatus, setPasswordStrongStatus] = useState<StatusesMap>(
    {
      weak: false,
      normal: false,
      strong: false,
    }
  );

  useEffect(() => {
    const weakCriteria = !!enteredPassword.length;
    const normalCriteria = enteredPassword.length >= 6;
    const strongCriteria = enteredPassword.length >= 8;

    setPasswordStrongStatus({
      weak: weakCriteria,
      normal: normalCriteria,
      strong: strongCriteria,
    });
  }, [enteredPassword]);

  return (
    <div className={styles.passwordStatusContainer}>
      {Object.values(Statuses).map((item) => (
        <div
          key={item}
          className={`${styles.passwordStatus} ${
            passwordStrongStatus[item] && styles.active
          }`}
        >
          <span></span>
        </div>
      ))}
    </div>
  );
};
