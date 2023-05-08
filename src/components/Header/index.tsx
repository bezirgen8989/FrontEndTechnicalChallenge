import Image from "next/image";
import headerLogoImage from "../../assets/images/Logo.svg";
import headerLogoImageDark from "../../assets/images/Logo_dark.svg";
import {useContext} from "react";
import {AppContext} from "@/Context";

type HeaderProps = {}

const Header = ({}:HeaderProps) => {
  const {theme} = useContext(AppContext);

  return (
    <>
      <header>
        <div
          style={{
            height: "4rem",
          }}
        >
          <Image
            src={!theme.themeValue ? headerLogoImage : headerLogoImageDark}
            style={{
              width: "171px",
              height: "38px",
              marginTop: "21px",
              marginLeft: "24px",
            }}
            width={500}
            height={500}
            alt="Logo"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
