const initState = {
    posts: [
        {id: '1', title: 'Squirtle laid an egg', body:'Lorem ddfgfdgfdg'},
        {id: '2', title: 'dfsdf laid an egg', body:'Lorem ddfgfdgfdg'},
        {id: '3', title: 'Squgfbvcbirtle laid an egg', body:'Lorem ddfgfdgfdg'},
        {id: '4', title: 'vcbbnbnbn laid an egg', body:'Lorem ddfgfdgfdg'}
    ]
}
const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => post.id !== action.id);
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;