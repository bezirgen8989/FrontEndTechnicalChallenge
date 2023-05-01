import styles from "./styles.module.scss";
import { svgIcons } from "../../assets/svgIcons";
type SvgIconProps = {
  svgIconType?: string;
};

export const SvgIcon = ({ svgIconType }: SvgIconProps) => {
  return (
    <div>
      {svgIcons[svgIconType] ? svgIcons[svgIconType] : <div>no such icon</div>}
    </div>
  );
};
