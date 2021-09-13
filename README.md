General Data Loading with redux:

1.  Component gets rendered on the screen.
2.  Component's "componentDidMount()" lifecycle method gets called.
3.  We call "action creator" from "componentDidMount()".

    Components are generally responsible for fetching data they need by calling an action creator.

4.  "Action creator" runs code to make an API request.
5.  API responds with data.
6.  Action creator returns an "action" with the fetched data on the payload property.

    Action creators are responsible for making API requests. This is where redux-thunk comes into play.

7.  Some reducer sees the action, returns the data off the payload.
8.  Because we generated some new state object, redux/react-redux cause our React App to be rendered.

    We get fetched data into a component by generating new state in our redux store, then getting that into our component through mapStateToProps().


----------------------------------------------------------------------------------



