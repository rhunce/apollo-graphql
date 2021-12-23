import { useQuery } from '@apollo/client';
import { EXCHANGE_RATES } from './queries';

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return data.rates.map(({ currency, rate, name }) => (
    <div key={currency}>
      <p>
        {currency}: {rate} ({name})
      </p>
    </div>
  ));
}