import React from 'react'

export default function Table({users, deleteUser}) {
    return (
        <table className='table table-striped'>
            <caption>My Table</caption>
            <thead>
            <tr>
                <th>Full Name</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Delete User</th>
            </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}> 
                        <td>{user.name} </td>
                        <td>{user.jobTitle}</td>
                        <td>{user.companyName}</td>
                        <td><button onClick={() => deleteUser(user.id)} className='btn'>🗑</button></td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}