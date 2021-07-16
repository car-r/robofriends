import React, {useState, useEffect} from 'react'
import './App.css';
import CardList from './components/card-list';
import axios from 'axios';
import SearchBox from './components/searchbox';
import HeaderH1 from './components/header/';

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users')
      console.log(result.data)
      setUsers(result.data)
    }
    fetchUsers()
  }, [])

  const filteredUsers = users.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase())
    )

  const handleChange = (e) => {
    setSearch(e.target.value)
  }  

  return (
    <div className="App">
      <HeaderH1 />
      <SearchBox placeholder='search robots' handleChange={handleChange}/>
      <CardList users={filteredUsers}/>
    </div>
  );
}

export default App;
