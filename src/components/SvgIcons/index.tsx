import styles from "./styles.module.scss";
import { svgIcons } from "../../assets/svgIcons";
type SvgIconProps = {
  svgIconType?: string;
};

export const SvgIcon = ({ svgIconType }: SvgIconProps) => {
  const icons: any = svgIcons;
  return (
    <div>
      {svgIconType && icons[svgIconType] ? (
        icons[svgIconType]
      ) : (
        <div>no such icon</div>
      )}
    </div>
  );
};
