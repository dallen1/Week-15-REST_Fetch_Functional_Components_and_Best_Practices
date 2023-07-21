import { Button } from 'bootstrap'
import React, {useState} from 'react'

export default function Table({users, deleteUser, updateUser, handleUpdatedName, clearName, updatedName}) {

    const [show,setShow] = useState({});

    const toggleShow = (index) => {
        setShow({
            ...show,
            [index]: !show[index]
        })
    }
    const [visible, setVisible] = useState(false);
    return (
        <table className='table table-striped'>
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
                        {show[index]?<> 
                        <input value={updatedName} onChange={(e) => {handleUpdatedName(e.target.value)}} placeholder='Enter New Name'></input>
                        <button onClick={() => {updateUser(user);clearName()}} className='btn'>✅</button>
                        </>:null}
                        
                        <button onClick={() => {toggleShow(index);;clearName()}} className='btn'>✎</button>
                        
                        </td>
                    </tr>
                    
                ))}
            </tbody>

        </table>
    )
}