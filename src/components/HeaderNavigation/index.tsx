import Link from "next/link";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { LinksWithQuery } from "@/types/types";

type HeaderNavigation = {
  headerNavigators?: LinksWithQuery[];
};

export const HeaderNavigation = ({ headerNavigators }: HeaderNavigation) => {
  const router = useRouter();
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const getHeaderCurrentLink = () => {
    return typeof router.query.headerCurrentLink === "string"
      ? router.query.headerCurrentLink
      : "";
  };

  return (
    <div
      className={styles.navigationContainer}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <nav>
        {headerNavigators?.map((item) => (
          <Link
            key={item.href}
            href={{
              pathname: item.href,
              query: item.query,
            }}
          >
            {item.linkName}
            <span
              className={`${
                item.href.includes(getHeaderCurrentLink()) && styles.active
              }`}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
};
