import React from 'react'
import Card from './Card'
import  classes from './errorModal.module.css'
import Button from './Button'


export default function ErrorModal(props) {
  return (
    <div>
      <div className = {classes.backdrop} onClick= {props.onClick}/>
      <Card className = {classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <main className= {classes.content}>
          <p>{props.body}</p>
        </main>
        <footer className={classes.actions}>
          <Button onClick= {props.onClick}>Okay</Button>
        </footer>
      </Card>
    </div > 
    )
}
