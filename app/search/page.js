import { getCountries } from "@/lib/countries";
import CountrySearch from "@/components/CountrySearch";

export default async function SearchPage() {
  const countries = await getCountries();

  return (
    <main>
      <CountrySearch countries={countries} />
    </main>
  );
}
