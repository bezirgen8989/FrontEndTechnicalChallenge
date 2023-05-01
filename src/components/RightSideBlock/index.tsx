import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

type RightSideBlockProps = {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  isImageContainerCentered?: boolean;
};

export const RightSideBlock = ({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  footer,
  header,
  isImageContainerCentered,
}: RightSideBlockProps) => {
  return (
    <>
      <div
        className={
          isImageContainerCentered
            ? styles.imageContainerCenter
            : styles.imageContainer
        }
      >
        {header && header}
        <div className={styles.image}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
        {footer && footer}
      </div>
    </>
  );
};
