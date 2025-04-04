import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { Load_Characters } from '../index.js'

function GetCharacters() {
  const { error, loading, data } = useQuery(Load_Characters);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Check if data and data.characters are available before rendering
  if (!data || !data.characters || !data.characters.results) {
    return <div>No characters found.</div>;
  }

  return (
    <div>
      {data.characters.results.map((character) => (
        <div key={character.name}>
          <h3>{character.name}</h3>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
}

export default GetCharacters;