import createDataContext from "./createDataContext";
import jsonServer from "../api/json-server";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogpost':
            return action.payload
        // case 'add_blogpost':
        //     return [...state, {id: Math.floor(Math.random() * 999), title: action.payload.title, content: action.payload.content}]
        case 'delete_blogpost':
            return (
                state.filter((blogPost) => blogPost.id !== action.payload)
                )
        case 'edit_blogpost':
            return state.map( blogPost => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        default:
            return state;
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        dispatch({ type: 'get_blogpost', payload: response.data})
    }
}

const addBlogPosts = (dispatch) => {
    return async (title, content, navigate) => {
        await jsonServer.post('/blogposts', {title, content})
        // dispatch({ type: 'add_blogpost', payload: {title, content}})
        if (navigate) {
            navigate()
        }
    }
}
const deleteBlogPosts = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogpost', payload: id})
    }}

const editBlogPosts = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`,{title, content})
        dispatch({ type: 'edit_blogpost', payload: {id, title, content}})
        callback()
    }}

export const {Context, Provider} = createDataContext(blogReducer, {getBlogPosts, addBlogPosts, deleteBlogPosts, editBlogPosts}, [])