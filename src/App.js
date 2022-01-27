import React, { Fragment,useState } from 'react';
// import Wrapper from './components/Helper/Index';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const[users, setUsers] = useState([])

  const addUserHandler =(name,age)=> {
    setUsers([...users, {name, age, id: Math.random().toString() }])
  }

  const getData=(data)=>{
    setUsers(data)
  }

  return (
    <Fragment>
   <AddUser onAddUser ={addUserHandler}/>
   <UserList users={users} getData={getData}/>
    </Fragment>
  )

}

export default App;
