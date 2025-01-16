# React + TypeScript practice

## Getting Started with React

### Creating A react App

- Two known way to create React APp:

* Create react App (CRA)
  `Create React App` is a popular tool to quickly set up a React application with a basic configuration. It includes a build system, hot reloading, and more. It also supports TypeScript by default if you pass the `--template typescript` flag.

```
npx create-react-app
```

- vite
  Vite is a next-generation, fast build tool that is gaining popularity. It is faster than CRA in terms of development speed, and it also supports TypeScript out of the box.

To create a React app with Vite and TypeScript, run:

```
npm create vite@latest
```

### Project Stucture:

- `node_modules`:

  - Contains all the installed third-party dependencies such as React, ReactDOM, and other packages like TypeScript, Webpack, Babel, and various libraries (e.g., axios, react-router-dom, etc.).

  - This directory is automatically created when you run npm install or yarn install.

- `public`:

  - public assests of all website exist like images, videos, files etc..

- `src`:

  - The Source code of our components
  - This is where all your application code lives, including React components, styles, utility functions, hooks, and TypeScript files.
  - Typical subdirectories might include:
    - components/: React components (e.g., Button, Header, etc.).
    - styles/: CSS, SCSS, or styled-components files.
    - assets/: Image, font, or other static files used in your components.
    - utils/: Helper functions and utilities.
    - hooks/: Custom React hooks.
    - pages/: If using a router, this directory might contain different page components (e.g., Home, About, etc.).

- `index.html`:

  - containes a div with a ID of root which is the container of our application

- `package.json`:

  - This file holds metadata about the project and is a central place for managing dependencies, scripts, and project settings.
  - **Scripts**: Defines commands for running, building, testing, and linting your app (e.g., `npm start`, `npm run build`).
  - **Dependencies**: Lists all the npm packages the project depends on.
  - **DevDependencies**: Lists tools needed for development, such as Webpack, Babel, ESLint, etc.
  - **Main entry point**: Specifies the entry point (usually src/index.tsx for React TypeScript apps).

- `tsconfig.jsopn`:

  - TypeScript compiler configuration

- `vite.config.ts`:

  - TypeScript compiler configuration

### Creating a React Component

- The extension of TypeScript files should be **`.ts`** or **`.tsx`**:

  - **`.ts`** for plain TypeScript files (without JSX).
  - **`.tsx`** for React components that include JSX syntax (used when writing React components with TypeScript).

- There are two ways to create a React component: using a JavaScript class or a function.

Example of a function component:

```
// PascalCasing
function Message() {
  return <h1>Hello World</h1>
}
```

- Note: This is not plain HTML in the middle of JavaScript; it's JSX. JSX gets compiled into regular JavaScript code, which ultimately gets rendered as React elements, similar to:

```
React.createElememnt('h1') etc...
```

- To use this component in other parts of your application, you need to export it:

```
export default Message;
```

- In your main `App` component:

```
function App() {
  return <Message />;
}
```

- **Hot Module Replacement (HMR)**: Vite, which is commonly used with React projects, supports hot module replacement. This means when you make changes to your code, the browser will automatically update the page without needing a full reload.
- To create dynamic content inside JSX, you need to use curly braces `{}`. Inside the braces, you can write any valid JavaScript expression (an expression is a piece of code that produces a value).
- Example of dynamic content:

```
const name = 'John';
return <h1>Hello, {name}!</h1>;
```

### How React Works:

- In a React application, we build a **component tree**, with the `App` component acting as the root and other components (such as `Message`) as child components. Here's how React processes this tree:

  - 1. **Virtual DOM**: When the application starts, React takes the component tree and builds a JavaScript data structure called the **Virtual DOM**. This Virtual DOM is a lightweight representation of the actual DOM in the browser. Each node in the Virtual DOM represents a component and its properties.
  - 2. **State Changes**: When the state or data of a component changes, React updates the Virtual DOM to reflect the new state. It then compares the current version of the Virtual DOM with the previous version to identify which nodes need to be updated.
  - 3. **Efficient Updates**: React only updates the nodes in the actual DOM that have changed, ensuring that the update process is efficient and doesn't require re-rendering the entire page. These updates to the actual DOM are done through `ReactDOM`.

- In the `index.html`:

  - We typically have a `<div>` element with the ID `root`. This is where React will mount the application.

- In the main entry file (e.g., `src/main.tsx`):

  - We use `ReactDOM.createRoot()` to hook React into the DOM. For example:

  ```tsx
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  ```

  - This initializes the React app and renders it inside the `div` with the ID root.

- What is `strictMode`:

  - `StrictMode` is a built-in component in React that helps identify potential problems in your application during development. It doesn’t have any visual representation in the UI but provides warnings in the development environment to help improve the code's quality and performance.

- React is commonly used to build cross-platform applications that work across different operating systems, device types, and web browsers. For mobile development, React Native is used to build native apps for iOS and Android using the same component-based architecture and principles as React.

### React Ecosystem

- **React** is a JavaScript library for building user interfaces, primarily for single-page applications (SPAs). React focuses on the view layer of the application, allowing developers to create dynamic and interactive UIs using components.

- React vs. Frameworks:

  - In contrast to React, there are full-fledged **frameworks** like **Angular** and **Vue**.
  - **Library**: A tool that provides specific functionality to solve a particular problem. You call the library when you need it.
  - **Framework**: A set of tools, libraries, and guidelines for building applications. It provides a structure and dictates how the application is built.

- React is considered a **library** because it primarily handles the UI rendering aspect. It doesn't enforce a specific structure for your app or dictate how to organize it, unlike a framework.
- React itself is used to create **dynamic** and **interactive** user interfaces, but it doesn't cover everything needed for a complete application.
- While React is a powerful tool for building user interfaces, it does not provide everything you need for a full-fledged application. For that, we need additional tools and libraries to handle other concerns.

  - **Routing**: To manage navigation between different views or pages in your app (e.g., `React Router`).
  - **HTTP Requests**: For interacting with backend APIs (e.g., `Axios`, `Fetch`).
  - **App State Management**: To handle and manage the application's state across components (e.g., `Redux`, `Context API`).
  - **Internationalization (i18n)**: To support multiple languages and regions in your app (e.g., `react-i18next`).
  - **Form Validation**: For handling form input and validation logic (e.g., `Formik`, `React Hook Form`).
  - **Animations**: For adding animations and transitions to your app (e.g., `Framer Motion`, `React Spring`).

- React provides the foundation for building the UI, but these additional tools and libraries make it easier to handle the other essential aspects of application development.
