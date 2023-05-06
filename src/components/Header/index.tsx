import Image from "next/image";
import headerLogoImage from "../../assets/images/Logo.svg";
import headerLogoImageDark from "../../assets/images/Logo_dark.svg";

type HeaderProps = {
  isDarkTheme: boolean;
}

const Header = ({isDarkTheme}:HeaderProps) => {

  return (
    <>
      <header>
        <div
          style={{
            height: "4rem",
          }}
        >
          <Image
            src={!isDarkTheme ? headerLogoImage : headerLogoImageDark}
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
