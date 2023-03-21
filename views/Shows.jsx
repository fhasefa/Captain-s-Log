import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Log View</h1>
            <h3>{props.result.title} </h3> <br />
            <p>{props.result.entry}</p>
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