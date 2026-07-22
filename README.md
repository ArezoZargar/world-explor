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
<img width="3082" height="16384" alt="localhost_3000_search (4)" src="https://github.com/user-attachments/assets/873b77a6-a4ac-4bb1-a946-7be21b72b9a6" />

<img width="3082" height="16384" alt="localhost_3000_search (5)" src="https://github.com/user-attachments/assets/1cb15cd2-ca2c-4dbd-8bc7-47cad0174382" />

## About Page
<img width="3082" height="4512" alt="localhost_3000_search (6)" src="https://github.com/user-attachments/assets/29c320ad-2089-4839-a7c5-f48d0f6e5b92" />
<img width="3082" height="4512" alt="localhost_3000_about" src="https://github.com/user-attachments/assets/7cdd2c43-7dcd-46fb-8289-a60e075ef10e" />

## Favorite Page
<img width="3082" height="3418" alt="localhost_3000_about (1)" src="https://github.com/user-attachments/assets/0f5758f1-3b5e-40cd-96fc-0f3139e2f41b" />


## Responsive ...
<img width="1170" height="6087" alt="localhost_3000_about(iPhone 12 Pro)" src="https://github.com/user-attachments/assets/ba144b94-a9e8-461a-ab53-ceecf8498bd8" />
<img width="1536" height="3214" alt="localhost_3000_about (2)" src="https://github.com/user-attachments/assets/72c6c7c7-159c-405b-8407-47f3939f7d76" />
