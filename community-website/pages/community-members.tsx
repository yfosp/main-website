/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ConfettiGenerator from "confetti-js";
import NavBar from "../components/NavBar";

const CommunityMembers: NextPage = () => {

  useEffect(() => {
    const confettiSettings = { target: 'confetti-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Community Members</title>
        <meta name="description" content="YFOSP Community Members" />
        <link rel="icon" href="/earth-asia-solid.svg" />
      </Head>

      <canvas id="confetti-canvas" className={`${styles.canvas} bg-white dark:bg-black`}></canvas>


      <main className={`${styles.communityMembers} text-black dark:text-white`}>
        <NavBar></NavBar>

        <h1 className={styles.title}>
          <a
            href="https://github.com/orgs/Your-First-Open-Source-Project/people"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our community members 💖
          </a>
        </h1>

        <p className={styles.description}>
          <Link href="/">{'< Go Back'}</Link>
        </p>

        <div className={styles.grid}>
          <table>
            <tbody>
              <tr>
                <td align="center">
                    <a href="https://github.com/melvincwng" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/77479885?v=4" width="100;" alt="melvincwng"/>
                      <br />
                      <sub><b>melvincwng</b></sub>
                    </a>
                </td>       
              </tr>
            </tbody>   
          </table>
        </div>
      </main>

      <footer className={`${styles.footer} text-black dark:text-white`}>
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

export default CommunityMembers;
