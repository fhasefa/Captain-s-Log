import React from "react";

function Index(props) {
    return (
        <div>
            <h1>Captain's Log Index</h1>
            <ul>
                {props.result.map((log, index) => 
                    <li key={index}>
                        <a href={`/logs/${log._id}`}><strong>{log.title}</strong></a>
                    </li>
                )}
            </ul>
            <a href="/logs/new/">Add...</a>
        </div>
    )
}

export default Index