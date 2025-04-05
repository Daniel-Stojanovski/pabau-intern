'use client';

import React, { useState } from 'react';
import styles from "./page.module.css";
import client from "../../apollo_client.js"

import { ApolloProvider } from "@apollo/client";

import NavBar from "./blocks/NavBar"
import CharactersList from "./blocks/CharactersList"
import ModeSwitch from './blocks/ModeSwich';

export default function Home() {

  const [statusFilter, setStatusFilter] = useState('All');
  const [speciesFilter, setSpeciesFilter] = useState('All');
  const [sortOption, setSortOption] = useState('Name');

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
          />
        </header>
        <main className={styles.main}>
          <CharactersList
            statusFilter={statusFilter}
            speciesFilter={speciesFilter}
            sortOption={sortOption}
          />
        </main>
        <footer className={styles.footer}>
          <ModeSwitch />
        </footer>
      </div>
    </ApolloProvider>
  );
}
