# Dev Stack Builder

Dev Stack Builder is a simple web application where users can explore different web development technologies and build their own technology stack. Users can add technologies to their stack, remove individual items, or clear the entire stack.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## Key Features

- **Explore Technologies:** Browse different web development technologies with their names, icons, descriptions, and other details.
- **Build Your Stack:** Add your favorite technologies to create a personal development stack.
- **Manage Your Stack:** Remove individual technologies or clear the entire stack.
- **Duplicate Prevention:** A technology cannot be added more than once.
- **Toast Notifications:** Get notifications when adding or removing technologies.

## React Questions & Answers

### 1. What is JSX in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. It makes React components easier to read and understand. React uses JSX to describe what should appear on the screen.

### 2. What is the difference between Props and State?

Props and State are both used to manage data in React, but they work differently.

Props are used to pass data from a parent component to a child component. A child component cannot directly change the props it receives.

State is used to store data inside a component. When the state changes, React updates the UI automatically.

### 3. What is the useState hook in React?

`useState` is a React Hook that allows us to store and update data inside a functional component.

It returns two things: the current state value and a function to update that value.

For example, we can use `useState` to manage a counter, form input, or a selected technology list.

### 4. What is the purpose of useEffect in React?

`useEffect` is used to handle side effects in React components.

For example, we can use it to fetch data from an API, set up a timer, or work with browser events.

It can also control when an effect runs using its dependency array.

### 5. Why do we need keys when using map() in React?

When we use `map()` to display a list of elements, React needs a unique key for each item.

Keys help React identify which items have changed, been added, or removed. This helps React update the UI more efficiently.

Usually, we use a unique ID as the key.

### 6. What is the purpose of conditional rendering in React?

Conditional rendering means showing different content based on a condition.

For example, we can show a loading message while data is being fetched, an error message if something goes wrong, or the actual content when the data is ready.

We can use conditions, ternary operators, or logical AND (`&&`) for conditional rendering.

### 7. How can we pass data from a parent component to a child component?

We can pass data from a parent component to a child component using props.

If the child component needs to send information back or trigger an action in the parent, the parent can pass a function as a prop. The child can then call that function.

This allows parent and child components to communicate with each other.