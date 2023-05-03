import { AppProvider } from "@/Context";
import { AppLayout } from "@/components/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const getContent = () => {
    const routersPath = router.pathname
      .split("/")
      .filter((item) => item !== "");
    const pagesWhereLayoutNotNeed = ["auth", "404"];
    if (routersPath.some((path) => pagesWhereLayoutNotNeed.indexOf(path) >= 0))
      return <Component {...pageProps} />;

    return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    );
  };

  return <AppProvider>{getContent()}</AppProvider>;
}
