import Link from "next/link";
import { getCountryByCode } from "@/lib/countries";
import { notFound } from "next/navigation";

export default async function CountryDetailsPage({ params }) {
  const { code } = await params;
  // This page fetches fresh data every time.
  const country = await getCountryByCode(code);

  if (!country) {
    notFound();
  }
  const name = country.name?.common || "Unknown";
  const officialName = country.name?.official || "No Official Name";

  const capital = country.capital?.[0] || "No Capital";

  const region = country.region || "Unknown";
  const subregion = country.subregion || "Unknown";

  const population = country.population?.toLocaleString() || "0";

  const languages =
    country.languages?.map((language) => language.name).join(", ") ||
    "No languages";

  const currencies =
    country.currencies?.map((currency) => currency.name).join(", ") ||
    "No currencies";

  const timezones = country.timezones?.join(", ") || "No time zones";

  const googleMaps = country.maps?.googleMaps || "#";
  return (
    <main className="country-details">
      <Link href="/countries" className="details-back">
        ← Back to Countries
      </Link>

      <div className="details-wrapper">
        <img
          src={country.flag}
          alt={country.name.common}
          width={300}
          height={200}
          className="details-flag"
        />

        <h1 className="details-name">{name}</h1>

        <p className="details-official">{officialName}</p>

        <div className="details-information">
          <div className="country-info">
            <span>OfficalName:</span>
            <p>{officialName}</p>
          </div>

          <div
            className="country-info 
"
          >
            <span>Capital:</span>
            <p>{capital}</p>
          </div>

          <div className="country-info">
            <span>Region:</span>
            <p>{region}</p>
          </div>

          <div className="country-info">
            <span>Subregion:</span>
            <p>{subregion}</p>
          </div>

          <div className="country-info">
            <span>Population:</span>
            <p>{population}</p>
          </div>

          <div className="country-info">
            <span>Languages:</span>
            <p>{languages}</p>
          </div>

          <div className="country-info">
            <span>Currencies:</span>
            <p>{currencies}</p>
          </div>

          <div className="country-info">
            <span>Time Zone:</span>
            <p>{timezones}</p>
          </div>
        </div>

        <a href={googleMaps} target="_blank" className="details-map-btn">
          🌍 View on Google Maps
        </a>
      </div>
    </main>
  );
}
