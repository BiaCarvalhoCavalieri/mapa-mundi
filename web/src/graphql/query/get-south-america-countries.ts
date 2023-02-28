import { gql } from "@apollo/client"

export const GET__SOUTH_AMERICA_COUNTRIES = gql`
query($code: ID!) {
        continent(code: $code) {
            name
            countries {
                name
                capital
                code
            }
        }
    }
`;
