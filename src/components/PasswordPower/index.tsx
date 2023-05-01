import { useEffect, useState } from "react";
import styles from "./style.module.scss";

type PasswordPowerProps = {
  enteredPassword: string;
};

export const PasswordPower = ({ enteredPassword }: PasswordPowerProps) => {
  const [passwordStrongStatus, setPasswordStrongStatus] = useState<string[]>(
    []
  );
  useEffect(() => {
    const weakCriteria =
      enteredPassword.length < 6 ||
      (!/\d/.test(enteredPassword) && !passwordStrongStatus.includes("weak"));
    const normalCriteria =
      enteredPassword.length >= 6 &&
      /\d/.test(enteredPassword) &&
      !passwordStrongStatus.includes("normal");
    const strongCriteria =
      enteredPassword.length >= 8 && !passwordStrongStatus.includes("strong");

    if (weakCriteria) {
      setPasswordStrongStatus((prev) => [...prev, "weak"]);
    }
    if (normalCriteria) {
      setPasswordStrongStatus((prev) => [...prev, "normal"]);
    }
    if (strongCriteria) {
      setPasswordStrongStatus((prev) => [...prev, "strong"]);
    }
    if (!enteredPassword.length) {
      setPasswordStrongStatus([]);
    }
  }, [enteredPassword]);

  const statuses = [{ type: "weak" }, { type: "normal" }, { type: "strong" }];

  return (
    <div className={styles.passwordStatusContainer}>
      {statuses.map((item) => (
        <div
          key={item.type}
          className={`${styles.passwordStatus} ${
            passwordStrongStatus.includes(item.type) && styles.active
          }`}
        >
          <span></span>
        </div>
      ))}
    </div>
  );
};
