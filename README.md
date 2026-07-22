# World Explorer

World Explorer is a Next.js project that allows users to explore countries around the world. Users can discover country information including flags, capitals, populations, regions, languages, currencies, and more using real API data.

## Features

- App Router
- File-based routing
- Shared layout with Navbar and Footer
- Dynamic routes
- Server components
- Client components
- Real API data fetching
- Static rendering and caching
- Dynamic rendering
- Search functionality
- Region filtering
- Sort countries by population
- Country details pages
- Loading UI with loading.js
- Custom 404 page with not-found.js
- Dark mode & Light Mode
- Favorite countries
- Responsive design

## Pages

- Home Page (/)
- Countries Page (/countries)
- Country Details Page (/countries/[code])
- Search Page (/search)
- About Page (/about)
## API Used

REST Countries API (v5)

World Explorer uses REST Countries API v5 to fetch real country information including names, flags, capitals, regions, population, languages, currencies, time zones, and maps.

### Endpoints

| Endpoint | Usage |
|---|---|
| GET /countries/v5 | Fetch all countries with cached data (static rendering) |
| GET /countries/v5/codes.alpha_3/{code} | Fetch single country details with fresh data (dynamic rendering) |


### API Website

https://restcountries.com/


## Environment Variables

To connect with the REST Countries API v5, this project requires an API key.

Create a file named `.env.local` in the root directory and add:

```env
REST_COUNTRIES_API_KEY=your_api_key_here
```


### Run Locally

npm install
npm run dev
