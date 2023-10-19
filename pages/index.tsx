import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/Card/Card";
import skills from "@/utils/skills";
import works from "@/utils/works";
import MoreInfo from "@/components/MoreInfo/MoreInfo";
import ContactForm from "@/components/ContactForm/ContactForm";
import Link from "next/link";
import GitHubLink from "@/components/GitHubLink/GitHubLink";
import MiscLink from "@/components/MiscLink/MiscLink";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import Blobs from "@/components/Blobs/Blobs";
import Navigation from "@/components/Navigation/Navigation";
import { AiFillLinkedin } from "react-icons/ai";
import {
  IoPersonSharp,
  IoLocationSharp,
  IoMailSharp,
  IoCodeSlashSharp,
} from "react-icons/io5";
import bg from "@/public/eberhard.jpg";

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
