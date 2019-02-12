# React Demo

Demo Code with Examples for educational purpose

## Notes

Benefits of using React:
- Speed (virtual DOM)

Unspecific:
- A `import React from "react"` statement is required for *JSX* to be used
- `react-script` is used to build and run the application
  - Expects file `public/index.html` and `src/index.js`
  - `%PUBLIC_URL%` is a placeholder for the hosting URL
- JSX elements may be simple JS functions
- React styling expects `className` attributes instead of `class` for *React elements* (not components)
- If an attibute expects a JS object, remeber to embed it in curly braces, since those are required to state JS code
- Most [falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) like `false`, `null` or `undefined` won't be rendered and thus can be used for conditional rendering
- Dynamically listing React elements requires a `key` property
- Props are immutable, thus a component with local state needs to be a class based
- If not using arrow functions in event handler, remeber to [bind the function to a class](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- Separation of concerns into [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) might result into better code if complexity is high
- Using React Hooks relies on the order of the function calls

Resources:
- [Create React App - Set up a modern web app by running one command](https://facebook.github.io/create-react-app/)
- [Learn React.js - Full Course for Beginners - Tutorial](https://www.youtube.com/watch?v=DLX62G4lc44)
- [All React Conditional Rendering Techniques](https://www.robinwieruch.de/conditional-rendering-react/)
- [Four ways to style react components](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822)
- [Handling Events](https://reactjs.org/docs/handling-events.html)
- [SyntheticEvent - Supported Events ](https://reactjs.org/docs/events.html#supported-events)
- [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
- [React v16.3.0: New lifecycles and context API](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

## Routing

## State Management

### Redux

Resources:
- [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
- [Redux Crash Course With React](https://www.youtube.com/watch?v=93p3LxR9xfM)

## Dependency Management

Resources:
- [No Need for Dependency Injection in React Components](https://medium.com/@maxheiber/no-need-for-dependency-injection-in-react-components-641182760aaa)
- [Render Props](https://reactjs.org/docs/render-props.html)
- [Mixins Considered Harmful](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)

## Progressive Web-Apps

Resources:
- [Web workers vs Service workers vs Worklets](https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/)
- [Introduction to Service Workers](https://www.youtube.com/watch?v=jVfXiv03y5c)

## Coding Conventions

- Components start with uppercase
- Suffix `Container` for a [Container Component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- Suffix `Component` for a [Presentational Component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## Tooling

- [Firefix Add-ons - Redux DevTools](https://addons.mozilla.org/de/firefox/addon/reduxdevtools/)
- [chrome web store - Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=de)