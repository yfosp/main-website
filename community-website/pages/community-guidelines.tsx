/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ConfettiGenerator from "confetti-js";
import NavBar from "../components/NavBar";

const CommunityGuidelines: NextPage = () => {
  useEffect(() => {
    const confettiSettings = { target: "confetti-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Community Guidelines</title>
        <meta name="description" content="YFOSP Contributors" />
        <link rel="icon" href="/earth-asia-solid.svg" />
      </Head>

      <canvas
        id="confetti-canvas"
        className={`${styles.canvas} bg-white dark:bg-black`}
      ></canvas>

      <main
        className={`${styles.communityGuidelines} text-black dark:text-white`}
      >
        <NavBar></NavBar>

        <h1 className={styles.title}>
          <a
            href="https://github.com/Your-First-Open-Source-Project/Hacktoberfest2022/blob/main/COMMUNITY_GUIDELINES.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community Guidelines 📜
          </a>
        </h1>

        <p className={styles.description}>
          <Link href="/">{"< Go Back"}</Link>
        </p>

        <div>
          <p>
            Like any other open-source project, this project is made up of a
            diverse group of individuals from around the globe who work on every
            facet of its goals. This diversity is one of its strengths, but it
            can also lead to communication issues and unhappiness. To that end,
            we have a few ground rules that we ask people to adhere to. This
            code applies equally to founders, mentors and those seeking help and
            guidance.
          </p>
          <br />
          <p>
            We take pride in being inclusive and treating everyone with respect,
            regardless of gender identity and expression, sexual orientation,
            disabilities, neurodiversity, physical appearance, body size,
            ethnicity, nationality, race, age, religion, or similar personal
            characteristics. We love the diverse opinions of our contributors
            and maintainers; therefore, we expect you to.
          </p>
          <br />
          The subsequent subsections go into further detail about our
          community&apos;s guidelines and standards.
          <br />
          <br />
          <ol>
            <li>
              <b>1. Be more considerate, kind, constructive, and helpful</b>
              <p>
                We want to create a community where everyone feels welcome and
                receives support from people of different backgrounds and
                identities. Thus, we believe we can achieve this by building a
                positive, welcoming environment where everyone feels safe to
                share ideas, thoughts, and feedback. As you contribute, try to
                be supportive, respect individual opinions, and report
                inappropriate posts if needed. Respectful and constructive
                communication is encouraged and appreciated. We believe that
                everyone has the right to express their opinions and that
                constructive criticism is essential to the growth of the
                project. However, we also believe that everyone has the right to
                have their opinions heard, and that any form of harassment or
                personal attacks is completely unacceptable.
              </p>
            </li>
            <br />
            <li>
              <b>2. Expected behavior and choice of words matters</b>
              <p>
                We are a very diverse community. Thus, it would help if you
                acted professionally. Therefore, you are to work in a manner
                that includes but is not restricted to:
              </p>
              <ul>
                <li>
                  &emsp; - Don&apos;t use violent threats or language directed
                  against another individual.
                </li>
                <li>&emsp; - Consider collaboration before conflict.</li>
                <li>
                  &emsp; - No discriminatory jokes, insults, and language. This
                  includes discriminatory behavior and speech, especially
                  racist, homophobic, sexist, or demeaning words.
                </li>
                <li>
                  &emsp; - Do not post sexually explicit or violent material.
                </li>
                <li>&emsp; - No unwelcome sexual attention.</li>
                <li>
                  &emsp; - Do not advocate for or encourage any of the above
                  behavior.
                </li>
                <li>
                  &emsp; - In general, if someone asks you to stop, then stop.
                </li>
                <li>
                  &emsp; - Participate authentically and actively to contribute
                  to this community&apos;s health and longevity.
                </li>
              </ul>
              <p>
                Be mindful of your fellow participants and please report any
                cases of harassment by alerting community leaders if you notice
                a dangerous situation, someone in distress, or violations of
                this Code of Conduct, even if they seem inconsequential.
              </p>
            </li>
            <br />
            <li>
              <b>3. Disagreements</b>
              <p>
                Disagreements are bound to happen, primarily because of the
                community&apos;s diversity. The strength of the project comes
                from its diversity. It is, however, important that we resolve
                disagreements constructively. Another individual having a
                different perspective or viewpoint on issues doesn&apos;t mean
                they&apos;re wrong. Don&apos;t forget that it is human to err,
                and blaming each other doesn&apos;t get us anywhere. Instead,
                focus on helping to resolve issues and learning from mistakes.
              </p>
            </li>
            <br />
            <li>
              <b>4. Zero tolerance for harassment and unacceptable behavior</b>
              <p>
                Be respectful of everyone&apos;s ideas and perspectives on a
                problem. Don&apos;t directly attack a person. We will not
                tolerate any posts, comments, or messages to fellow
                contributors, admins, sponsors, or maintainers that are
                inappropriate, rude, or aggressive. This includes posts that
                spread misinformation and are disruptive to the communities.
              </p>
              <br />
              <p>
                Suppose a community member engages in unacceptable behavior. In
                that case, the community maintainers may take any action they
                deem appropriate, including a temporary ban or permanent
                expulsion from the community without warning (and without refund
                in the case of a paid event).
              </p>
            </li>
            <br />
            <li>
              <b>5. Reporting Guidelines</b>
              <p>
                If you are subject to or witness unacceptable behavior, or have
                any other concerns, please notify the organization owner
                @melvincwng as soon as possible via email at:
                melvin.ng@outlook.sg
              </p>
              <p>
                Each complaint will be investigated. We shall use our discretion
                to decide when and how to respond to reported incidents, with
                options ranging from taking no action to banning someone
                permanently from the project and spaces sponsored by the
                project.
              </p>
              <br />
              <p>
                However, before taking further action, we will inform the
                accused of the report and give them a chance to speak about it.
                But we will act without warning in potentially hazardous
                circumstances, such as persistent harassment or threats to
                anyone&apos;s safety.
              </p>
              <br />
              <p>
                Written by:{" "}
                <a
                  href="https://github.com/melvincwng"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0070F3" }}
                >
                  melvincwng
                </a>{" "}
                &
                <a
                  href="https://github.com/Bennykillua"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0070F3" }}
                >
                  Bennykillua
                </a>
              </p>
            </li>
          </ol>
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

export default CommunityGuidelines;
