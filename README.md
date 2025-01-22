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

## Building Components

- In this section, we will cover the fundamental concepts in React applications:
  - **Building Components**: Understanding the role of components in React and how to create them.
  - **Rendering Markup with JSX**: How JSX is used to define the structure of your UI in React components.
  - **Managing State**: Using React’s state management to make your components dynamic and interactive.
  - **Passing Input via Properties (Props)**: How to pass data to child components through props.
  - **Debugging React Apps**: Techniques and tools for debugging React applications effectively.

### Creating a ListGroup Componnets:

- In this lesson, we will create a basic **ListGroup** component using **Bootstrap** to give our application a modern look and feel. Bootstrap is a very popular CSS library that helps with responsive design and UI components.

1. **Install Bootstrap**:

- To get started, we need to install Bootstrap in our project. Run the following command:

```bash
npm i bootstrap
```

2. **Import Bootstrap CSS**: After installation, we need to import the Bootstrap CSS file into our project. To do this, add the following import to your `main.tsx` file:

```
import "bootstrap/dist/css/bootstrap.css"
```

- This will ensure that the styles are applied to your app. You can confirm it's working by running the app using:

```
npm run dev
```

3. **Clean up default CSS**: Remove the content inside `app.css` and `index.css` files to avoid conflicts with Bootstrap styles.
4. **Create a Components Folder**: Create a new folder named `components` inside the `src` folder. This is where we will store our React components.
5. **Create ListGroup Component**: Inside the components folder, create a file called `ListGroup.tsx`. Follow PascalCase naming convention for the component file.

```
function ListGroup() {
  return <h1>List Group</h1>;
}

export default ListGroup;
```

6. **Use the ListGroup Component in App**: Open `App.tsx`, and import the `ListGroup` component.

```
import ListGroup from "./components/ListGroup";

function App() {
  return <ListGroup />;
}

export default App;
```

7. **Get ListGroup Code from Bootstrap**: Go to the Bootstrap documentation and navigate to **Components → ListGroup**. Copy the sample code for a list group, which typically looks like this:

- In JSX, `class` is a reserved keyword in JavaScript, so it must be written as `className` instead. For example:

```tsx
function ListGroup() {
  return (
    <ul className="list-group">
      <li className="list-group-item">Item 1</li>
      <li className="list-group-item">Item 2</li>
      <li className="list-group-item">Item 3</li>
    </ul>
  );
}
```

10. **Tips**:

- To open a file quickly, use **Ctrl + P** to open the command palette and search for the file.
- To select multiple occurrences of the same word, use **Ctrl + D** to select the next occurrence (for multiple cursors).
- For JSX code that spans multiple lines, wrap it inside parentheses `()`.

### Fragments

In React, a component can only return a **single element**. If you try to return multiple elements without wrapping them, it will result in a **compilation error**.

For example, the following code will cause an error:

```tsx
function ListGroup() {
  return (
    <h1>List</h1>
    <ul className="list-group">
      <li className="list-group-item">Item 1</li>
      <li className="list-group-item">Item 2</li>
      <li className="list-group-item">Item 3</li>
    </ul>
  );
}
```

- React expects the component to return a single parent element. In this case, the code above tries to return two separate elements (`<h1>` and `<ul>`) without a wrapper, which is not allowed.

- The above code is equivalent to:

```tsx
return (
  React.createElement("h1", null, "List");
  React.createElement("ul", { className: "list-group" },
    React.createElement("li", { className: "list-group-item" }, "Item 1"),
    React.createElement("li", { className: "list-group-item" }, "Item 2"),
    React.createElement("li", { className: "list-group-item" }, "Item 3")
  );
)
```

- React requires one single returnable element from the component, which is why multiple elements like this won’t work.
- To solve this problem, there are different approaches:

1. **Wrapping with a** `<div>`:

- You can wrap multiple elements in a `div` to make it work. However, this creates an unnecessary extra node in the DOM.
- To quickly wrap elements, you can use **Ctrl + P** to open the command palette and search for the "wrap with abbreviation" feature. You can then select `div`.

```tsx
function ListGroup() {
  return (
    <div>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
      </ul>
    </div>
  );
}
```

2. **Using React Fragments**:

- A better approach is to use **Fragments**, which allow you to group multiple elements without introducing an extra DOM node
- To use Fragments, first, import it:
  `import { Fragment } from "react";`
- Then wrap the elements inside a `<Fragment>` tag:

```tsx
function ListGroup() {
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
      </ul>
    </Fragment>
  );
}
```

3. **Using Short Syntax for Fragments**:

- React also supports a short syntax for fragments, which uses empty angle brackets (`<>` and `</>`) to wrap elements without the need to import `Fragment`.

```tsx
function ListGroup() {
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
      </ul>
    </>
  );
}
```

- This approach is very convenient, as it avoids adding unnecessary imports and still allows you to group elements together without extra nodes in the DOM.

### Rendering Lists

- In React, rendering dynamic lists requires a different approach because JSX does not support `for` loops directly. Instead, we can use JavaScript’s array `map()` method to iterate over the list of items and render a list dynamically.
- For example, consider the following code:

```tsx
function ListGroup() {
  const items = ["NY", "SF"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
      </ul>
    </>
  );
}
```

- In JSX, we cannot use traditional loops like `for` directly within the markup. Instead, we need to use the `map()` method, which is part of JavaScript arrays, to iterate over each item and return a JSX element.
- The `map()` method takes a callback function as an argument, which is executed for each element in the array. This callback function receives the current item, which can then be rendered as a JSX element.

```tsx
function ListGroup() {
  const items = ["NY", "SF"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}
```

- Explain:

  - `map()`: The map() function is used to iterate over the `items` array. For each item, it returns an `<li>` element.
  - `{}` **(Curly Braces)**: In JSX, we must wrap JavaScript expressions inside curly braces. This is why we use `{items.map(...)}` to include the dynamic list inside the JSX markup.

- When rendering lists in React, you might encounter the following warning in the browser console:
  ` Warning: Each child in a list should have a unique "key" prop.`
- This warning appears because React needs a way to uniquely identify each list item. When items are added, removed, or reordered, React uses the `key` to track the items efficiently and update the DOM accordingly.
- To fix this, we should add a **unique** `key` prop to each list item:

```tsx
function ListGroup() {
  const items = ["NY", "SF"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
```

- React uses the key prop to efficiently track and update elements in the list.
- In real-world applications, when you fetch data from an API, each item usually has a unique id that can be used as the key.
- For now, we use the index as a key, but for more complex data, use a unique identifier like item.id.

### Conditional Rendering

- In React, sometimes we want to render different content based on certain conditions. Let's look at an example:

1. **Basic Conditional Rendering**:

```tsx
function ListGroup() {
  const items = ["NY", "SF"];

  if (items.length === 0) {
    return <p>No items found</p>;
  }

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
```

- In the code above, if `items` is empty, we return a message indicating no items were found. However, there’s an issue: the heading (`<h1>List</h1>`) is not being rendered if there are no items.
  Fixing the Issue

To fix this, we should include the heading even when the list is empty. However, having duplicate logic (the `if` statement) for rendering the heading and the content is not ideal. Here's a better approach:

```tsx
{...

  if (items.length === 0) {
    return (
      <>
        <h1>List</h1>
        <p>No items found</p>
      </>
    );
  }

...}
```

- While the above solution works, it's often better to **conditionally render** content directly inside JSX, as it keeps the code cleaner and more concise. In JSX, we can’t use standard if statements, but we can use **ternary operators** or **logical operators** inside curly braces (`{}`).

2. **Using the Ternary Operator**:

```tsx
function ListGroup() {
  const items = ["NY", "SF"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No items found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
```

- **Ternary Operator**: `{items.length === 0 ? <p>No items found</p> : null}` is a concise way to conditionally render content. If the condition `(items.length === 0)` is true, it renders the `<p>No items found</p>` element, otherwise it renders `null` (nothing).

- **Storing Conditional Content in a Variable**: If the conditional logic becomes too complicated, you can extract it into a variable or constant to keep your JSX cleaner
  `const message = items.length === 0 ? <p>No items found</p> : null;`

```tsx
function ListGroup() {
  const items = ["NY", "SF"];

  const message = items.length === 0 ? <p>No items found</p> : null;

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
```

4. Using Logical AND (`&&`) for Conditional Rendering

- Another common approach is to use the logical AND (`&&`) operator. This is particularly useful when you want to render something only if a condition is true:

```tsx
function ListGroup() {
  const items = ["NY", "SF"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
```

- `{items.length === 0 && <p>No items found</p>}` works because in JavaScript, if the condition before `&&` is `true`, it returns the second expression (`<p>No items found</p>`). If the condition is `false`, it returns `false` and nothing gets rendered.
- `true && <p>Something</p>` will render `<p>Something</p>`.
- `false && <p>Something</p>` will render nothing (i.e., `false`).

### Handling Events:

- In React, you can handle click events by using the onClick prop available on elements. For example:

```tsx
<li
  key={index}
  className="list-group-item"
  onClick={() => console.log("Clicked")}
>
  {item}
</li>
```

- If you want to log the specific item that was clicked, you can access it within the map method while creating the list. Here’s how:

```tsx
{
  items.map((item, index) => (
    <li
      key={index}
      className="list-group-item"
      onClick={() => console.log(item)}
    >
      {item}
    </li>
  ));
}
```

- **The** `map` **method in react**:

  - When using the `map` method in React, it executes a callback function for each element in the array. The callback function can have up to three arguments:

  1. **element**: The current item being processed in the array.
  2. **index**: The index of the current element.
  3. **array**: The entire array being processed.

```tsx
{
  items.map((item, index) => (
    <li
      key={index}
      className="list-group-item"
      onClick={() => console.log(item, index)}
    >
      {item}
    </li>
  ));
}
```

- You can log both the `item` and its `index`:
  ` onClick={() => console.log(item, index)}`
- Handling Events with Parameters: The `onClick` handler can also access the browser's event object. For example:
  ` onClick={(event) => console.log(event)}`
- When we log this event out we get a `SyntheticBaseEvent`, React uses a wrapper called `SyntheticBaseEvent` around the native browser event object. This ensures consistent behavior across different browsers. The synthetic event object has all the properties of the native event, but it also includes React-specific features.
- Moving Logic to a Separate Function: If the `onClick logic is complex, it's better to move it to a separate function for better readability and maintainability. For example:

```tsx
const handleClick = (event: React.MouseEvent) => {
  console.log(event);
};

// Pass the reference to the function
<li onClick={handleClick}>Click Me</li>;
```

- In TypeScript, the `event` object must be explicitly typed. If not, TypeScript may throw a compilation error, as it doesn’t know the type of the event. For example:
  ` import { MouseEvent } from "react";`
- When using the `handleClick` function in JSX, you pass it as a reference, not by invoking it
  `onClick={handleClick}`

### **Managing State**

- Suppose we want to highlight an item when it is clicked. To achieve this, we can use the `active` CSS class provided by Bootstrap.

- Initially, we might try to use a local variable like this:

```tsx
let selectedIndex = -1; // No item selected (-1), 0 for the first item, etc.

return (
  <>
    <h1>List</h1>
    <ul className="list-group">
      {items.length === 0 && <p>No item found</p>}
      {items.map((item, index) => (
        <li
          key={item}
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => {
            selectedIndex = index;
            console.log(selectedIndex); // Log the updated index
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  </>
);
```

- The above approach doesn’t work because `selectedIndex` is a local variable. React is unaware of its changes, so the component doesn’t re-render when selectedIndex is updated.
- => To let React know that the component's data (or state) might change over time, we need to use the `useState` hook.

```tsx
import { useState } from "react";

const [selectedIndex, setSelectedIndex] = useState(-1);
```

- **What is** `useState`?

  - `useState` is a React hook that allows us to manage state in a functional component.
  - It returns an array with two elements:
    - The current state value.
    - A function to update the state value.
  - By using the updater function, React is notified of changes in the state and will re-render the component to update the DOM.

- Here’s the updated version of the component using useState:

```tsx
import { useState } from "react";

function ListGroup({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(-1); // Initialize state

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)} // Update state
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
```

- Key points:

  - State in React:
    - State represents data that changes over time in a component.
    - When state changes, React re-renders the component to reflect the updated state in the DOM.
  - Multiple States:

        - Each component can have multiple states:

        ```tsx
        const [selectedIndex, setSelectedIndex] = useState(-1);

        const [name, setName] = useState("");

        ```

  - Component Isolation:

    - Each component has its own isolated state. For example, if there are two `ListGroup` components, each will manage its state independently.

  - State Update:

    - Use the updater function (`setSelectedIndex`) to update the state. React will automatically handle the re-rendering process.

### Passing Data via Props:

- **Why Use Props?**: Props allow us to make components reusable by passing data to them. For example, instead of creating separate components for lists of names or colors, we can use a single component and pass the data via props.
- **Defining Props in TypeScript**:

1. **Determining the Shape of Props:**

- Decide the structure of the input object for your component. For instance:

```tsx
{ items: [], heading: string }
```

2. **Defining the Props Shape with an Interface**:

- Use TypeScript's `interface` to define the structure:

```tsx
interface Props {
  items: string[];
  heading: string;
}
```

3. **Adding Props to the Component:**

- Pass the props as an parameter with type to the component function:

```tsx
function ListGroup(props: Props) {
  return (
    <>
      <h1>{props.heading}</h1>
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
```

5. **Using the Component in a Parent Component**:

- Define the Data in the Parent Component:
  `const items = ["New York", "Los Angeles", "Chicago"];`

- Use the ListGroup component and pass the data:

```tsx
function App() {
  return <ListGroup items={items} heading="Cities" />;
}
```

- If the required `props` (`items` or `heading`) are missing, TypeScript throws an error:
  `Type '{}' is missing the following properties from type 'Props': items, heading`

- Instead of using `props.<property>` repeatedly, destructure the props for cleaner code:

```tsx
function ListGroup({ items, heading }: Props) {
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
```

### Passing Function via Props

- In real-world applications, it's common for something to happen when a user interacts with a component, such as clicking an item. For instance, you may want to:
  - Redirect the user.
  - Filter data.
  - Perform other actions specific to your application's logic.
- However, these actions can vary between applications. To keep our components reusable, we should not hard-code the logic directly inside the component. Instead, we need a mechanism to notify the parent (or consumer) of the component when an event occurs, such as when an item is selected.

- **Example: Passing a Function via Props**

```tsx
function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];

  // Define an event handler for item selection.
  const handleSelectItem = (item: string) => {
    console.log("Selected Item:", item);
  };

  // Pass the function as a prop.
  return (
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
  );
}
```

- **Child Component** (`ListGroup`):

  1. **Defining the Props**: In TypeScript, use an `interface` to define the shape of the props object. Here, we add a property for the function that handles the event.

  ```tsx
  interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void; // Function that takes a string and returns void.
  }
  ```

  2. **Using the Props in the Component**: Pass the function via props and call it when needed (e.g., when an item is clicked).

  ```tsx
  function ListGroup({ items, heading, onSelectItem }: Props) {
    return (
      <>
        <h1>{heading}</h1>
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => onSelectItem(item)} // Call the function with the clicked item.
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }
  ```

  - **Why Use a Function Prop?**?
    - It keeps the logic for handling events (e.g., `onClick`) in the parent, making the child component reusable.
    - The parent component defines the behavior, such as logging the clicked item or performing custom logic.
  - **Naming Conventions**:

    - By convention, function props begin with `on` followed by the event name, e.g., `onSelectItem`.
    - Event handlers often begin with `handle`, e.g., `handleSelectItem`.

  - You can pass an inline function directly instead of defining it separately:

  ```tsx
  return (
    <ListGroup
      items={items}
      heading="Cities"
      onSelectItem={(item) => console.log("Clicked:", item)} // Inline function.
    />
  );
  ```

  ```tsx
  const logCity = (city: string) => console.log("City:", city);
  const logFruit = (fruit: string) => console.log("Fruit:", fruit);

  return (
    <>
      <ListGroup items={cities} heading="Cities" onSelectItem={logCity} />
      <ListGroup items={fruits} heading="Fruits" onSelectItem={logFruit} />
    </>
  );
  ```

  - **Reusability**: The `ListGroup` component can be used in multiple scenarios with different behaviors.
  - **Separation of Concerns**: The child component focuses only on rendering the list and notifying the parent when an event occurs. The parent handles the specific logic.
  - **Flexibility**:The parent defines what happens when an item is selected, making it easy to adapt to different application requirements.

### **State vs Props**

- React provides two key concepts for managing data in components: **Props** and **State**. Both determine how a component behaves and renders, but they serve different purposes.
- **Props (Properties):**:

  - **Definition:** Props are input arguments passed to a component by its parent.
  - **Purpose:** Used to pass data and behavior (functions) from a parent component to a child component.
  - **Characteristics:**
    - Similar to function arguments.
    - Props are **immutable**—while technically they can be changed, they **should not** be modified within the child component.
    - Follow the principles of **functional programming**.

  ```tsx
  function Welcome({ name }: { name: string }) {
    return <h1>Hello, {name}!</h1>;
  }

  function App() {
    return <Welcome name="John" />;
  }
  ```

  - `name` is passed as a **prop** to the `Welcome` component.
  - The `Welcome` component uses it to display a personalized greeting.

- **State**:

  - **Definition**: State is internal data managed by a component, which can change over time.
  - **Purpose**: Used to manage data that is specific to a component and can be updated by user interactions or other events.
  - **Characteristics**: - Similar to local variables but tied to React’s lifecycle. - State is **mutable**—you can update it using `setState` or hooks like `useState`. - React re-renders the component whenever the state changes, ensuring the UI stays in sync.

  ```tsx
  import { useState } from "react";

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  ```

  - `count` is a piece of state managed by the `Counter` component.
  - Clicking the button updates the state and triggers a re-render of the component.

- **What They Have in Common:**

  - Both `props` and `state` are used to control how a component behaves and renders.
  - Changes in either `props` or `state` will cause React to re-render the component and update the DOM as needed.

- **Best Practices**:

  - Use **props** for data that does not change and needs to be passed down from a parent component.
  - Use **state** for data that is local to the component and needs to be updated dynamically.
  - Avoid directly mutating `props` or `state`. Instead:
    - For `props`, pass new values from the parent.
    - For `state`, use React’s provided methods (`setState` or hooks).

### **Passing Children:**

- In React, components can accept **children** as a special prop, allowing you to pass dynamic or nested content. This is especially useful when creating reusable components.
- Let’s build an `Alert` component that accepts and displays children.

  1. Use the ES7+ extension (optional) to scaffold the component quickly.

  - `rafce` → Short for React Arrow Function Component Export.
    example create arlet.tsx

  2. Example: `Alert.tsx`

  ```tsx
  import React from "react";

  const Alert = () => {
    return <div>Alert</div>;
  };

  export default Alert;
  ```

  3. Style the `Alert` Component

  - To style the component dynamically, use **Bootstrap classes** (or any styling method).

  ```tsx
  Update the `Alert` component like this:
  import React from "react";

  const Alert = () => {
    return <div className="alert alert-primary">Alert</div>;
  };

  export default Alert;
  ```

  4. Add Props for Dynamic Content

  - To make the `Aler`t component dynamic, update it to accept **props**. For example:

    - Define an interface for the props:

    ```tsx
    interface Props {
      text: string;
    }
    ```

  - Update the Alert component:

  ```tsx
  import React from "react";

  interface Props {
    text: string;
  }

  const Alert = ({ text }: Props) => {
    return <div className="alert alert-primary">{text}</div>;
  };

  export default Alert;
  ```

  - Use it in the `App` component:

  ```tsx
  import Alert from "./Alert";

  function App() {
    return <Alert text="Hello World!" />;
  }

  export default App;
  ```

  5. Pass Children Instead of Props:

  - While the above implementation works, it becomes inconvenient for long or complex content. A better approach is to use the special `children` prop.

  ```tsx
  import React, { ReactNode } from "react";

  interface Props {
    children: ReactNode;
  }

  const Alert = ({ children }: Props) => {
    return <div className="alert alert-primary">{children}</div>;
  };

  export default Alert;
  ```

  - Use the `Alert` component in the `App` component with nested content:

  ```tsx
  import Alert from "./Alert";

  function App() {
    return (
      <div>
        <Alert>Hello World!</Alert>
        <Alert>
          <strong>Warning:</strong> Please proceed with caution!
        </Alert>
      </div>
    );
  }

  export default App;
  ```

  - **Why Use** `children`?

    - **Flexibility**: You can pass complex HTML or other React components.
    - **Reusability**: The component becomes more generic and reusable for different content.

  - Common Types for `children`:

    - Use `ReactNode` from the `react` package to allow various types of children, including:

      - Strings
      - JSX elements
      - Arrays of JSX elements
      - Null or undefined
      - Functions
      - Etc.

    ```tsx
    interface Props {
      children: ReactNode;
    }
    ```

  - The `children` prop is a special built-in prop that lets you pass nested content to components.
  - Use `ReactNode` to define the type of `children` in TypeScript.
  - This pattern improves the flexibility and reusability of your components.
  - By using `children`, you can create dynamic and flexible React components effortlessly.

### **Inspecting components with React Dev Tools**:

- React Dev Tools is an essential extension for inspecting and analyzing React applications. It helps developers understand the structure and behavior of their app.
- React Dev Tools is available for popular browsers like **Google Chrome** and **Microsoft Edge**.
- **Installation**:

  1. Open your browser's extension/add-on store.
  2. Search for **React Developer Tools**.
  3. Install the extension.

- **Key features**:

  1. **Component Tab**:

  - View the hierarchy of the component tree.
  - Analyze how React renders the actual DOM.

  2. **Props and State**:

  - Inspect the props and state of each component in detail.

  3. **Search Functionality**:

  - Quickly locate a specific component in large applications with a search bar.

  4. **Select and Inspect**:

  - Select a component and inspect its matching DOM element.
  - Click on the `<>` (source code) icon to navigate to the source code of the selected component.

- Simplifies debugging by providing a clear visual hierarchy of components.
- Helps identify potential issues with props or state.
- Saves time in large applications with a search and inspect workflow.

### **Exercise - Building a Button Component**:

- Tips:
- You can make the button reusable by dynamically assigning its class names using Bootstrap styles. For example:

```tsx
className={"btn btn-" + color}
```

- In your `App` component, pass the color prop such as "`primary`", "`secondary`", etc.
- To avoid specifying certain properties every time, assign default values to your props.

```tsx
const Button: React.FC<Props> = ({ children, onClick, color = "primary" }) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

- Use the `?` in the interface to make a property optional:

```tsx
color?: string;
```

- This ensures that if the property is not provided, the component still works without errors.
- To prevent bugs caused by invalid color values, restrict the `color` prop to specific values using a union type:
  `color?: "primary" | "secondary" | "danger";`

- For better readability and maintainability, always list properties in **alphabetical order** within the interface.
