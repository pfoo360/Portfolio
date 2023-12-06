import apolloStack from "@/public/skills/apollostack.svg";
import createReactApp from "@/public/skills/createReactApp.svg";
import css from "@/public/skills/css-3.svg";
import express from "@/public/skills/express.svg";
import firebase from "@/public/skills/firebase.svg";
import graphql from "@/public/skills/graphql.svg";
import javascript from "@/public/skills/javascript.svg";
import jwt from "@/public/skills/jwt.svg";
import mysql from "@/public/skills/mysql.svg";
import nextjs from "@/public/skills/nextjs.svg";
import nodejs from "@/public/skills/nodejs.svg";
import postgresql from "@/public/skills/postgresql.svg";
import prisma from "@/public/skills/prisma.svg";
import reactQuery from "@/public/skills/react-query.svg";
import reactRouter from "@/public/skills/react-router.svg";
import reactjs from "@/public/skills/react.svg";
import tailwind from "@/public/skills/tailwindcss.svg";
import typescript from "@/public/skills/typescript.svg";
import vercel from "@/public/skills/vercel.svg";
import { objectFit } from "@/types/types";
import campfire1 from "@/public/campfire/1.png";
import campfire2 from "@/public/campfire/2.png";
import campfire3 from "@/public/campfire/3.png";
import campfire4 from "@/public/campfire/4.png";
import campfire5 from "@/public/campfire/5.png";
import campfire6 from "@/public/campfire/6.png";
import campfire7 from "@/public/campfire/7.png";
import filebase1 from "@/public/filebase/1.png";
import filebase2 from "@/public/filebase/2.png";
import filebase3 from "@/public/filebase/3.png";
import filebase6 from "@/public/filebase/6.png";
import filebase7 from "@/public/filebase/7.png";
import filebase8 from "@/public/filebase/8.png";
import filebase10 from "@/public/filebase/10.png";
import filebase11 from "@/public/filebase/11.png";
import nepenthes10 from "@/public/nepenthes/10.png";
import nepenthes14 from "@/public/nepenthes/14.png";
import nepenthes18 from "@/public/nepenthes/18.png";
import nepenthes19 from "@/public/nepenthes/19.png";
import nepenthes22 from "@/public/nepenthes/22.png";
import nepenthes29 from "@/public/nepenthes/29.png";
import nepenthes30 from "@/public/nepenthes/30.png";
import freelance1 from "@/public/websites/1.png";
import freelance2 from "@/public/websites/2.png";
import freelance3 from "@/public/websites/3.png";
import freelance4 from "@/public/websites/4.png";
import freelance5 from "@/public/websites/5.png";
import freelance6 from "@/public/websites/6.png";
import freelance7 from "@/public/websites/7.png";
import freelance8 from "@/public/websites/8.png";
import freelance9 from "@/public/websites/9.png";
import freelance10 from "@/public/websites/10.png";

const works = [
  {
    name: "Freelance work",
    image: {
      src: freelance1.src,
      objectFit: "contain" as objectFit,
    },
    description:
      "Some websites I have created for clients as a freelance web developer/designer. Layout is sometimes provided by the client and other times I am given creative control. You can check out some of my work below: </br> - <a href='https://sweeterthansweet.vercel.app/' target='_blank'>sample 1</a> </br> - <a href='https://christinelin.vercel.app/' target='_blank'>sample 2</a></br> - <a href='https://jackjiang.vercel.app/' target='_blank'>sample 3</a> ",
    technologies: [],
    slides: [
      {
        src: freelance1.src,
        alt: "adding_user_to_workspace",
        objectFit: "contain" as objectFit,
      },
      {
        src: freelance2.src,
        alt: "create_project",
        objectFit: "contain" as objectFit,
      },
      {
        src: freelance3.src,
        alt: "create_ticket",
        objectFit: "contain" as objectFit,
      },
      {
        src: freelance4.src,
        alt: "project_view",
        objectFit: "contain" as objectFit,
      },
      {
        src: freelance5.src,
        alt: "add_comment",
        objectFit: "contain" as objectFit,
      },
      {
        src: freelance6.src,
        alt: "my_tickets_view",
        objectFit: "contain" as objectFit,
      },
      {
        src: freelance7.src,
        alt: "tickets_visualized",
        objectFit: "contain" as objectFit,
      },
      {
        src: freelance8.src,
        alt: "tickets_visualized",
        objectFit: "contain" as objectFit,
      },
      {
        src: freelance9.src,
        alt: "tickets_visualized",
        objectFit: "contain" as objectFit,
      },
      {
        src: freelance10.src,
        alt: "tickets_visualized",
        objectFit: "contain" as objectFit,
      },
    ],
    links: {},
  },
  {
    name: "Nepenthes",
    image: {
      src: nepenthes18.src,
      objectFit: "contain" as objectFit,
    },
    description:
      "Nepenthes is an app designed to help organize the development of software- commonly known as a bug-tracker. Role-based permissions (ADMIN, MANAGER, DEVELOPER) provides security as it restricts what users can see/do. The app allows users to: create tickets, provide additional comments on tickets, and update the status of tickets throughout the development lifecycle.</br> The system is built with Typescript and NextJS and hosted on Vercel. The frontend is built with ReactJS and TailwindCSS. Prisma's CLI and ORM are used to develop and query a postgreSQL database hosted on Railway. The backend is a GraphQL api built with the Apollo stack.",
    technologies: [
      { image: nextjs },
      { image: typescript },
      { image: vercel },
      { image: reactjs },
      { image: tailwind },
      { image: graphql },
      { image: apolloStack },
      { image: prisma },
      { image: postgresql },
    ],
    slides: [
      {
        src: nepenthes10.src,
        alt: "adding_user_to_workspace",
        objectFit: "contain" as objectFit,
      },
      {
        src: nepenthes14.src,
        alt: "create_project",
        objectFit: "contain" as objectFit,
      },
      {
        src: nepenthes18.src,
        alt: "create_ticket",
        objectFit: "contain" as objectFit,
      },
      {
        src: nepenthes19.src,
        alt: "project_view",
        objectFit: "contain" as objectFit,
      },
      {
        src: nepenthes22.src,
        alt: "add_comment",
        objectFit: "contain" as objectFit,
      },
      {
        src: nepenthes29.src,
        alt: "my_tickets_view",
        objectFit: "contain" as objectFit,
      },
      {
        src: nepenthes30.src,
        alt: "tickets_visualized",
        objectFit: "contain" as objectFit,
      },
    ],
    links: {
      github: "https://github.com/pfoo360/Nepenthes",
      demo: "https://nepenthes.vercel.app/",
    },
  },
  {
    name: "Filebase",
    image: {
      src: filebase6.src,
      objectFit: "contain" as objectFit,
    },
    description:
      "Filebase is a file-hosting application that was born from my dissatisfaction of using local image storage for my previous project, Campfire. Filebase allows users to create directories and upload/download their files to/from the cloud. NextAuth, OAuth and session-based security are used to verify permissions and persist logins.</br>Filebase is built with Typescript, NextJS, and hosted on Vercel.</br>The frontend is built with ReactJS and styled with TailwindCSS. The backend uses Prisma to query a PostgreSQL database hosted on Railway. Firebase's client-side and admin packages are used for file storage and retrieval.",
    technologies: [
      { image: firebase },
      { image: nextjs },
      { image: typescript },
      { image: vercel },
      { image: reactjs },
      { image: tailwind },
      { image: reactQuery },
      { image: prisma },
      { image: postgresql },
    ],
    slides: [
      {
        src: filebase1.src,
        alt: "login",
        objectFit: "contain" as objectFit,
      },
      {
        src: filebase2.src,
        alt: "new_user_first_time_login",
        objectFit: "contain" as objectFit,
      },
      {
        src: filebase3.src,
        alt: "create_folder",
        objectFit: "contain" as objectFit,
      },
      {
        src: filebase6.src,
        alt: "upload",
        objectFit: "contain" as objectFit,
      },
      {
        src: filebase7.src,
        alt: "filebase_after_creating_folders_and_uploading_files",
        objectFit: "contain" as objectFit,
      },
      {
        src: filebase8.src,
        alt: "delete_confirm",
        objectFit: "contain" as objectFit,
      },
      {
        src: filebase10.src,
        alt: "download",
        objectFit: "contain" as objectFit,
      },
      {
        src: filebase11.src,
        alt: "rename_folder",
        objectFit: "contain" as objectFit,
      },
    ],
    links: {
      github: "https://github.com/pfoo360/Filebase",
      demo: "http://filebase-azure.vercel.app/",
    },
  },
  {
    name: "Campfire",
    image: {
      src: campfire5.src,
      objectFit: "contain" as objectFit,
    },
    description:
      "Campfire is a blogging application. Anyone can read, and search for, user-generated content. Those that register are able to create, update, and delete their own stories. Additionally, users are allowed to submit an image to go along with their story. JWTs, in the form of access tokens and HTTP-only refresh tokens, are used to verify permissions and create persistent logins.</br>The frontend is built with ReactJS and styled with CSS modules. Custom hooks allows for infinite scroll pagination.</br>The REST api is built with NodeJS and ExpressJS. A custom ORM model is built to perform queries on a MySQL database.",
    technologies: [
      { image: createReactApp },
      { image: javascript },
      { image: reactjs },
      { image: reactRouter },
      { image: css },
      { image: nodejs },
      { image: express },
      { image: mysql },
      { image: jwt },
    ],
    slides: [
      {
        src: campfire5.src,
        alt: "homepage_view",
        objectFit: "contain" as objectFit,
      },
      {
        src: campfire7.src,
        alt: "specific_story_view",
        objectFit: "contain" as objectFit,
      },
      {
        src: campfire6.src,
        alt: "login",
        objectFit: "contain" as objectFit,
      },
      {
        src: campfire2.src,
        alt: "create_story_form",
        objectFit: "contain" as objectFit,
      },
      {
        src: campfire3.src,
        alt: "create_story_form_error",
        objectFit: "contain" as objectFit,
      },
      {
        src: campfire4.src,
        alt: "create_story_in_submit",
        objectFit: "contain" as objectFit,
      },
      {
        src: campfire1.src,
        alt: "users_page",
        objectFit: "contain" as objectFit,
      },
    ],
    links: {
      github: "https://github.com/pfoo360/Campfire",
    },
  },
];

export default works;
