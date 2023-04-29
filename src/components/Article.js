import React from "react";


function Article(props){
    let individualArticle= props.post.map((article)=>{
        return(
            <article>
                <h3>{article.title}</h3>
                <small>{article.date || "january 1, 1970"}</small>
                <p>{article.preview}</p>
            </article>
        )
    })
    return [individualArticle]

}
export default Article;