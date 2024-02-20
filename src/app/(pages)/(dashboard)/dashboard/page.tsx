import styles from "./dashboard.module.scss"
import {Navbar} from "@/components/navbar/Navbar";
import {Conversation} from "@/components/conversation/Conversation";
import {Message} from "@/components/message/Message";
import {Profile} from "@/components/profile/Profile";


export default async function dashboard(){
    return(
        <>
            <div className={styles.pageDashboard}>
                <nav id={styles.navbar}><Navbar/></nav>
                <section id={styles.conversations}><Conversation/> </section>
                <main id={styles.messages}><Message/> </main>
                <aside id={styles.profile}><Profile/> </aside>
            </div>
        </>
    )
}