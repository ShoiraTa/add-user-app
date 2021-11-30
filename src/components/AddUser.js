import React, {useState, useRef} from 'react'
import './addUser.module.css'
import Card from '../UI/Card'
import classes from './addUser.module.css'
import Button from '../UI/Button'
import UsersList from '../UI/UsersList'
import ErrorModal from '../UI/ErrorModal'

function AddUser(props) {

  const nameRef = useRef()
  const ageRef = useRef()
  const [users, setUsers ] = useState([])
  const [error, setError] = useState({state: false})
 
  const addUserHandler =  (e) =>{
  
    e.preventDefault()
    const  nameRefVal = nameRef.current.value
    const  ageRefVal = ageRef.current.value

    if (nameRefVal.trim().length === 0 || ageRefVal.trim().length === 0){
      setError({
        state: true,
        title: 'Error', 
        message: 'Invalid message'
      })
      return
    }
    if ( +ageRefVal < 0 ){
      setError({
        state: true,
        title: 'Error', 
        message: 'Invalid age'
      })
      return
    }
    const id = Math.floor(Math.random()* 1000) +1
    setUsers([...users, {userName: nameRefVal, userAge: ageRefVal, userId: id}])
  }

  const errorHandler  = () =>  {
    setError({state: false})
  }

  return (
    <>

    <Card className = {`${classes.input}`}>
      <form onSubmit ={addUserHandler} className = {classes.form}>
        <label htmlFor = "username">Username</label>
        <input 
        ref= {nameRef} 
        id="username" 
        type ="text" 
        />
        <label htmlFor = "label">User Age</label>
        <input 
        ref = {ageRef}
        id="userage" 
        type ="number" 
        />
        <Button type= "submit">Add User</Button>
      </form>
    </Card>
    {users.length> 0 ? <UsersList users = {users} /> : ""}  
    {!error.state? "" : <ErrorModal title={error.title} body = {error.message} onClick = {errorHandler}  />}
    </>
  )
}

export default AddUser
