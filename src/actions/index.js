import jsonPlaceholder from "../services/jsonPlaceholder";

//jsonPlaceholder is the axios instance which we created in services.

export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};

