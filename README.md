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

- npm install
- npm run dev

 ### ScreenShotes
 ## Home Page
 <img width="2048" height="2404" alt="localhost_3000_" src="https://github.com/user-attachments/assets/c34e74d0-5be9-449b-98f1-5d3ff233570b" />
 <img width="2048" height="2404" alt="localhost_3000_ (1)" src="https://github.com/user-attachments/assets/9cd763c9-b881-490e-b8e1-14b5c2bbabba" />


 ## Countries Page
 
<img width="2760" height="16384" alt="localhost_3000_countries (2)" src="https://github.com/user-attachments/assets/264912ee-733e-446c-ac63-cd6e5cc039e7" />

 <img width="2760" height="16384" alt="localhost_3000_countries (1)" src="https://github.com/user-attachments/assets/2f93a82b-1941-421e-b437-72b732dd24af" />



## Country Detail Page
<img width="2694" height="2862" alt="localhost_3000_countries_AFG" src="https://github.com/user-attachments/assets/320ceabc-4dec-4347-8df1-de203f9e1552" />
<img width="2694" height="2862" alt="localhost_3000_countries_AFG (1)" src="https://github.com/user-attachments/assets/40adcfd7-c79b-4dfd-a022-906cb6fee472" />

## Search Page 
<img width="2694" height="16384" alt="localhost_3000_search" src="https://github.com/user-attachments/assets/0a71a663-ea1f-400a-9cc7-2820e6a0a14b" />


