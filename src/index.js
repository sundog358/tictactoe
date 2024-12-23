/******************************************************
 * File Name: index.js
 *
 *
 * Description:
 * This file serves as the entry point for the React Tic-Tac-Toe application.
 * It initializes the application by rendering the main `App` component into
 * the root DOM node. It uses React's `StrictMode` to highlight potential
 * problems and enforce best practices.
 *
 *
 * Purpose:
 * - To bootstrap the React application and render it into the browser.
 * - To set up the application structure and link core styles.
 * - To facilitate integration of the React component tree with the HTML DOM.
 * - To ensure adherence to React's strict coding standards via `StrictMode`.
 *
 *
 * Usage:
 * - This file is automatically invoked by the React build process.
 * - The `App` component imported here represents the main application.
 * - Modify `App` for application logic and content; `index.js` remains minimal.
 * - To run the app, execute `npm start` or the equivalent start command.
 *
 *
 * Key Points, Ideas, and Concepts:
 * - **Entry Point**: `index.js` is the starting point for the React application.
 * - **StrictMode**: A development tool that ensures adherence to React best practices.
 * - **Component Rendering**: Uses `createRoot` to render the React component tree.
 * - **Styling**: Links the global stylesheet `styles.css` to the application.
 * - **HTML DOM Integration**: Anchors the React component tree to the DOM via the `root` element.
 * - **Modular Design**: Delegates core functionality to the `App` component.
 *
 *
 * Key Technical Code Components:
 * 1. **React Imports**:
 *    - `StrictMode`: A wrapper component for identifying potential issues.
 *    - `createRoot`: The modern API for rendering the React tree into the DOM.
 *
 * 2. **Global Styles**:
 *    - `./styles.css`: Provides styling for the entire application.
 *
 * 3. **App Component**:
 *    - Imported from `./App`.
 *    - Serves as the root of the React component hierarchy.
 *
 * 4. **DOM Integration**:
 *    - Uses `document.getElementById("root")` to locate the root HTML element.
 *    - Renders the React tree inside the DOM's `root` element.
 *
 *
 * Implementation Details:
 * - **React.StrictMode**:
 *   - Ensures the app adheres to React best practices and highlights potential issues.
 *   - Affects only development builds, not production builds.
 *
 * - **createRoot**:
 *   - Initializes the root React tree in the `root` DOM element.
 *   - Replaces the legacy `ReactDOM.render()` API.
 *
 * - **Component Rendering**:
 *   - The `App` component is wrapped in `StrictMode` for enhanced debugging.
 *   - The `App` component serves as the entry point for further development.
 *
 *
 * Notes:
 * - Ensure the `root` element exists in the HTML file (usually in `public/index.html`).
 * - Always maintain minimal logic in `index.js` for clarity and separation of concerns.
 * - The file serves as a "glue" between the React app and the HTML DOM.
 *
 *
 * Dev Team Tips:
 * - Use `StrictMode` to catch React lifecycle issues during development.
 * - Centralize global styles in `styles.css` for consistency across the app.
 * - Avoid adding non-essential logic to `index.js`—focus on app initialization.
 *****************************************************/

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
