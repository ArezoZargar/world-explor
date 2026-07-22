import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function CountryCard({ country }) {
  return (
    <div className="country-card">
      {country.flag ? (
        <Image
          src={country.flag}
          alt={country?.name?.common || "Country flag"}
          width={200}
          height={120}
          className="country-image"
        />
      ) : (
        <Image
          src="/images/no-flag.jpg"
          alt="No flag available"
          width={200}
          height={120}
          className="country-image"
        />
      )}
      <div className="country-information">
        <h2 className="country-title">{country.name.common}</h2>

        <div className="country-info">
          <span>Capital:</span>
          <p>{country.capital?.[0] || "N/A"}</p>
        </div>

        <div className="country-info">
          <span>Region:</span>
          <p>{country.region || "N/A"}</p>
        </div>

        <div className="country-info">
          <span>Population:</span>
          <p>{country.population.toLocaleString()}</p>
        </div>

        <div className="country-footer">
          <FavoriteButton country={country} />
          <Link
            className="details-btn"
            href={`/countries/${country.cca3 || "unknown"}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
