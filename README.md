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
    * Store is where the state lives
    * A store should be created using a reducer
    * A reducer is a function that determines how the state looks like, and how it changes: function reducer (state = initialState, action)
    * Have an initial state to use as the default state for the reducer function, return state as the default case
3. `store.getState()` returns the current state
4. store.dispatch(action)
    * An action is an object with a (type) key and string value (in uppercase 🙂)
    * Use the spread operator or create a new state to avoid being impure
    * Create actions using functions that return the action object

Reference: sections 32 and 33 of (The Advanced Web Developer Bootcamp) on Udemy

## React-Redux Integration

* Integration is simplified using `reduxjs/toolkit` in addition to `react-redux`
* Steps:
    1. Create the reducer (slice) using the method `createSlice` which takes these parameters:
        * name: string
        * initialState: object
        * Reducers: object (in which each reducer is a reducer function)
    2. In index.js:
        * Call `configureStore` with these parameters:
            * reducer: object with key = name we choose and value = exported slice
            * middleware: function to generate middleware
        * React-Redux: Wrap the App in `<Provider store={store}>`
    3. Link to React using: `const todos = useSelector((state) => state.todos);` // todos is the name we choose in configureStore => will return an object like the initialState
    4. Call the dispatcher:
        * `const dispatch = useDispatch();`
        * `dispatch(removeTodo({ id }))` // where removeTodo is one of the reducer functions in the Redux slice

Reference: https://medium.com/@Has_San/difference-between-redux-and-redux-toolkit-7e1e5431546d

## Saga Middleware

* Saga is a **Redux side effect manager** (This includes making HTTP requests to external services, accessing browser storage, and executing I/O operations.)
* It is more complex and configuurable than Redux Thunk
* Sagas can be used to handle more complex scenarios, such as race conditions, retries, and cancellation. Redux Saga uses generator functions to define sagas, which allows for more complex logic to be expressed in a more readable and intuitive way. However, it can be more difficult to learn and use effectively compared to Redux Thunk.
* Sagas are based on the concept of **generator functions**:
    * In JavaScript, a generator function is a special type of function that can be paused and resumed during execution. When a generator function is called, it returns an iterator object, which can be used to control the execution of the function.
    * Generator functions are defined using the function* syntax, which is distinct from regular function syntax. Within a generator function, the yield keyword is used to pause execution and return a value to the caller. When the generator function is resumed, it continues executing from where it left off.
* Integration steps:
    1. npm install redux-saga
    2. Add Saga generators (function* x) inside sagas.js to do the needed actions using yield between each action to make it async and interruptible (the `yield` keyword is used to pause execution and return a value to the caller). To update Redux: use `put` function
    3. Add and export Saga watchers using `takeLatest` to link with Redux actions
    4. Index.js:
        * createSagaMiddleware
        * Use in configureStore
        * Call `sagaMiddleware.run();`

Main Reference: https://najm-eddine-zaga.medium.com/react-redux-toolkit-with-redux-saga-a1439075743d