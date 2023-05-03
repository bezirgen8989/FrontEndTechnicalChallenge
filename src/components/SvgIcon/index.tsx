import * as Icons from "@/assets/icons";
import Image from "next/image";

export type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
}

export const SvgIcon = ({ name }: IconProps) => {
  return <Image alt={name} src={Icons[name]} />;
};
