import React from 'react'

// res.send('<h1></h1>')

function Edit(props) {
    return ( 
        <div>
            <h1>Edit Log</h1>
            <form action={`/logs/${props.result._id}?_method=PUT`} method="POST">
                <label htmlFor="ttl">Title:</label><br />
                <input type="text" id="ttl" name="title" defaultValue={props.result.title} /><br /><br />

                <label htmlFor="ent">Entry:</label><br />
                <textarea type="textarea" id="ent" name="entry" defaultValue={props.result.entry} /><br /><br />

                <label htmlFor="sib">ShipIsBroken:</label>
                <input type="checkbox" id="sib" name="shipIsBroken" defaultChecked={props.result.shipIsBroken}/><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default Edit;