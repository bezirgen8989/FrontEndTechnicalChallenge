import Link from "next/link";
import styles from "./style.module.scss";
import { useRouter } from "next/router";

type HeaderNavigation = {
  headerNavigators?: any[];
};

export const HeaderNavigation = ({ headerNavigators }: HeaderNavigation) => {
  const router = useRouter();

  return (
    <div className={styles.navigationContainer}>
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
                item.href.includes(router.query.headerCurrentLink) &&
                styles.active
              }`}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
};
