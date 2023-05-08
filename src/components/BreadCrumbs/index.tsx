import Link from 'next/link';
import styles from "./styles.module.scss"
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment !== '' && segment !== "app");

  const breadCrumbsNames = {
    overview: "Overview",
    projects: "Projects",
    events: "Events",
    news: "News",
    developer: "Developer Toolkit",
    entrepreneur: "Entrepreneur Toolkit",
    web3: "Web3",
  }

  return (
    <nav aria-label="breadcrumbs" className={styles.breadCrumbsContainer}>
      <ul className={styles.breadCrumbs}>
        {pathSegments.map((segment, index) => {
          const href = `/app/${pathSegments.slice(0, index + 1).join('/')}`;
          const formattedSegment = breadCrumbsNames[segment]
            ? breadCrumbsNames[segment]
            : segment.charAt(0).toUpperCase() + segment.slice(1);
          const isLastSegment = index === pathSegments.length - 1;
          return (
            <li key={href}>
              <Link href={href}>{isLastSegment ? formattedSegment : `${formattedSegment} /`} &nbsp;</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;