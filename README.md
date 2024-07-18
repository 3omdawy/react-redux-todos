# React Redux Todos Demo

Demo for integration of React with Redux toolkit and Saga middleware

## App Functionality

Quite simple todo list populated already with 3 tasks ... when you add a task, you get a gift task from Saga

## About Redux

* Redux is a standalone JS state management library (central place to store global variables across the app)
* It can be used without React, but it integrates well with React
> React has other solutions like useState (but it requires props drilling to lower components) and useContext which is a good solution for simple states
* Redux models the application state as a single JS object
* Redux syntax is quite similar to useReducer in React. It relies on actions (JS objects with `type` attribute) and reducer functions (pure functions that return a new state based on the passed action)
> Note: Redux dispatch is syncronous
* Simple steps to use Redux from any JS context:
1. Install and import Redux
2. Create a store using `Redux.createStore(reducer)` method
** Store is where the state lives
** A store should be created using a reducer
** A reducer is a function that determines how the state looks like, and how it changes: function reducer (state = initialState, action)
** Have an initial state to use as the default state for the reducer function, return state as the default case
3. `store.getState()` returns the current state
4. store.dispatch(action)
** An action is an object with a (type) key and string value (in uppercase 🙂)
** Use the spread operator or create a new state to avoid being impure
** Create actions using functions that return the action object
Reference: sections 32 and 33 of (The Advanced Web Developer Bootcamp) on Udemy
