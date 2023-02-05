# lab 2 & 3 in Webprogramming at LTH 2023

Authours: Lars Breum Hansen, Elham Tayebi

# Reflection Questions for lab 2

## Q1

As an alternative to the function component above you can
use a class component: class ComposeSalad extends react.Component {}. Is there a
difference between class components and function components concerning features (use
cases where only one of them can be used)?

Answer: Function components have no state and simply displays some UI. Class components are (simple) classes that can implement methods and logic in different ways.
https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/

Class components have lifecycle methods which can be used to control what happens during specific times of the in the creation/updating/desctruction of components.
Hooks can be used for most things now.

function components are easier to read and implement in many cases, and can use props directly.
Ingen stor skillnad utan bara syntaxen.
## Q2

The render function must be a pure function of props and the
component state, the values returned by useState(). What happens if the output of the
render function is depending on other data that changes over time?

Answer: We can get "kapplöp" if are dependent on other variables. We also want to update the DOM and the UI, which react does when the state changes.

## Q3

In the code above, the foundations array is computed every time
the component is rendered. The inventory changes very infrequent so this is inefficient.
Can you cache foundations so it is only computed when props.inventory changes?

Answer: Yes. We can use Memoization to cache data. But then we will also need to know when to update the cache. useMemo
https://betterprogramming.pub/exploring-caching-techniques-in-react-d30bbb78d54d

## Q4 What triggers react to call the render function and update the DOM?

Answer: A change in the state and props. 

## Q5 When the user change the html form state (DOM), does this change the state of your component?

Answer: Yes. Only when we submit the form, and change the React state.

## Q6 For a class based component, what is the value of "this" in the event handling call-back functions?

Answer: "this" refers to the global object. The turtle at bottom.

## Q7 How is the prototype chain affected when copying an object with copy = {...sourceObject}?

Answer: the {...sourceObject} does a shallow copy and enum. That means it will create a new prototype chain.

# Reflection questions for lab 3

## How do you replace the application icon, favicon.ico?

Answer:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
