/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ConfettiGenerator from "confetti-js";
import NavBar from "../components/NavBar";
import { truncateNames } from "../utils/utils";

const CommunityMembers: NextPage = () => {

  useEffect(() => {
    truncateNames();
    
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
                      <img 
                        src="https://avatars.githubusercontent.com/u/77479885" 
                        width="85" 
                        height="85" 
                        alt="melvincwng" 
                        className={styles.profileImage}
                      />
                      <br />
                      <sub><b>melvincwng</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/0xMRTT" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/105598867?v=4" width="100;" alt="0xMRTT"/>
                      <br />
                      <sub><b>0xMRTT</b></sub>
                    </a>
                </td>    
                <td align="center">
                    <a href="https://github.com/3ba2ii" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/56454082?v=4" width="100;" alt="3ba2ii"/>
                      <br />
                      <sub><b>3ba2ii</b></sub>
                    </a>
                </td>    
                <td align="center">
                    <a href="https://github.com/abdallahifox" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/40822362?v=4" width="100;" alt="abdallahifox"/>
                      <br />
                      <sub><b>abdallahifox</b></sub>
                    </a>
                </td>    
                <td align="center">
                    <a href="https://github.com/Abh1shekShinde" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/73304973?v=4" width="100;" alt="Abh1shekShinde"/>
                      <br />
                      <sub><b>Abh1shekShinde</b></sub>
                    </a>
                </td>    
                <td align="center">
                    <a href="https://github.com/AlexRixten" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/91592026?v=4" width="100;" alt="AlexRixten"/>
                      <br />
                      <sub><b>AlexRixten</b></sub>
                    </a>
                </td>           
              </tr>
              <tr>
              <td align="center">
                    <a href="https://github.com/AmirH32" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/109604111?v=4" width="100;" alt="AmirH32"/>
                      <br />
                      <sub><b>AmirH32</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/Ann-tech" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/58173580?v=4" width="100;" alt="Ann-tech"/>
                      <br />
                      <sub><b>Ann-tech</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/archhijack" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/29747567?v=4" width="100;" alt="archhijack"/>
                      <br />
                      <sub><b>archhijack</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/aryatalathi" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/77479885?v=4" width="100;" alt="aryatalathi"/>
                      <br />
                      <sub><b>aryatalathi</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/ashwinjadhav818" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/81229115?v=4" width="100;" alt="ashwinjadhav818"/>
                      <br />
                      <sub><b>ashwinjadhav818</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/augustoaraujoo" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/81258318?v=4" width="100;" alt="augustoaraujoo"/>
                      <br />
                      <sub><b>augustoaraujoo</b></sub>
                    </a>
                </td>
              </tr>
              <tr>
              <td align="center">
                    <a href="https://github.com/AvidCoder101" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/70807684?v=4" width="100;" alt="AvidCoder101"/>
                      <br />
                      <sub><b>AvidCoder101</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/CleiberReis" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/77479885?v=4" width="100;" alt="CleiberReis"/>
                      <br />
                      <sub><b>CleiberReis</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/CoderUsman" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/102477526?v=4" width="100;" alt="CoderUsman"/>
                      <br />
                      <sub><b>CoderUsman</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/Crushoverride007" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/45631812?v=4" width="100;" alt="Crushoverride007"/>
                      <br />
                      <sub><b>Crushoverride007</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/Csaba79-coder" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/77699103?v=4" width="100;" alt="Csaba79-coder"/>
                      <br />
                      <sub><b>Csaba79-coder</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/cwaku" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/29071984?v=4" width="100;" alt="cwaku"/>
                      <br />
                      <sub><b>cwaku</b></sub>
                    </a>
                </td>
              </tr>
              <tr>
              <td align="center">
                    <a href="https://github.com/d-coder111" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/82580017?v=4" width="100;" alt="d-coder111"/>
                      <br />
                      <sub><b>d-coder111</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/damienswx" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/82743170?v=4" width="100;" alt="damienswx"/>
                      <br />
                      <sub><b>damienswx</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/daryllzj" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/77569395?v=4" width="100;" alt="daryllzj"/>
                      <br />
                      <sub><b>daryllzj</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/Davicho-Dev" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/13292121?v=4" width="100;" alt="Davicho-Dev"/>
                      <br />
                      <sub><b>Davicho-Dev</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/doguedogue" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/23409026?v=4" width="100;" alt="doguedogue"/>
                      <br />
                      <sub><b>doguedogue</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/Dommnt" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/83887050?v=4" width="100;" alt="Dommnt"/>
                      <br />
                      <sub><b>Dommnt</b></sub>
                    </a>
                </td>
              </tr>
              <tr>
              <td align="center">
                    <a href="https://github.com/EduardoArtioli" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/14796036?v=4" width="100;" alt="EduardoArtioli"/>
                      <br />
                      <sub><b>EduardoArtioli</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/engineerWhoCodes" target="_blank" rel="noopener noreferrer">
                      <img src="4" width="100;" alt="engineerWhoCodes"/>
                      <br />
                      <sub><b>engineerWhoCodes</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/EngNashar" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/55697016?v=4" width="100;" alt="EngNashar"/>
                      <br />
                      <sub><b>EngNashar</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/enstenr" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/113459104?v=4" width="100;" alt="enstenr"/>
                      <br />
                      <sub><b>enstenr</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/faintout" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/58324728?v=4" width="100;" alt="faintout"/>
                      <br />
                      <sub><b>faintout</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/fantasticdevking" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/84690417?v=4" width="100;" alt="fantasticdevking"/>
                      <br />
                      <sub><b>fantasticdevking</b></sub>
                    </a>
                </td>
              </tr>
              <tr>
              <td align="center">
                    <a href="https://github.com/flawlesslys" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/81615152?v=4" width="100;" alt="flawlesslys"/>
                      <br />
                      <sub><b>flawlesslys</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/Fresh-Teacher" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/98003374?v=4" width="100;" alt="Fresh-Teacher"/>
                      <br />
                      <sub><b>Fresh-Teacher</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/GabrielWarner" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/84690417?v=4" width="100;" alt="GabrielWarner"/>
                      <br />
                      <sub><b>GabrielWarner</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/fantasticdevking" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/84690417?v=4" width="100;" alt="fantasticdevking"/>
                      <br />
                      <sub><b>fantasticdevking</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/fantasticdevking" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/84690417?v=4" width="100;" alt="fantasticdevking"/>
                      <br />
                      <sub><b>fantasticdevking</b></sub>
                    </a>
                </td>
                <td align="center">
                    <a href="https://github.com/fantasticdevking" target="_blank" rel="noopener noreferrer">
                      <img src="https://avatars.githubusercontent.com/u/84690417?v=4" width="100;" alt="fantasticdevking"/>
                      <br />
                      <sub><b>fantasticdevking</b></sub>
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
