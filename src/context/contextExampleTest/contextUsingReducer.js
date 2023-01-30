import {createContext, useReducer} from "react";

const BlogContext = createContext()

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, {title: `Blog Post #${state.length + 1}`}]
        case 'delete_blogpost':
            state.pop()
            return [...state]
        default:
            return state;
    }
}

export const BlogProvider = ({children}) => {
    const [blogPosts, dispatchBlog] = useReducer(blogReducer, [])

    const addBlogPosts = () => {
        dispatchBlog({ type: 'add_blogpost'})
    }
    const deleteBlogPosts = () => {
        dispatchBlog({ type: 'delete_blogpost'})
    }

    return (
        <BlogContext.Provider value={{data : blogPosts, addBlogPosts, deleteBlogPosts}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext;