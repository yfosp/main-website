/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ConfettiGenerator from "confetti-js";
import NavBar from "../components/NavBar";

const Contributors: NextPage = () => {
  
  useEffect(() => {
    const confettiSettings = { target: 'confetti-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, [])
  
  // Force 'refresh' of page when resizing it in dev tools
  useEffect(() => {
    window.addEventListener('resize', ()=> {
      window.location.reload();
    })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Contributors</title>
        <meta name="description" content="YFOSP Contributors" />
        <link rel="icon" href="/earth-asia-solid.svg" />
      </Head>

      <canvas id="confetti-canvas" className={`${styles.canvas} bg-white dark:bg-black`}></canvas>


      <main className={`${styles.contributors} text-black dark:text-white`}>
        <NavBar></NavBar>

        <h1 className={styles.title}>
          <a
            href="https://github.com/Your-First-Open-Source-Project/Hacktoberfest2022/blob/main/CONTRIBUTORS.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our amazing contributors
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
                <td align="center">
                    <a href="https://github.com/flawlesslys" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/81615152?v=4" width="100;" alt="flawlesslys"/>
                      <br />
                      <sub><b>flawlesslys</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/theadityaagnihotri" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/95487342?v=4" width="100;" alt="theadityaagnihotri"/>
                      <br />
                      <sub><b>theadityaagnihotri</b></sub>
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

export default Contributors;
