import React from "react";
import Article from "./Article";
import blogData from "../data/blog";
console.log(blogData);

function ArticleList() {
     return(
        <main>
            <Article  post={blogData.posts}/>
        </main>
     )

}
export default ArticleList;