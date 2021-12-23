import { gql } from '@apollo/client';

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;

export const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
