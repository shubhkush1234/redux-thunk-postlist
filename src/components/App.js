import React, { Component } from 'react';
import PostList from './PostList';
import { connect } from 'react-redux';

const App = () => {
        return (
            <div className="ui container">
                Hi
                <PostList/>
            </div>
        );
};

export default connect()(App);