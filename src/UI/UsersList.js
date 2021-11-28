import React from 'react'
import Card from './Card'
import classes from './UsersList.module.css'

function UsersList(props) {
  return (
    <Card className  = {classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key= {user.userId}> {user.userName} ({user.userAge} years old) </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList
