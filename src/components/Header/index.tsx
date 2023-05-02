import Image from "next/image";
import headerLogoImage from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <div
          style={{
            height: "4rem",
          }}
        >
          <Image
            src={headerLogoImage}
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
