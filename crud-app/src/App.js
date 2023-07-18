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
}

const postUser = (e) => {
  e.preventDefault();
  console.log("doing post user")

  fetch(MOCK_API_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newUser)
  }).then(() => getUsers())

}

//const deleteUsers = () => {}

//const updateUsers = () => {}


return (
  <div className="App">
    <Form 
      postUser={postUser}
      handleName={handleName} 
      handleJobTitle={handleJobTitle}
      handleCompanyName={handleCompanyName}/>
    <Table users={users}/>
  </div>
);
}

export default App;
