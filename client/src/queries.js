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

export const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export const GET_TODOS = gql`
	{
		todos {
			id
			type
		}
	}
`;
