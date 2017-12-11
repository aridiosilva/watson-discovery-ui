# Project Structure

Below is a general overview of the most important directories and files in the project.

```
.
├── env.sample # Sample environment variable files that needs to be copied to .env file
├── app.js # Entry point of the application
├── manifest.yml # Configuration used to deploy app to IBM Cloud
├── package.json # Config file containing dependencies and scripts and babel config
├── public # Public folder contains CSS and JS served on the webpage
│   ├── css
│   ├── images
│   └── js
│       └── bundle.js # Entry point for code run in the browser
├── server # Contains code specific to the server
│   ├── express.js # File that configures express
│   ├── index.js # Configures the endpoint for Discovery API and create express server
│   ├── query-builder.js # Helper file which helps generate the query params passed to Discovery API
│   └── watson-discovery-service.js # Helper file to promisify Waston SDK APIs
├── src # Views that get rendered by the server and the client bundle.js
│   ├── index.js # HTML view that is rendered
│   ├── main.js # Main component of view which is rendered as HTML server side and contains client side code
│   ├── FilterBase # Base component for all filter objects
│   │   ├── FilterContainer # Base component for all filter continers
│   │   └── FilterItem # Base component for all filter items
│   ├── CategoriesFilter # Filter Component that contains Category items
│   ├── ConceptsFilter # Filter Component that contains Concept items
│   ├── EntitiesFilter # Filter Component that contains Entity items
│   ├── Matches # Component that display all search results
│   ├── PaginationMenu # Component the displays a menu to page through search results
│   ├── SearchField # Component that allows the user to specifiy the search string
│   ├── SentimentChart # Component that displays a donut chart to visualize sentiment of results
│   ├── TagCloutRegion # Component that shows a tag cloud of entities/categories/concepts
│   ├── layouts # Layout for page
│   │   └── default.js
│   └── utils.js # Helper file containing utility functions shared in the project
```