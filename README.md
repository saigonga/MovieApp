# React Movie App

## Description
This is a React-based movie application that allows users to:
- View popular movies.
- Search for movies using keywords.

The app fetches data from [The Movie Database (TMDb)](https://www.themoviedb.org/) API.

## Features
- **Popular Movies**: Displays a list of trending movies.
- **Search Functionality**: Allows users to search for movies by title.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Live Demo

Check out the live version of the app here: [React Movie App](https://6820c902ad0af00008484afc--movieapp32.netlify.app/)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd React-Movie-App/frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the `frontend` folder and add your TMDb API key:
   ```env
   VITE_API_KEY=your_api_key_here
   ```

   > You can obtain an API key by signing up at [The Movie Database (TMDb)](https://www.themoviedb.org/).

5. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This app is configured for deployment on platforms like **Netlify** or **Vercel**. Ensure the following:
- Set the `VITE_API_KEY` environment variable in the deployment platform.
- For React Router, add a `_redirects` file in the `public` folder with the following content:
  ```
  /*    /index.html   200
  ```

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **Vite**: Build tool for faster development.
- **TMDb API**: For fetching movie data.

## Folder Structure
```
frontend/
  ├── public/          # Static assets
  ├── src/             # Source code
  │   ├── components/  # Reusable components
  │   ├── contexts/    # Context API for state management
  │   ├── css/         # Stylesheets
  │   ├── pages/       # Page components
  │   ├── services/    # API service functions
  ├── .env             # Environment variables (not included in version control)
  ├── .gitignore       # Git ignore file
  ├── package.json     # Project metadata and scripts
  ├── vite.config.js   # Vite configuration
```

## License
This project is licensed under the MIT License.
