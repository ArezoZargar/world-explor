const API_BASE = "https://api.restcountries.com/countries/v5";

const API_KEY = process.env.REST_COUNTRIES_API_KEY;

async function fetchJson(url, cache = "no-store") {

  console.log("========== API DEBUG ==========");
  console.log("URL:", url.toString());
  console.log("API KEY:", API_KEY ? "FOUND" : "MISSING");

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json",
      },
      cache,
    });

    console.log("STATUS:", response.status);
    console.log("STATUS TEXT:", response.statusText);

    const text = await response.text();

    console.log("RESPONSE:", text.slice(0, 300));

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return JSON.parse(text);

  } catch (error) {

    console.log("FETCH ERROR:", error);

    throw error;
  }
}

function normalizeCountry(country) {
  return {
   cca3: country.codes?.alpha_3 || crypto.randomUUID(),

  name: {
 common: country.names?.common || "Unknown",
 official: country.names?.official || "Unknown",
},

    flag: country.flag.url_png,

    capital: country.capitals?.map((item) => item.name) || [],

    region: country.region,

    population: Number(country.population || 0),

    languages: country.languages || [],

    currencies: country.currencies || [],

    timezones: country.timezones || [],

    maps: {
      googleMaps: country.links.google_maps,
    },
  };
}

export async function getCountries() {
  const url = new URL(API_BASE);

  url.searchParams.set("limit", "100");

  url.searchParams.set(
    "response_fields",
    [
      "names.common",
      "names.official",
      "codes.alpha_3",
      "flag.url_png",
      "capitals",
      "region",
      "population",
      "languages",
      "currencies",
      "timezones",
      "links.google_maps",
    ].join(","),
  );

  // This page can be statically rendered and cached.
  const data = await fetchJson(url, "force-cache");

  const countries = data?.data?.objects || [];

  return countries.map(normalizeCountry);
}

export async function getCountryByCode(code) {
  const url = new URL(`${API_BASE}/codes.alpha_3/${code}`);

  // This page fetches fresh data every time.
  const data = await fetchJson(url, "no-store");

  const country = data?.data?.objects?.[0];

  return country ? normalizeCountry(country) : null;
}
