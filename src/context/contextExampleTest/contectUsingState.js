import {createContext, useState} from "react";

const BlogContext = createContext()

export const BlogProvider = ({children}) => {
    const [blogPosts,setBlogPosts] = useState([])
    const addBlogPosts = () => {
        setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}])
    }
    return (
        <BlogContext.Provider value={{data : blogPosts, addBlogPosts}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext;