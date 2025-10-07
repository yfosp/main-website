/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ConfettiGenerator from "confetti-js";
import NavBar from "../components/NavBar";

const LearnGitAndGitHub: NextPage = () => {
  useEffect(() => {
    const confettiSettings = { target: "confetti-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Git & GitHub</title>
        <meta name="description" content="YFOSP Learn Git & GitHub" />
        <link rel="icon" href="/earth-asia-solid.svg" />
      </Head>

      <canvas
        id="confetti-canvas"
        className={`${styles.canvas} bg-white dark:bg-black`}
      ></canvas>

      <main
        className={`${styles.learnGitAndGitHub} text-black dark:text-white`}
      >
        <NavBar></NavBar>

        <h1 className={styles.title}>
          <a
            href="https://education.github.com/git-cheat-sheet-education.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Management using Git and GitHub 🌍
          </a>
        </h1>

        <p className={styles.description}>
          <Link href="/">{"< Go Back"}</Link>
        </p>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod
          </p>
          <br />
        </div>
      </main>

      <footer className={`${styles.footer} text-black dark:text-white`}>
        <a
          href="https://hacktoberfest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by the community for Hacktoberfest with ❤️
        </a>
      </footer>
    </div>
  );
};

export default LearnGitAndGitHub;
