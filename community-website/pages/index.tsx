import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Your First Open Source Project</title>
        <meta name="description" content="YFOSP Community Website" />
        <link rel="icon" href="/earth-asia-solid.svg" />
      </Head>

      <main className={styles.main}>
        <h6 className={styles.title}>
          Welcome to{" "}
          <a
            href="https://github.com/Your-First-Open-Source-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your First Open Source Project!
          </a>
        </h6>

        <p className={styles.description}>
          Get started with{" "}
          <code className={styles.code}>
            your first open source contribution
          </code>
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
          >
            <h2>Find us on GitHub &rarr;</h2>
            <p>Join our wonderful & growing community of 86 people 💖</p>
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
