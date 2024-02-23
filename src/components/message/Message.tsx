import styles from "./message.module.scss"
import {MessageCard} from "@/components/messageCard/MessageCard";

export const Message=()=>{
    //api call
    //get data from response
    //store data in object
    let prop={
        side:"right",
    }
    return(
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    Amit RG
                </header>
                <article className={styles.messages}>
                <MessageCard prop={prop}/>
                    <MessageCard prop={prop}/>
                    <MessageCard prop={prop}/>
                    <MessageCard prop={prop}/>
                    <MessageCard prop={prop}/>
                    <MessageCard prop={prop}/>
                    <MessageCard prop={prop}/>
                    <MessageCard prop={prop}/><MessageCard prop={prop}/><MessageCard prop={prop}/><MessageCard prop={prop}/><MessageCard prop={prop}/><MessageCard prop={prop}/>


                </article>
                <div className={styles.chatbox}>
                    <input className={styles.input} type="text" placeholder='message amit rg'/>
                </div>
            </div>
        </>
    )
}