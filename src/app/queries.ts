import { gql } from '@apollo/client'

interface Character {
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
      name: string;
    };
    image: string; //image included for design purposess
}
  
interface CharactersData {
    characters: {
      results: Character[];
    };
}

export const Load_Characters = gql`
    query CharactersQuery {
        characters {
            results {
            name,
            status,
            species,
            gender,
            origin {
                name,
            },
            image
            }
	    }
    }
`;
