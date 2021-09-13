import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component{
    render(){
        return(
            <div>Postlist comp</div>
        )
    };
};

export default connect(null, {fetchPosts: fetchPosts})(PostList);