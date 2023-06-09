import { IconName, SvgIcon } from "../SvgIcon";
import styles from "./styles.module.scss";

type CardProps = {
  id: string;
  title?: string;
  description?: string;
  icon: IconName;
  active?: boolean;
  activeStatusHandler: (id: string) => void;
};

export const Card = ({
  id,
  title,
  description,
  icon,
  active,
  activeStatusHandler,
}: CardProps) => {
  return (
    <div
      onClick={() => activeStatusHandler(id)}
      className={`${styles.cardContainer} ${
        active && styles.activeCardContainer
      }`}
    >
      <div className={styles.cardIconContainer}>
        <SvgIcon name={icon} />
      </div>
      <div className={styles.cardInfoContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
