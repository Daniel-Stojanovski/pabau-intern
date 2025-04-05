import { gql } from '@apollo/client'

export const Load_Characters = gql`
query FilteredCharactersByPageQuery($status: String, $species: String, $page: Int!,){
    characters(page: $page, filter: {status: $status, species: $species}){
        info {
            pages
            count
        }
        results{
            id,
            name,
            status,
            species,
            gender,
            origin {
                name
            },
            image
        }
    }
}
`;