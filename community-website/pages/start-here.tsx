import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";

const StartHere: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start Here | Your First Open Source Project</title>
        <meta
          name="description"
          content="Step-by-step guide to making your first open source contribution to YFOSP."
        />
      </Head>

      <main className={`${styles.main} text-black dark:text-white`}>
        <NavBar />

        <h1 className={styles.title}>Start Here</h1>
        <p className={styles.description}>
          New to open source? Follow these steps to make your first contribution
          to this website.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>1. Set up your tools</h2>
            <p>
              Install Git and a code editor (for example, Visual Studio Code).
              Make sure <code>git --version</code> works in your terminal.
            </p>
          </div>

          <div className={styles.card}>
            <h2>2. Fork and clone</h2>
            <p>
              Go to{" "}
              <a
                href="https://github.com/yfosp/main-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                yfosp/main-website
              </a>{" "}
              and click <strong>Fork</strong>, then clone your fork to your
              machine.
            </p>
          </div>

          <div className={styles.card}>
            <h2>3. Create a branch</h2>
            <p>
              In your project folder, run{" "}
              <code>git checkout -b your-feature-name</code> to create a new
              feature branch.
            </p>
          </div>

          <div className={styles.card}>
            <h2>4. Pick a task</h2>
            <p>
              Look for issues labeled <code>good first issue</code> or{" "}
              <code>help wanted</code>, or improve content such as text,
              resources, or documentation.
            </p>
          </div>

          <div className={styles.card}>
            <h2>5. Run and test</h2>
            <p>
              Install dependencies with <code>npm install</code> and start the
              dev server with <code>npm run dev</code>. Check your changes in
              the browser.
            </p>
          </div>

          <div className={styles.card}>
            <h2>6. Commit and open a PR</h2>
            <p>
              Use <code>git add .</code>, then{" "}
              <code>git commit -m &quot;feat: your change&quot;</code> and{" "}
              <code>git push</code>. Then open a pull request from your branch
              on GitHub.
            </p>
          </div>
        </div>

        <p className={styles.description}>
          Ready to explore issues?{" "}
          <a
            href="https://github.com/yfosp/main-website/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            View open issues &rarr;
          </a>
        </p>

        <p className={styles.description}>
          Or go back to{" "}
          <Link href="/">
            <a>the homepage</a>
          </Link>
          .
        </p>
      </main>
    </div>
  );
};

export default StartHere;
