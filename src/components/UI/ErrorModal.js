import Card from "./Card"
import Button from "./Button"
import classes from './ErrorModal.module.css'
import ReactDOM  from "react-dom"

const BackDrop =(props)=>{
    return <div onClick={props.onConfirm} className={classes.backdrop} />
}

 const ModalOverlay =(props)=>{
    return(
        <>
     {/* <div onClick={props.onConfirm} className={classes.backdrop} /> */}
     <Card className ={classes.modal} >
         <header className={classes.header} >
         <h2>{props.title}</h2>
         </header>
         <div className={classes.content} >
             <p>{props.message}</p>
         </div>
         <footer className={classes.actions} >
         {props.children}
             <Button onClick={props.onConfirm}  >Okay</Button>
             
             
             
         </footer>
     </Card>
 </>
    )

} 




const ErrorModal = (props)=>{
    return(
        
        <>

    {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm}/>,
        document.getElementById('backdrop-root')
    )}
 
    {ReactDOM.createPortal(
        <ModalOverlay
         onConfirm={props.onConfirm}
        message={props.message}
        children={props.children}
        title={props.title}

        
        />,
        document.getElementById('modal-root')
    )}


        </>
 

    )
}
export default ErrorModal