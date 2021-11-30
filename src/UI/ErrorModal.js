import React from 'react'
import Card from './Card'
import  classes from './errorModal.module.css'
import Button from './Button'
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className = {classes.backdrop} onClick= {props.onClick}/>
}

const ModalOverlay = (props) => {
  return (
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
  )
}

export default function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop  onClick= {props.onClick} />, document.getElementById("overlay")) }
      {ReactDOM.createPortal(<ModalOverlay  title= {props.title} body = {props.body} onClick= {props.onClick}/>, document.getElementById("modal"))}
    </ > 
    )
}
