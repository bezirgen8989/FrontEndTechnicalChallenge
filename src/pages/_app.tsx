import { AppProvider } from "@/Context";
import { AppLayout } from "@/components/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const getContent = () => {
    if (router.pathname.includes("/auth")) return <Component {...pageProps} />;

    return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    );
  };

  return <AppProvider>{getContent()}</AppProvider>;
}
