import Link from "next/link";
import styles from "../styles/404page.module.scss";
import { RightSideBlock } from "@/components/RightSideBlock";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";

export default function FourOhFour() {
  const router = useRouter();
  return (
    <div className={styles.page404Container}>
      <div className={styles.page404Block}>
        <div className={styles.page404Header}>
          <h1>404 - Page Not Found</h1>
          <h2>Whoops!</h2>
          <p>This page got lost in conversation.</p>
        </div>
        <div className={styles.page404Description}>
          <p>Not to worry. You can head over to our homepage</p>
        </div>
        <div className={styles.page404GoBackHome}>
          <Button
            title={"Go back"}
            toggleHandler={() => {
              router.back();
            }}
          />
        </div>
      </div>
      <div className={styles.rightSideBlock}>
        <RightSideBlock
          imageSrc={"/assets/images/404.jpeg"}
          imageAlt={"404 page not found"}
          imageWidth={50}
          imageHeight={50}
        />
      </div>
    </div>
  );
}
