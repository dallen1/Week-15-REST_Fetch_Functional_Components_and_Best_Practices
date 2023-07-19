import './App.css';
import Table from './components/Table'
import {useState, useEffect} from 'react'
import Form from './components/Form'
import "../node_modules/bootstrap/dist/css/bootstrap.css"


function App() {

  const MOCK_API_URL = 'https://64b6e2aedf0839c97e163e47.mockapi.io/user'
  const [users, setUsers] = useState([{
    name: '',
    jobTitle: '',
    companyName: ''
  },
])
const [newUser, setNewUser] = useState([{
  name: '',
  jobTitle: '',
  companyName: ''
},
])

const [updatedName, setUpdatedName] = useState('')

function handleUpdatedName (updatedNameValue) {
  setUpdatedName(updatedNameValue)
  
}

const clearName = () => {
  setUpdatedName('');
  console.log('name cleared')
}

function handleName (nameValue) {
  setNewUser({
    ...newUser,
    name: nameValue,
  })
}

function handleJobTitle (jobValue) {
  setNewUser({
    ...newUser,
    jobTitle: jobValue,
    })

}

function handleCompanyName (companyNameValue) {
  setNewUser({
    ...newUser,
    companyName: companyNameValue
  })
}

useEffect(()=> {
  fetch(MOCK_API_URL)
  .then((data) => data.json())
  .then((data => setUsers(data)))
}, [])


const getUsers = () => {
  console.log('doing getUsers funtion')

  fetch(MOCK_API_URL)
    .then((data) => data.json())
    .then((data => setUsers(data)))
    .then(

    clearName())
}

const postUser = (e) => {
  e.preventDefault();
  console.log("doing post user")

  fetch(MOCK_API_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newUser)
  }).then(() => getUsers())

  setNewUser({
    name: '',
    jobTitle: '',
    companyName: ''
  })
}

const deleteUser = (id) => {
  console.log('deleting user')

  fetch(`${MOCK_API_URL}/${id}`, {
    method: 'DELETE',
  }).then(() => getUsers())
}

const updateUser = (user) => {
  console.log('updating user name')
  let updatedUser = user
  updatedUser.name = updatedName
  fetch(`${MOCK_API_URL}/${user.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updatedUser)
  }).then(() => getUsers())

  
}


return (
  <div className="App">
    <Form 
      newUser={newUser}
      postUser={postUser}
      handleName={handleName} 
      handleJobTitle={handleJobTitle}
      handleCompanyName={handleCompanyName}
    />
    <Table 
      updatedName={updatedName}
      deleteUser={deleteUser}
      users={users}
      updateUser={updateUser}
      handleUpdatedName={handleUpdatedName}
    />
  </div>
);
}

export default App;
