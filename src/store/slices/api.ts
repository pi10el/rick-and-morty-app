import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

const url = 'https://rickandmortyapi.com/graphql';

const queryParse = (value: string) => ({
  document: gql`
    query {
      ${value}
    }
  `,
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery: graphqlRequestBaseQuery({ url }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Characters, CharactersQueryProps>({
      query: ({ page, gender, status, name }) =>
        queryParse(
          `characters (page: ${page || '1'}, filter: {
            name: "${name || ''}"
            gender: "${gender || ''}",
            status: "${status || ''}"
          }) {
            results {
              id, name, image
            }
            info {
              pages
            }
          }`,
        ),
      transformResponse: (res: ResponseCharacters) => res.characters,
    }),

    getCharacter: builder.query<Character, string>({
      query: (id) =>
        queryParse(
          `character(id: ${id || '0'}) {
            id, name, image, species, gender, status, location {name}, episode {name}
          }`,
        ),
      transformResponse: (res: ResponseCharacter) => res.character,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterQuery } = api;
