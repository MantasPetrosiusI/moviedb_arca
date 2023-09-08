# Movie Search App

This is a React application that allows users to search for movies by title and view detailed information about each movie. It utilizes the OMDBApi for fetching movie data.

## Table of Contents

- [Movie Search App](#movie-search-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)

## Features

- **Search Page:** Users can search for movies by entering a title.
- **Search Results:** Displays a list of movies matching the search criteria with titles, poster images, and release years.
- **Last Searched Movies:** Displays a list of movies that have been searched by users
- **Users Also Searched:** Displays keywords used prior
- **Movie Details:** Clicking on a movie in the search results leads to a details page with additional information about the selected movie.
- **Redux State Management:** Manages application state using Redux for efficient data sharing between components.
- **React Router:** Implements client-side routing for different pages or components.
- **API Integration:** Fetches movie data from the OMDBApi using API service functions.

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/MantasPetrosiusI/moviedb-arca.git
   cd moviedb-arca

   # OR
   Clone from the respository

   https://github.com/MantasPetrosiusI/moviedb_arca
   ```

2. Create a `.env` file in the root directory and add your OMDBApi key:

   ```env
   REACT_APP_BACKEND_URL_SEARCH = [ your backend url for search results ]
   REACT_APP_BACKEND_URL_MOVIES = [ your backend url for movie details ]
   ```

3. Install required dependencies:

   ```bash
   npm install
   # OR
   yarn install
   ```

4. Build the server:

   ```bash
   npm run build
   # OR
   yarn build
   ```

5. Start the server:

   ```bash
   npm run dev
   # OR
   yarn start
   ```

6. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Usage

- Launch the application using the instructions provided in the Installation section.
- On the search page, enter a movie title in the search input field and press Enter.
- View the search results, click on a movie to see its details, and navigate between pages using the provided links.

## Folder Structure

The project directory is structured as follows:

- `src/`: Contains the application source code.
  - `components/`: Houses React components.
  - `redux/`: Manages Redux actions, reducers, and store configuration.
  - `css/`: Houses all css of the aplication.
  - `App.ts`: Main application component.
  - `index.ts`: Entry point of the application.
  - `index.css`: css file of index.ts.
- `.env`: Environmental variables

## Technologies Used

- React
- Redux
- React Router
- Fetch API (for API requests)
- CSS for styling
- Material-UI (including @mui/material and @mui/icons-material)
- Bootstrap (including react-bootstrap and bootstrap-icons)
- react-modal
- Redux Toolkit
- Redux Persist
- TypeScript
- Testing Libraries (including @testing-library/jest-dom, @testing-library/react, @testing-library/user-event)
- Other Dev Dependencies and TypeScript Definitions

## Contributing

Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.
