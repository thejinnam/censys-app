# React + Vite + TailwindCSS Censys IPv4 Hosts Search Application

This project is a client-side web application that uses the Censys REST API to retrieve and display a list of IPv4 hosts based on a user-defined search query. It provides pagination for navigating through search results, displaying each host's IP address and the number of associated protocols.

## Features/Usage

- **Search**: Enter a search query to find IPv4 hosts based on specific attributes.
- **Pagination**: Navigate through pages of search results.
- **Result Details**: Each result displays the IP address and the number of protocols associated with it.

## Technologies

- **React**: Frontend library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool for fast development and bundling speeds
- **Jest**: Testing framework for unit and integration tests

### Installation

1. **Clone the repository & Install dependencies**:
   - clone repo via `git clone`
   - After cloning, run `npm install` to ensure all packages are installed

2. **Set up environment variables**:

   ```bash
   API_URL='https://search.censys.io/api/v2/hosts/search'
   API_ID='your_api_id'
   API_SECRET='your_api_secret'

   ```

3. **Run the application**:

   ```bash
   npm run dev
   ```

### Automated Testing

```bash
npm run dev
```

This command will run all test suites and output results in the console.
