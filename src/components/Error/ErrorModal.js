import classes from '../../styles/ErrorModal.module.css'
import Card from '../UI/Card'
import React from 'react'
import ReactDom from 'react-dom'

const BackDrop=props=>{
    return <div className={classes.backdrop} onClick={props.onConfirm}/>
}

const Overlay=props=>{
    return(<Card className={classes.modal}>
        <header className={classes.header}><h2>{props.title}</h2></header>
        <div className={classes.content}><p>{props.message}</p></div>
        <footer className={classes.actions}><button onClick={props.onConfirm}>Okay</button></footer>
    </Card>)
}

const ErrorModal = props=>{
    return(
        <React.Fragment>
            {ReactDom.createPortal(<BackDrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Overlay title={props.title} message={props.title} onConfirm={props.onConfirm}/>
            , document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}
export default ErrorModal