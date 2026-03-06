### What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript used in React that lets developers write HTML-like code inside JavaScript. JSX is used to write markup and logic in the same file. JSX makes writing React components much easier and cleaner.

### What is the difference between State and Props?

State refers to the data managed inside a component, whereas Props refer to the data passed to a component. State is mutable, whereas Props are immutable. State is controlled by the component itself, whereas Props are controlled by the parent component. State is used to manage dynamic data, whereas Props are used to configure the component.

### What is the useState hook, and how does it work?

`useState` is a React Hook that allows functional components to manage state.

```jsx
// syntax
const [state, setState] = useState(initialState);

// example
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
```

`useState(0)` initializes state and returns an array (current state value, function to update state). Calling `setCount()` updates state and triggers re-render. Each re-render preserves the updated state value.

### How can you share state between components in React?

State can be shared between components by moving it to the closest common parent component. This is called "lifting state up" which means that the parent holds the state and passes it down as props.

Alternatively, React Context can be used to avoid prop drilling while sharing state. In large apps, state management libraries, such as Redux, are used to manage shared state across many components.

### How is event handling done in React?

In React, events are handled using camelCase (`onClick`, `onChange`, `onSubmit`) event handlers directly on JSX elements. Function reference (`onClick={handleClick}`) is passed, not string (`onclick="handleClick()"`). The handler function is wrapped in arrow function (`onClick={() => handleClick(args)}`) in order to pass arguments.
