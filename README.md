# General Data Loading with redux: #

1.  Component gets rendered on the screen.
2.  Component's "componentDidMount()" lifecycle method gets called.
3.  We call "action creator" from "componentDidMount()".

    - Components are generally responsible for fetching data they need by calling an action creator.

4.  "Action creator" runs code to make an API request.
5.  API responds with data.
6.  Action creator returns an "action" with the fetched data on the payload property.

    - Action creators are responsible for making API requests. This is where redux-thunk comes into play.

7.  Some reducer sees the action, returns the data off the payload.
8.  Because we generated some new state object, redux/react-redux cause our React App to be rendered.

    - We get fetched data into a component by generating new state in our redux store, then getting that into our component through mapStateToProps().


----------------------------------------------------------------------------------

Steps:

1. Create a react app using create-react-app .
2. Do the redux setup (store, reducer) and add semantic UI css cdn to index.html .
3. Add "connect" to "PostList" component.
4. Create a "action creator" in actions/index.js .
5. Create axios instance in the services or apis folder and give base url.
6. Call that service on the action creator using middleware and pass API data as payload. 

----------------------------------------------------------------------------------

# Normal rules for "Action Creators" : #

1. Action Creators must return action object.
2. Actions must be a plain object and have a type property.
3. Actions can optionally have a 'payload'.

----------------------------------------------------------------------------------

# Rules with "Redux Thunk" : #

1. Action creators can return action objects.
 OR 
2. Action creators can return functions!
3. If an action object gets returned, it must have a type.
4. If an action object gets returned, it can optionally have a payload.

----------------------------------------------------------------------------------

# Redux Cycle #

1. To change state of our app, we call an "ACTION CREATOR".
2. Action creator produces an "ACTION".
3. Action gets fed to "DISPATCH".
4. Dispatch forwards action to "MIDDLEWARE".
5. Middleware sends action to "REDUCERS".
6. Reducers creates new "STATE".

----------------------------------------------------------------------------------

# Middleware in Redux #

1. Functions thats gets called with every action we dispatch.
2. Has the ability to STOP, MODIFY, or otherwise mess around with actions.
3. Tons of open source middleware exists.
4. Most popular use of middleware is for dealing with async actions.
5. We are going to use a middleware called "redux-thunk" to solve our async issues.
