import React, {useState} from 'react'
import './addUser.module.css'
import Card from '../UI/Card'
import classes from './addUser.module.css'
import Button from '../UI/Button'
import UsersList from '../UI/UsersList'
import ErrorModal from '../UI/ErrorModal'

function AddUser(props) {
  const [name, setName] = useState('')
  const [age, setage]  = useState('')
  const [users, setUsers ] = useState([])
  const [error, setError] = useState({state: false})


  const userNameHandler = (e) => {
    setName(e.target.value)
  }
  const userageHandler = (e) => {
    setage(e.target.value)
  }
 
  const addUserHandler =  (e) =>{
    e.preventDefault()
    if (name.trim().length === 0 || age.trim().length === 0){
      setError({
        state: true,
        title: 'Error', 
        message: 'Invalid message'
      })
      return
    }
    if ( +age < 0 ){
      setError({
        state: true,
        title: 'Error', 
        message: 'Invalid age'
      })
      return
    }
    const id = Math.floor(Math.random()* 1000) +1
    setUsers([...users, {userName: name, userAge: age, userId: id}])
    setName('')
    setage('')
  }

  const errorHandler  = () =>  {
    setError({state: false})
  }
  

  return (
    <>

    <Card className = {`${classes.input}`}>
      <form onSubmit ={addUserHandler} className = {classes.form}>
        <label htmlFor = "username">Username</label>
        <input id="username" type ="text" value = {name} onChange={userNameHandler} />
        <label htmlFor = "label">User Age</label>
        <input id="userage" type ="number" value={age} onChange={userageHandler} />
        <Button type= "submit">Add User</Button>
      </form>
    </Card>
    {users.length> 0 ? <UsersList users = {users} /> : ""}  
    {!error.state? "" : <ErrorModal title={error.title} body = {error.message} onClick = {errorHandler}  />}
    </>
  )
}

export default AddUser
