/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ConfettiGenerator from "confetti-js";
import NavBar from "../components/NavBar";
import { truncateNames } from "../utils/utils";

const Contributors: NextPage = () => {
  useEffect(() => {
    truncateNames();

    const confettiSettings = { target: "confetti-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Contributors</title>
        <meta name="description" content="YFOSP Contributors" />
        <link rel="icon" href="/earth-asia-solid.svg" />
      </Head>

      <canvas
        id="confetti-canvas"
        className={`${styles.canvas} bg-white dark:bg-black`}
      ></canvas>

      <main className={`${styles.contributors} text-black dark:text-white`}>
        <NavBar></NavBar>

        <h1 className={styles.title}>
          <a
            href="https://github.com/yfosp/main-website/blob/main/CONTRIBUTORS.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Amazing Contributors ⭐
          </a>
        </h1>

        <p className={styles.description}>
          <Link href="/">{"< Go Back"}</Link>
        </p>

        <div className={styles.wrapperDiv}>
          <table>
            <tbody>
              <tr>
                <td align="center" className={styles.tableData}>
                  <a
                    href="https://github.com/melvincwng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/77479885?v=4"
                      width="85"
                      height="85"
                      alt="melvincwng"
                      className={styles.profileImage}
                    />
                    <br />
                    <sub>
                      <b>melvincwng</b>
                    </sub>
                  </a>
                </td>
                <td align="center" className={styles.tableData}>
                  <a
                    href="https://github.com/pink-bean"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/81615152?v=4"
                      width="85"
                      height="85"
                      alt="pink-bean"
                      className={styles.profileImage}
                    />
                    <br />
                    <sub>
                      <b>pink-bean</b>
                    </sub>
                  </a>
                </td>
                <td align="center" className={styles.tableData}>
                  <a
                    href="https://github.com/theadityaagnihotri"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/95487342?v=4"
                      width="85"
                      height="85"
                      alt="theadityaagnihotri"
                      className={styles.profileImage}
                    />
                    <br />
                    <sub>
                      <b>theadityaagnihotri</b>
                    </sub>
                  </a>
                </td>
                <td align="center" className={styles.tableData}>
                  <a
                    href="https://github.com/GabrielWarner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/98490756?v=4"
                      width="85"
                      height="85"
                      alt="gabrielwarner"
                      className={styles.profileImage}
                    />
                    <br />
                    <sub>
                      <b>GabrielWarner</b>
                    </sub>
                  </a>
                </td>
                <td align="center" className={styles.tableData}>
                  <a
                    href="https://github.com/Bennykillua"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/67695793?v=4"
                      width="85"
                      height="85"
                      alt="Bennykillua"
                      className={styles.profileImage}
                    />
                    <br />
                    <sub>
                      <b>Bennykillua</b>
                    </sub>
                  </a>
                </td>
                <td align="center" className={styles.tableData}>
                  <a
                    href="https://github.com/Mesfrum"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/99741869?v=4"
                      width="85"
                      height="85"
                      alt="Mesfrum"
                      className={styles.profileImage}
                    />
                    <br />
                    <sub>
                      <b>Mesfrum</b>
                    </sub>
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center" className={styles.tableData}>
                  <a
                    href="https://github.com/SuryodayYadav"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/133846974?v=4"
                      width="85"
                      height="85"
                      alt="SuryodayYadav"
                      className={styles.profileImage}
                    />
                    <br />
                    <sub>
                      <b>SuryodayYadav</b>
                    </sub>
                  </a>
                </td>
                <td align="center" className={styles.tableData}>
                  <a
                    href="https://github.com/sushantjha78"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/64401703?v=4"
                      width="85"
                      height="85"
                      alt="sushantjha78"
                      className={styles.profileImage}
                    />
                    <br />
                    <sub>
                      <b>sushantjha78</b>
                    </sub>
                  </a>
                </td>
                <td align="center" className={styles.tableData}>
                  <a
                    href="https://github.com/dollarboysushil"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/48991715?v=4"
                      width="85"
                      height="85"
                      alt="dollarboysushil"
                      className={styles.profileImage}
                    />
                    <br />
                    <sub>
                      <b>dollarboysushil</b>
                    </sub>
                  </a>
                </td>
                <td align="center" className={styles.tableData}>
                  <a
                    href="https://github.com/avyuktsoni0731"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/95626105?v=4"
                      width="85"
                      height="85"
                      alt="avyuktsoni0731"
                      className={styles.profileImage}
                    />
                    <br />
                    <sub>
                      <b>avyuktsoni0731</b>
                    </sub>
                  </a>
                </td>
                <td align="center" className={styles.tableData}>
                  <a
                    href="https://github.com/aachal28"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/aachal28"
                      width="85"
                      height="85"
                      alt="aachal28"
                      className={styles.profileImage}
                    />
                    <br />
                    <sub>
                      <b>aachal28</b>
                    </sub>
                  </a>
                </td>
                <td align="center" className={styles.tableData}>
                  <a
                    href="https://github.com/divy-03"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/divy-03"
                      width="85"
                      height="85"
                      alt="divy-03"
                      className={styles.profileImage}
                    />
                    <br />
                    <sub>
                      <b>divy-03</b>
                    </sub>
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
          Created by the community for Hacktoberfest with ❤️
        </a>
      </footer>
    </div>
  );
};

export default Contributors;
