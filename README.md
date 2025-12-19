# github-user-info
GitHub User Profile Viewer
## Project Overview
This project is a simple web application that uses the **GitHub REST API** to fetch and display public information about a GitHub user. It was created as part of a graded Day 5 assignment focused on API consumption, JSON data handling, and DOM manipulation using JavaScript.

The application loads my GitHub profile by default and also allows users to search for any public GitHub username.

---

## Features
- Fetches and displays GitHub user information:
  - Username (login)
  - Number of public repositories
  - Profile avatar
- Fetches and displays the user’s repositories in an ordered list
- Repository names are clickable and link to GitHub
- Default profile loads automatically on page load
- User can search for other GitHub profiles
- Supports pressing **Enter** to search
- Displays an error message if the user is not found
- Styled using **Bootstrap 5**

---

## Technologies Used
- HTML
- JavaScript (Fetch API)
- Bootstrap 5
- GitHub REST API

---

## API Endpoints Used
- `https://api.github.com/users/{username}`
- `https://api.github.com/users/{username}/repos`

---

## Project Structure
├── index.html
└── script.js


---

## Deployment
- Hosted on Netlify:  https://github-userprofile-search.netlify.app
- Source code available on GitHub:  https://github.com/jjdavis-dev/github-user-info.git

---

Note: Repo Results Returned is capped at 30 items

## Author
Johnny Davis
