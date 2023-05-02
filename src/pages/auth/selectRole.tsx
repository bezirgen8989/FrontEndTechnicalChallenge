import Head from "next/head";
import styles from "../../styles/selectRole.module.scss";
import Header from "@/components/Header";
import { Card } from "@/components/Card";
import { useContext, useState } from "react";
import { Button } from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { RightSideBlock } from "@/components/RightSideBlock";
import Footer from "@/components/Footer";
import selectRolePageImage from "../../assets/images/newGeneralInfoImage.png";
import { SvgIcon } from "@/components/SvgIcons";
import { rolesType } from "@/types/types";
import { AppContext } from "@/Context";

const SelectRole = () => {
  const { roles } = useContext(AppContext);
  const [rolesState, setRolesState] = useState<rolesType[]>(roles);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const router = useRouter();

  const itemStatusHandler = (id: string) => {
    setRolesState((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: true } : { ...item, status: false }
      )
    );
    setSelectedRole(id);
  };

  const startAuthHandler = () => {
    router.push(`/auth/signUp${selectedRole}`);
  };

  const footerElement = () => {
    return (
      <div className={styles.imageContainerDescription}>
        <div className={styles.descriptionBlock}>
          <h1>Accelerating the next generation of the internet</h1>
          <p>
            Participate in over 100+ protocols with one click | Zero to operator
            in 60 seconds
          </p>
        </div>
        <div className={styles.arrowsBtnContainer}>
          <SvgIcon svgIconType="noneActiveSwitchArrow" />
          <SvgIcon svgIconType="activeSwitchArrow" />
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Authorize</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <main className={styles.selectRoleContainer}>
        <div className={styles.rolesContainer}>
          <Header />
          <div className={styles.rolesBlok}>
            <div>
              <div className={styles.rolesBlokDescription}>
                <h1>Welcome to Edgevana</h1>
                <p>Choose your account type to get started</p>
              </div>
              <div className={styles.rolesItemsContainer}>
                {rolesState.map((item, id) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    active={item.status}
                    activeStatusHandler={() => itemStatusHandler(item.id)}
                  />
                ))}
                <Button title="Get Started" toggleHandler={startAuthHandler} />
                <p>
                  Already have an account?
                  <Link href={"/signIn"}> Sign in</Link>
                </p>
              </div>
            </div>
            <Footer />
          </div>
        </div>
        <div className={styles.rightSideBlock}>
          <RightSideBlock
            imageSrc={selectRolePageImage.src}
            imageAlt="General Info Image"
            imageWidth={1031 * 2}
            imageHeight={675 * 2}
            footer={footerElement()}
          />
        </div>
      </main>
    </>
  );
};

export default SelectRole;
