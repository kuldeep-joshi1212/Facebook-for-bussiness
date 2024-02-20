import styles from "./conversationCard.module.scss"

export const ConversationCard = () =>{
    return(
        <>
            <div className={styles.card}>
                <div className={styles.upper}>
                    <div className={styles.upperStart}> <input type="checkbox" /></div>
                    <div className={styles.upperMiddle}>
                        <div className={styles.name}>
                            Amit Rg
                        </div>
                        <div className={styles.source}>Facebook dm</div>
                    </div>
                    <div className={styles.upperEnd}>10m</div>
                </div>
                <div className={styles.lower}>
                    <div className={styles.lowerStart}>Message</div>
                    <div className={styles.lowerEnd}>submessage</div>
                </div>
            </div>
        </>
    )
}