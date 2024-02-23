import styles from "./messageCard.module.scss"
import "./messageCard.scss"

export const MessageCard = (props:any) =>{
    let side=props.prop.side;
    return (
        <>
        <div className={`wrapper ${side}`}>
            <div className={`card`}>this is a sample message this is a sample message this is a sample messagethis is a sample messagethis is a sample message   .</div>
        </div>
        </>
    )
}