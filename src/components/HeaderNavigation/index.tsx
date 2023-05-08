import Link from "next/link";
import styles from "./style.module.scss";
import {useRouter} from "next/router";
import {LinksWithQuery} from "@/types/types";

type HeaderNavigation = {
  headerNavigators: LinksWithQuery[] | null;
};

export const HeaderNavigation = ({headerNavigators}: HeaderNavigation) => {
  const router = useRouter();
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
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
            href={item.href}
          >
            {item.linkName}
            <span
              className={`${
                item.href === router.pathname && styles.active
              }`}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
};
