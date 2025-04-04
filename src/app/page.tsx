'use client';

import Image from "next/image";
import styles from "./page.module.css";
import client from "../../apollo_client.js"

import { ApolloProvider } from "@apollo/client";

import GetCharacters from "./components/getCharacters.js"

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.page}>
        <main className={styles.main}>
          <GetCharacters/>
        </main>
        <footer className={styles.footer}>
        </footer>
      </div>
    </ApolloProvider>
  );
}
