import Head from "next/head";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation/Navigation";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";

//TODO: resume dl btn in about me section and contact section

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Phillip F.</title>
        <meta name="description" content="Phillip F. Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navigation />
      <SplashScreen />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}
