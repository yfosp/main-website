import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Contributors: NextPage = () => {
  return (
    <div className={styles.container}>
      Contributors Placeholder
      <br />
      <Link href="/">Go Back</Link>
    </div>
  );
};

export default Contributors;
