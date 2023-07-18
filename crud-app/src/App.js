import './App.css';
import Table from './components/Table'
import {useState, useEffect} from 'react'

function App() {

  const MOCK_API_URL = 'https://64b6e2aedf0839c97e163e47.mockapi.io/user'
  const [users, setUsers] = useState([{
    name: '',
    jobTitle: '',
    companyName: '',
  },
])

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

//const postUsers = () => {}

//const deleteUsers = () => {}

//const updateUsers = () => {}


return (
  <div className="App">
    <Table users={users}/>
  </div>
);
}

export default App;
