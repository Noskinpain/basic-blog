import { useContext } from "react";
import BlogContext from "../context/blog";

function useBlog(){
    return useContext(BlogContext)
}

export default useBlog