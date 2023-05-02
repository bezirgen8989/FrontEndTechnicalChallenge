import getConfig from "next/config";
import Image from "next/image";
const { publicRuntimeConfig } = getConfig();
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
            src={"../assets/images/Logo.svg"}
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
