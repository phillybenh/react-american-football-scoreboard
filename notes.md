**React Components and Component State**

- _React JS_

  - Is a user interface component library
  - [https://reactjs.org/](https://reactjs.org/)
  - [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)
  * [Lecture Notes](https://www.notion.so/React-Components-and-Component-State-88b2d2a3237548f9abe5b73f3b9d9b9f)
  - _NOT_ a framework
  - "It is really important to understand that React is just a single paradigm, or one of many ways to write large applications."
  - React uses a `virtual DOM` to interact with the DOM adn tell the DOM what elements and state data to render
  - Uses the JSX language - uses HTML like format and allows inline JS

- Components must be capitalized and return something
- Every time state updates, react re-renders the component
- Two pillars of React's design philosophy:

  - _the separation of concerns_
    - each piece of code should do one and only one thing
  - _declarative programing_
    - instead of telling computer how we want something done (step by step), tell computer _what_ we want it to do

- Example React Component:

  ```
        import React, { useState } from "react";
        import { render } from "react-dom";
        import "./styles.css";

        const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
        const yellow =
        "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

        function App() {
        const [lightOn, setLightOn] = useState(true);

        return (
            <div onClick={() => setLightOn(!lightOn)} className="App">
            {lightOn === false ? <img src={white} /> : <img src={yellow} />}
            </div>
        );
        }

        const rootElement = document.getElementById("root");
        render(<App />, rootElement);

  ```

-
