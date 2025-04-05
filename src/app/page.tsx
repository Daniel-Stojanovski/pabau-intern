'use client';

import React, { useState } from 'react';
import styles from "./page.module.css";
import client from "../../apollo_client.js"

import { ApolloProvider } from "@apollo/client";

import NavBar from "./blocks/NavBar"
import CharactersList from "./blocks/CharactersList"
import LangSwitch from './blocks/LangSwitch';

export default function Home() {

  const [statusFilter, setStatusFilter] = useState('All');
  const [speciesFilter, setSpeciesFilter] = useState('All');
  const [sortOption, setSortOption] = useState('None');
  // const [sortDirection, setSortDirection] = useState('az');
  const [switchLanguage, setSwitchLanguage] = useState<boolean>(false);

  const handleLanguageChange = (checked: boolean) => {
    setSwitchLanguage(checked);
  };

  return (
    <ApolloProvider client={client}>
      <div className={styles.page}>
        <header className={styles.header}>
          <NavBar 
            statusFilter={statusFilter}
            speciesFilter={speciesFilter}
            sortOption={sortOption}
            onStatusChange={setStatusFilter}
            onSpeciesChange={setSpeciesFilter}
            onSortChange={setSortOption}
            switchLanguage={switchLanguage}
          />
        </header>
        <main className={styles.main}>
          <CharactersList
            statusFilter={statusFilter}
            speciesFilter={speciesFilter}
            sortOption={sortOption}
            // sortDirection={sortDirection}
            // switchLanguage={switchLanguage}
          />
        </main>
        <footer className={styles.footer}>
          <LangSwitch
            switchLanguage={switchLanguage}
            onLanguageChange={handleLanguageChange}/>
        </footer>
      </div>
    </ApolloProvider>
  );
}
