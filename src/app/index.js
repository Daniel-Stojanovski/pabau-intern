import { gql } from '@apollo/client'

export const Load_Characters = gql`
query FilteredCharactersQuery($status: String, $species: String){
    characters(filter: {status: $status, species: $species}){
        results{
        id,
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