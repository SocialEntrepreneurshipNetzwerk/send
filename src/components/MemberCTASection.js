import React from "react";

export default ({data}) => (
    <section>
        <h4>{data.title}</h4>
        {data.content.blurbs.map(item=>(
            <p>{item}</p>
        ))}
    </section> 
);
