import apolloStack from "@/public/skills/apollostack.svg";
import axios from "@/public/skills/axios.svg";
import cPlusPlus from "@/public/skills/c-plusplus.svg";
import createReactApp from "@/public/skills/createReactApp.svg";
import css from "@/public/skills/css-3.svg";
import express from "@/public/skills/express.svg";
import firebase from "@/public/skills/firebase.svg";
import git from "@/public/skills/git.svg";
import github from "@/public/skills/github.svg";
import gopher from "@/public/skills/gopher.svg";
import graphql from "@/public/skills/graphql.svg";
import html from "@/public/skills/html-5.svg";
import java from "@/public/skills/java.svg";
import javascript from "@/public/skills/javascript.svg";
import jwt from "@/public/skills/jwt.svg";
import mongodb from "@/public/skills/mongodb.svg";
import mysql from "@/public/skills/mysql.svg";
import neo4j from "@/public/skills/neo4j.svg";
import nextjs from "@/public/skills/nextjs.svg";
import nodejs from "@/public/skills/nodejs.svg";
import postgresql from "@/public/skills/postgresql.svg";
import prisma from "@/public/skills/prisma.svg";
import python from "@/public/skills/python.svg";
import reactQuery from "@/public/skills/react-query.svg";
import reactRouter from "@/public/skills/react-router.svg";
import reactjs from "@/public/skills/react.svg";
import redux from "@/public/skills/redux.svg";
import rust from "@/public/skills/rust.svg";
import tailwind from "@/public/skills/tailwindcss.svg";
import trpc from "@/public/skills/trpc.svg";
import typescript from "@/public/skills/typescript.svg";
import vercel from "@/public/skills/vercel.svg";
import { objectFit } from "@/types/types";

const works = [
  {
    name: "Campfire",
    image: {
      src: "/../public/campfire/5.png",
      height: 160,
      width: 340,
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
        src: "/../public/campfire/5.png",
        alt: "homepage_view",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/campfire/7.png",
        alt: "specific_story_view",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/campfire/6.png",
        alt: "login",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/campfire/2.png",
        alt: "create_story_form",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/campfire/3.png",
        alt: "create_story_form_error",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/campfire/4.png",
        alt: "create_story_in_submit",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/campfire/1.png",
        alt: "users_page",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
    ],
    links: {
      github: "https://github.com/pfoo360/Campfire",
    },
  },
  {
    name: "Filebase",
    image: {
      src: "/../public/filebase/6.png",
      height: 160,
      width: 340,
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
        src: "/../public/filebase/1.png",
        alt: "login",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/filebase/2.png",
        alt: "new_user_first_time_login",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/filebase/3.png",
        alt: "create_folder",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/filebase/6.png",
        alt: "upload",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/filebase/7.png",
        alt: "filebase_after_creating_folders_and_uploading_files",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/filebase/8.png",
        alt: "delete_confirm",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/filebase/10.png",
        alt: "download",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/filebase/11.png",
        alt: "rename_folder",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
    ],
    links: {
      github: "https://github.com/pfoo360/Filebase",
      demo: "http://filebase-azure.vercel.app/",
    },
  },
  {
    name: "Nepenthes",
    image: {
      src: "/../public/nepenthes/18.png",
      height: 160,
      width: 340,
    },
    description:
      "Nepenthes is a app designed to help organize the development of software- commonly known as a bug-tracker. Role-based permissions (ADMIN, MANAGER, DEVELOPER) provides security as it restricts what users can see/do. The app allows users to: create tickets, provide additional comments on tickets, and update the status of tickets throughout the development lifecycle.</br> The system is built with Typescript and NextJS and hosted on Vercel. The frontend is built with ReactJS and TailwindCSS. Prisma's CLI and ORM are used to develop and query a postgreSQL database hosted on Railway. The backend is a GraphQL api built with the Apollo stack.",
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
        src: "/../public/nepenthes/10.png",
        alt: "adding_user_to_workspace",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/nepenthes/14.png",
        alt: "create_project",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/nepenthes/18.png",
        alt: "create_ticket",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/nepenthes/19.png",
        alt: "project_view",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/nepenthes/22.png",
        alt: "add_comment",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/nepenthes/29.png",
        alt: "my_tickets_view",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/nepenthes/30.png",
        alt: "tickets_visualized",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
    ],
    links: {
      github: "https://github.com/pfoo360/Nepenthes",
      demo: "https://nepenthes.vercel.app/",
    },
  },
  {
    name: "Chirp",
    image: {
      src: "/../public/chirp/13.png",
      height: 160,
      width: 340,
      objectFit: "contain" as objectFit,
    },
    description:
      "Chirp is a rudimentary Twitter clone. People are able to view user's 'chirps.' Registered users can perform CRUD operations on their own 'chirps.' This app was primarily an excuse to try out tRPC and Zod, two packages growing in popularity for their ability to build typesafe client-server apis. A session-based system is used to restrict/grant user permissions.</br> Chirp is built with Typescript and NextJS and hosted on Vercel. The frontend is built with ReactJS and TailwindCSS. The backend is built with tRPC and Zod for their typesafty. Prisma's CLI and ORM are used to develop and query a postgreSQL database hosted on Railway.",
    technologies: [
      { image: nextjs },
      { image: typescript },
      { image: vercel },
      { image: reactjs },
      { image: tailwind },
      { image: trpc },
      { image: prisma },
      { image: postgresql },
    ],
    slides: [
      {
        src: "/../public/chirp/3.png",
        alt: "sign_in_page",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/chirp/10.png",
        alt: "user_profile",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/chirp/13.png",
        alt: "create_chirp",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/chirp/14.png",
        alt: "delete_update_buttons",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/chirp/17.png",
        alt: "edit_chirp",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/chirp/19.png",
        alt: "viewing_another_users_page",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
      {
        src: "/../public/chirp/21.png",
        alt: "user_does_not_exist_view",
        objectFit: "contain" as objectFit,
        width: 354,
        height: 170,
      },
    ],
    links: {
      github: "https://github.com/pfoo360/Chirp",
      demo: "https://chirp-seven.vercel.app/",
    },
  },
];

export default works;
