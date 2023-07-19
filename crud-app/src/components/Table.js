import { Button } from 'bootstrap'
import React from 'react'

export default function Table({users, deleteUser, updateUser, handleUpdatedName, updatedName}) {
    return (
        <table className='table table-striped'>
            <caption>My Table</caption>
            <thead>
            <tr>
                <th>Full Name</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Delete User</th>
                <th>Update User Name</th>
            </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}> 
                        <td>{user.name} </td>
                        <td>{user.jobTitle}</td>
                        <td>{user.companyName}</td>
                        <td><button onClick={() => deleteUser(user.id)} className='btn'>🗑</button></td>
                        <td>
                        <input  value={updatedName} onInput={(e) => handleUpdatedName(e.target.value)} placeholder='Enter New Name'></input>
                        <button onClick={(e) => updateUser(user)} className='btn'>✎</button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}