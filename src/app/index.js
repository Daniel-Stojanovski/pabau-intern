import { gql } from '@apollo/client'

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