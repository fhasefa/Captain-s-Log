import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>{props.result.title} </p> 
            <p><strong>{props.result.shipIsBroken ? 'is broken' : 'is NOT broken'}</strong></p>

            <a href="/logs">Back</a>

            <form action={`/logs/${props.result._id}?_method=DELETE`} method="POST">
                <button>Delete</button>
            </form>
            <a href={`/logs/${props.result._id}/edit`}>Edit</a>
        </div>
    )
}

export default Show;