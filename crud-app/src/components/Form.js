import React from 'react'

export default function Form({
    newUser,
    postUser,
    handleName,
    handleJobTitle,
    handleCompanyName
    }) {
    return (
        <form className='myForm' onSubmit={(e) => postUser(e)}>
            <h3>Post New User</h3>
            <label>Name</label>
            <input value={newUser.name} onChange={(e) => handleName(e.target.value)}></input>
            <label>Job Title</label>
            <input value={newUser.jobTitle} onChange={(e) => handleJobTitle(e.target.value)}></input>
            <label>Company</label>
            <input value={newUser.companyName} onChange={(e) => handleCompanyName(e.target.value)}></input><br/>
            <button className='btn btn-primary'>Submit</button>
        </form>
    )
}