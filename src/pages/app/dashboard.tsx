import Head from "next/head";

import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { SvgIcon } from "@/components/SvgIcons";
import { AppLayout } from "@/components/AppLayout";

const inter = Inter({ subsets: ["latin"] });

const Dashboard = () => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../favicon.svg" />
      </Head>
      <AppLayout>
        {
          <main>
            <section>
              <h1>Dashboard</h1>
            </section>
          </main>
        }
      </AppLayout>
    </>
  );
};

export default Dashboard;
