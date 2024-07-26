# Life Journey Cruises
<a id='readme-top'> </a>
<details>
 <summary>Table of Contents</summary>
 <ol>
  <li>
   <a href="#about">About</a>
   <ul>
    <li>
     <a href="#computer-technologies">Technologies</a>
    </li>
    <li>
      <a href="#ship-our-team">Our Team:</a>
    </li>
   </ul>
  </li>
  <li>
   <a href="#white_check_mark-getting-started">Getting Started</a>
  </li>
  <ul>
    <li>
     <a href="#file_folder-roadmap">Roadmap</a>
    </li>
  </ul>
 </ol>
</details>


## About
:anchor: Ahoy!
Welcome to Life Journey Cruises, a sample platform where users can explore, plan, and book a cruise to one of our many destinations. Our application uses a streamlined checkout process and user-friendly features --such as our AI chatbot -- to simplify the booking process and offer an enhanced user experience.

<div align="center">
 <h3> Explore :earth_americas:</h3>
  <img src="/public/readme/landingpage.gif" alt="project landing page image" width="600px" />
<h3> Plan :clipboard: </h3>
  <img src="/public/readme/plan.gif" alt="project planning page image" width="600px" />
<h3> Book :date: </h3>
  <img src="/public/readme/book.gif" alt="project booking page image" width="600px" />
</div>

## :computer: Technologies
Front-End:
![Tailwind](https://img.shields.io/badge/tailwind-black?style=for-the-badge&logo=tailwindcss)
![JavaScript](https://img.shields.io/badge/javascript-black?style=for-the-badge&logo=javascript)
![React](https://img.shields.io/badge/react-black?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/vite-black?style=for-the-badge&logo=vite)


Back End:
![Remix](https://img.shields.io/badge/remix-black?style=for-the-badge&logo=remix)
![Supabase](https://img.shields.io/badge/supabase-black?style=for-the-badge&logo=supabase)

Testing:
![k6](https://img.shields.io/badge/k6-black?style=for-the-badge&logo=k6)
![Jest](https://img.shields.io/badge/jest-black?style=for-the-badge&logo=jest)






## :ship: Our Team

### Full-Stack Developers - The Nautical Nine
|  Shaoyu Chen   |  Liru Zhao     |  Denis More    |  Jason  Ullrich  |  Tyler  Johnson  |  Tanner  Jacobson  |  Michael  Trofimov  |  Pallavi  Kishore  |  Lu  Lu        |
|  :----------:  |  :----------:  |  :----------:  |  :----------:    |  :----------:    |  :----------:      |  :----------:       |  :----------:      |  :----------:  |
|  LinkedIn      |  LinkedIn      |  LinkedIn      |  LinkedIn        |  LinkedIn        |  LinkedIn          |  LinkedIn           |  LinkedIn          |  LinkedIn      |
|  Github        |  Github        |  Github        |  Github          |  Github          |  Github            |  Github             |  Github            |  Github        |

 Product Manager: Pallavi :small_blue_diamond: Architecture Owner: Jason :small_blue_diamond: UI Designer: Tyler


## :file_folder: Roadmap
 - [X] Set up a Remix framework to make sure everyone’s on the same page concerning the project structure
 - [X] Set up a Supabase database and map out all of the schemas to make sure we’re inputting data properly
 - [X] Landing Page to hook in customers and begin the booking process
 - [X] Planning page with all the information about the cruise and its stops, including a map if its route, and a list of excursions to choose from
 - [X] Booking page to make your selection of rooms and number of guests for your cruise
 - [X] Payment page to summarize all the booking information and securely take in payment information
 - [X] Login functionality with 2FA to prevent bot attacks and ensure the integrity of the website
 - [X] Stylized with Tailwind, made to look like a party, tailored towards the mid-20s demographic
 - [X] AI Chat Assistance able to answer any questions you may have for cruise booking


## :white_check_mark: Getting Started
###  Prerequisites
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
```sh
npm install
```

### Installation
1. Clone the repo.
```sh
  git clone https://github.com/thenauticalnine/rfp2404-blueocean.git
```
2. Install NPM packages.
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

## Git Workflow :arrows_clockwise:
 	# Switch to the main branch
git checkout main
# Update the main branch with the latest changes from the remote repository
git pull origin main
# Switch to your feature branch
git checkout <branchname>
# Merge the latest changes from the main branch into your feature branch
git merge main
# Check the status of your feature branch to see if there are any uncommitted changes
git status
# If there are changes, add and commit them
git add .
git commit -m "Your commit message"
# Push your feature branch to the remote repository
git push origin <branchname>
