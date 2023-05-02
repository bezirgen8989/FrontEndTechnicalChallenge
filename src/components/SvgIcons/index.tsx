import { svgIcons } from "@/assets/svgIcons";

type SvgIconProps = {
  svgIconType: keyof typeof svgIcons;
};

export const SvgIcon = ({ svgIconType }: SvgIconProps) => {
  return <div>{svgIconType ? svgIcons[svgIconType] : "no such element"}</div>;
};
