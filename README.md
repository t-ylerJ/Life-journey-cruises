# Life Journey Cruises
<a id='readme-top'> </a>
<details>
 <summary>Table of Contents</summary>
 <ol>
  <li>
   <a href="#about">About</a>
   <ul>
    <li>
     <a href="#built-with">Built With</a>
    </li>
   </ul>
  </li>
  <li>
   <a href="#getting-started">Getting Started</a>
   <ul>
    <li>
     <a href="#prerequisites">Prerequisites</a>
    </li>
    <li>
     <a href="#installation">Installation</a>
    </li>
   </ul>
  </li>
  <li>
   <a href="#roadmap">Roadmap</a>
  </li>
  <li>
   <a href=“#developers”>Developers</a>
  </li>
 </ol>
</details>


## About:
Ahoy!
Welcome to Life Journey Cruises, a sample platform where users can explore, plan, and book cruises. Our application uses a streamlined checkout process and user-friendly features --such as our AI chatbot -- to simplify the booking process and offer an enhanced user experience.


## Technologies:
  Front-End
- Tailwind CSS[Tailwind CSS](https://tailwindcss.com/)

  Back End:
- 📖Remix [Docs 📖](https://remix.run/docs)


## Our Team: The Nautical Nine

### Full-Stack Developers:
Michael, Shaoyu, Denis, Tanner, Lu Lu, Liru, Tyler, Jason, Pallavi
### Product Manager: Pallavi/ Architecture Owner: Jason / UI Designer: Tyler


## Roadmap
 - [X] Set up a Remix framework to make sure everyone’s on the same page concerning the project structure
 - [X] Set up a Supabase database and map out all of the schemas to make sure we’re inputting data properly
 - [X] Landing Page to hook in customers and begin the booking process
 - [X] Planning page with all the information about the cruise and its stops, including a map if its route, and a list of excursions to choose from
 - [X] Booking page to make your selection of rooms and number of guests for your cruise
 - [X] Payment page to summarize all the booking information and securely take in payment information
 - [X] Login functionality with 2FA to prevent bot attacks and ensure the integrity of the website
 - [X] Stylized with Tailwind, made to look like a party, tailored towards the mid-20s demographic
 - [X] AI Chat Assistance able to answer any questions you may have for cruise booking

### Prerequisites
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
```sh
npm install
```


### Installation
1. Clone the repo
```sh
  git clone https://github.com/thenauticalnine/rfp2404-blueocean.git
```
2. Install NPM packages
```sh
  npm install
```
3. Make a copy of the `.exampleenv` file and rename it to `.env`. Enter the following in the `.env` file.
```sh
	MAPBOX_ACCESS_TOKEN = "Mapbox Access Token"
	POSTGRES_URL="Postgres URL"
	OPENAI_KEY = "OpenAI Key"
```
4. Run in dev environment.
```sh
  npm run dev
```


