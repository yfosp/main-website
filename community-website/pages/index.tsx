import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import ConfettiGenerator from "confetti-js";

const Home: NextPage = () => {
  const typed = useRef<null | Typed>(null);

  useEffect(() => {
    const options = {
      strings: [
        "Get started with Your First Open Source Project!",
        "Submit your first open source contribution now!",
        "Join our awesome community of 87 members!",
      ],
      typeSpeed: 75,
      backSpeed: 75,
    };

    // #typing-element refers to the <code> rendered below
    typed.current = new Typed("#typing-element", options);

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.current?.destroy();
    };
  }, []);

  useEffect(() => {
    const confettiSettings = { target: 'confetti-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []) 

  return (
    <div className={styles.container}>
      <Head>
        <title>Your First Open Source Project</title>
        <meta name="description" content="YFOSP Community Website" />
        <link rel="icon" href="/earth-asia-solid.svg" />
      </Head>

      <main className={styles.main}>
        <canvas id="confetti-canvas" className={styles.canvas}></canvas>

        <h6 className={styles.title}>
          Welcome to{" "}
          <a
            href="https://github.com/Your-First-Open-Source-Project/Hacktoberfest2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your First Open Source Project!
          </a>
        </h6>

        <p className={styles.description}>
          <code className={styles.code} id="typing-element"></code>
        </p>

        <div className={styles.grid}>
          <a href="./community-members" className={styles.card}>
            <h2>Our Community &rarr;</h2>
            <p>Find information about our Community members here 👬</p>
          </a>

          <a href="./contributors" className={styles.card}>
            <h2>Our Contributors &rarr;</h2>
            <p>
              Learn about those who created this website using Next.js &
              TypeScript 💻
            </p>
          </a>

          <a href="./community-guidelines" className={styles.card}>
            <h2>Our Guidelines &rarr;</h2>
            <p>The Community Guidelines that everyone has to follow 👨‍💻</p>
          </a>

          <a
            href="https://github.com/Your-First-Open-Source-Project"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Find us on GitHub &rarr;</h2>
            <p>Join our wonderful & growing community of 87 people 💖</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://hacktoberfest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by the community for Hacktoberfest 2022 with ❤️
        </a>
      </footer>
    </div>
  );
};

export default Home;
