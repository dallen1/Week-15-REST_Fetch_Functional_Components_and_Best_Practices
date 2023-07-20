import React from 'react'

export default function Form({
    postUser,
    handleName,
    handleJobTitle,
    handleCompanyName
    }) {
    return (
        <form className='myForm' onSubmit={(e) => postUser(e)}>
            <h3>Post New User</h3>
            <label>Name</label>
            <input  onChange={(e) => handleName(e.target.value)} required></input>
            <label>Job Title</label>
            <input onChange={(e) => handleJobTitle(e.target.value)} required></input>
            <label>Company</label>
            <input onChange={(e) => handleCompanyName(e.target.value)} required></input><br/>
            <button className='btn btn-primary'>Submit</button>
        </form>
    )
}