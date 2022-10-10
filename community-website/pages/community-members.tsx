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

    const confettiSettings = { target: "confetti-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Community Members</title>
        <meta name="description" content="YFOSP Community Members" />
        <link rel="icon" href="/earth-asia-solid.svg" />
      </Head>

      <canvas
        id="confetti-canvas"
        className={`${styles.canvas} bg-white dark:bg-black`}
      ></canvas>

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
          <Link href="/">{"< Go Back"}</Link>
        </p>

        <div className={styles.wrapperDiv}>
          <table>
            <tbody>
              <tr>
                <td align="center">
                  <a
                    href="https://github.com/melvincwng"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/77479885"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="melvincwng"/>
                    <br />
                    <sub>
                      <b>melvincwng</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/0xMRTT"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/105598867?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="0xMRTT"/>
                    <br />
                    <sub>
                      <b>0xMRTT</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/3ba2ii"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/56454082?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="3ba2ii"/>
                    <br />
                    <sub>
                      <b>3ba2ii</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/abdallahifox"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/40822362?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="abdallahifox" />
                    <br />
                    <sub>
                      <b>abdallahifox</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/Abh1shekShinde"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/73304973?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="Abh1shekShinde"/>
                    <br />
                    <sub>
                      <b>Abh1shekShinde</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/AlexRixten"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/91592026?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="AlexRixten"/>
                    <br />
                    <sub>
                      <b>AlexRixten</b>
                    </sub>
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <a
                    href="https://github.com/AmirH32"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/109604111?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="AmirH32"/>
                    <br />
                    <sub>
                      <b>AmirH32</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/Ann-tech"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/58173580?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="Ann-tech"/>
                    <br />
                    <sub>
                      <b>Ann-tech</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/archhijack"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/29747567?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="archhijack"/>
                    <br />
                    <sub>
                      <b>archhijack</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/aryatalathi"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/55396585?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="aryatalathi"/>
                    <br />
                    <sub>
                      <b>aryatalathi</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/ashwinjadhav818"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/81229115?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="ashwinjadhav818"/>
                    <br />
                    <sub>
                      <b>ashwinjadhav818</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/augustoaraujoo"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/81258318?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="augustoaraujoo"/>
                    <br />
                    <sub>
                      <b>augustoaraujoo</b>
                    </sub>
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <a
                    href="https://github.com/AvidCoder101"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/70807684?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="AvidCoder101"/>
                    <br />
                    <sub>
                      <b>AvidCoder101</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/CleiberReis"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/32404201?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="CleiberReis"/>
                    <br />
                    <sub>
                      <b>CleiberReis</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/CoderUsman"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/102477526?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="CoderUsman"/>
                    <br />
                    <sub>
                      <b>CoderUsman</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/Crushoverride007"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/45631812?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="Crushoverride007"/>
                    <br />
                    <sub>
                      <b>Crushoverride007</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/Csaba79-coder"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/77699103?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="Csaba79-coder"/>
                    <br />
                    <sub>
                      <b>Csaba79-coder</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/cwaku"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/29071984?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="cwaku"/>
                    <br />
                    <sub>
                      <b>cwaku</b>
                    </sub>
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <a
                    href="https://github.com/d-coder111"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/82580017?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="d-coder111"/>
                    <br />
                    <sub>
                      <b>d-coder111</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/damienswx"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/82743170?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="damienswx"/>
                    <br />
                    <sub>
                      <b>damienswx</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/daryllzj"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/77569395?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="daryllzj"/>
                    <br />
                    <sub>
                      <b>daryllzj</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/Davicho-Dev"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/13292121?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="Davicho-Dev"/>
                    <br />
                    <sub>
                      <b>Davicho-Dev</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/doguedogue"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/23409026?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="doguedogue"/>
                    <br />
                    <sub>
                      <b>doguedogue</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/Dommnt"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/83887050?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="Dommnt"/>
                    <br />
                    <sub>
                      <b>Dommnt</b>
                    </sub>
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <a
                    href="https://github.com/EduardoArtioli"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/14796036?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="EduardoArtioli"/>
                    <br />
                    <sub>
                      <b>EduardoArtioli</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/engineerWhoCodes"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/106728287?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="engineerWhoCodes"/>
                    <br />
                    <sub>
                      <b>engineerWhoCodes</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/EngNashar"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/55697016?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="EngNashar"/>
                    <br />
                    <sub>
                      <b>EngNashar</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/enstenr"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/113459104?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="enstenr"/>
                    <br />
                    <sub>
                      <b>enstenr</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/faintout"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/58324728?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="faintout"/>
                    <br />
                    <sub>
                      <b>faintout</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/fantasticdevking"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/84690417?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="fantasticdevking"/>
                    <br />
                    <sub>
                      <b>fantasticdevking</b>
                    </sub>
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <a
                    href="https://github.com/flawlesslys"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/81615152?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="flawlesslys"/>
                    <br />
                    <sub>
                      <b>flawlesslys</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/Fresh-Teacher"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/98003374?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="Fresh-Teacher"/>
                    <br />
                    <sub>
                      <b>Fresh-Teacher</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/GabrielWarner"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/98490756?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="GabrielWarner"/>
                    <br />
                    <sub>
                      <b>GabrielWarner</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/HarmonySkull"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/109529692?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="HarmonySkull"/>
                    <br />
                    <sub>
                      <b>HarmonySkull</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/hemantwasthere"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/85151171?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="hemantwasthere"/>
                    <br />
                    <sub>
                      <b>hemantwasthere</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/imhalid"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/40598819?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="imhalid"/>
                    <br />
                    <sub>
                      <b>imhalid</b>
                    </sub>
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <a
                    href="https://github.com/JacksonBernier523"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/106414907?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="JacksonBernier523"/>
                    <br />
                    <sub>
                      <b>JacksonBernier523</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/JCSIVO"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/104387283?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="JCSIVO"/>
                    <br />
                    <sub>
                      <b>JCSIVO</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/jessicaclarita"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/89073668?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="jessicaclarita"/>
                    <br />
                    <sub>
                      <b>jessicaclarita</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/JhonnyLusonode"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/43578500?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="JhonnyLusonode"/>
                    <br />
                    <sub>
                      <b>JhonnyLusonode</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/joyandkindness"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/111590018?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="joyandkindness"/>
                    <br />
                    <sub>
                      <b>joyandkindness</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/KatherineZa"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/109282128?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="KatherineZa"/>
                    <br />
                    <sub>
                      <b>KatherineZa</b>
                    </sub>
                  </a>
                </td>
              </tr>
              <tr>
              <td align="center">
                  <a
                    href="https://github.com/Khalidalmasri"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/109124207?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="Khalidalmasri"/>
                    <br />
                    <sub>
                      <b>Khalidalmasri</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/KodaKDominus"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/96631656?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="KodaKDominus"/>
                    <br />
                    <sub>
                      <b>KodaKDominus</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/kumardeepak789"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/51526463?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="kumardeepak789"/>
                    <br />
                    <sub>
                      <b>kumardeepak789</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/kumsaltoprak"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/107797692?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="kumsaltoprak"/>
                    <br />
                    <sub>
                      <b>kumsaltoprak</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/linox2000"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/51922027?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="linox2000"/>
                    <br />
                    <sub>
                      <b>linox2000</b>
                    </sub>
                  </a>
                </td>
                <td align="center">
                  <a
                    href="https://github.com/lnginyard"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://avatars.githubusercontent.com/u/69459871?v=4"
                      width="85"
                      height="85"
                      className={styles.profileImage}
                      alt="lnginyard"/>
                    <br />
                    <sub>
                      <b>lnginyard</b>
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
          Created by the community for Hacktoberfest 2022 with ❤️
        </a>
      </footer>
    </div>
  );
};

export default CommunityMembers;
