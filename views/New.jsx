import React from 'react'

function New() {
    return ( 
        <div>
            <h1>New Log</h1>
            <form action="/logs" method="POST">
                <label htmlFor="ttl">Title:</label><br />
                <input type="text" id="ttl" name="title" /><br /><br />

                <label htmlFor="ent">Entry:</label><br />
                <textarea type="textarea" id="ent" name="entry" /><br /><br />

                <label htmlFor="sib">ShipIsBroken:</label>
                <input type="checkbox" id="sib" name="shipIsBroken" /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default New;