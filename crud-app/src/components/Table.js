import React from 'react'

export default function Table({users}) {
    return (
        <table>
            <caption>My Table</caption>
            <thead>
            <tr>
                <th>Full Name</th>
                <th>Job Title</th>
                <th>Company</th>
            </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}> 
                        <td>{user.name} </td>
                        <td>{user.jobTitle}</td>
                        <td>{user.companyName}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}