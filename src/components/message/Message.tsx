import styles from "./message.module.scss"

export const Message=()=>{
    return(
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    Amit RG
                </header>
                <article className={styles.messages}>

                </article>
                <div className={styles.chatbox}>
                    <input className={styles.input} type="text" placeholder='message amit rg'/>
                </div>
            </div>
        </>
    )
}