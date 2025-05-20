/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ConfettiGenerator from "confetti-js";
import NavBar from "../components/NavBar";

const EducationalResources: NextPage = () => {
  useEffect(() => {
    const confettiSettings = { target: "confetti-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Educational Resources</title>
        <meta name="description" content="YFOSP Educational Resources" />
        <link rel="icon" href="/earth-asia-solid.svg" />
      </Head>

      <canvas
        id="confetti-canvas"
        className={`${styles.canvas} bg-white dark:bg-black`}
      ></canvas>

      <main
        className={`${styles.educationalResources} text-black dark:text-white`}
      >
        <NavBar></NavBar>

        <h1 className={styles.title}>
          <a
            href="https://github.com/yfosp/aws-resources"
            target="_blank"
            rel="noopener noreferrer"
          >
            Educational Resources 📚
          </a>
        </h1>

        <p className={styles.description}>
          <Link href="/">{"< Go Back"}</Link>
        </p>

        <div className={styles.educationalResourcesContainer}>
          <p>
            <b>AWS Educational Resources</b>
            <div className={styles.educationalLinks}>
              <a
                href="https://github.com/melvincwng/AWS-Cloud-Practitioner-Essentials-Training"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWS Cloud Practitioner Essentials
              </a>
              <br />
              <a
                href="https://github.com/melvincwng/AWS-Technical-Essentials-Training"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWS Technical Essentials
              </a>
              <br />
              <a
                href="https://github.com/melvincwng/AWS-Developing-On-AWS-Training"
                target="_blank"
                rel="noopener noreferrer"
              >
                Developing on AWS
              </a>
              <br />
              <a
                href="https://github.com/melvincwng/Architecting-on-AWS-Training"
                target="_blank"
                rel="noopener noreferrer"
              >
                Architecting on AWS
              </a>
              <br />
            </div>
          </p>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <p>
            <b>Web Development Resources</b>
            <div className={styles.educationalLinks}>
              <a
                href="https://roadmap.sh/frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend Developer Roadmap
              </a>
              <br />
              <a
                href="https://roadmap.sh/backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend Developer Roadmap
              </a>
              <br />
              <a
                href="https://roadmap.sh/full-stack"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full Stack Developer Roadmap
              </a>
              <br />
              <a href="https://github.com/aachal28/Awesome-web-development-resources"
              target="_blank"
              rel="noopener noreferrer"
              >
                Other Resources
              </a>
              <br />
            </div>
          </p>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <p>
            <b>GitHub Free Resources</b>
            <div className={styles.educationalLinks}>
              <a
                href="https://education.github.com/pack"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Student Developer Pack
              </a>
              <br />
              <a
                href="https://www.youtube.com/watch?v=Oaj3RBIoGFc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Tutorial
              </a>
              <br />
              <a 
                href="https://git-scm.com/docs/gittutorial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Docs
              </a>
              <br />
              <a
                href="https://www.youtube.com/watch?v=8JJ101D3knE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Tutorial
              </a>
            </div>
          </p>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <p>
            <b>Python Resources</b>
            <div className={styles.educationalLinks}>
              <a
                href="https://github.com/Zemerik/Python"
                target="_blank"
                rel="noopener noreferrer"
              >
                30 Days of Python
              </a>
              <br />
              <a 
                href="https://wiki.python.org/moin/BeginnersGuide/Programmers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Python Wiki
              </a>
              <br />
              <a
                href="https://www.youtube.com/watch?v=kqtD5dpn9C8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Python Tutorial
              </a>
            </div>
          </p>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <p>
            <b>Unity</b>
            <div className={styles.educationalLinks}>
              <a
                href="https://learn.unity.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unity Learning Guide
              </a>
              <br />
              <a
                href="https://www.youtube.com/watch?v=pwZpJzpE2lQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unity Tutorial
              </a>
              <br />
              <a
                href="https://youtu.be/TcranVQUQ5U?list=PLgOEwFbvGm5o8hayFB6skAfa8Z-mw4dPV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unity 2D Game
              </a>
              <br />
            </div>
          </p>
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

export default EducationalResources;
