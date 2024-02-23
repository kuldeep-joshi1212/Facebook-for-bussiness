"use client"
import styles from "./navbar.module.scss"
import {useState} from "react";
import axios from "axios";
export const Navbar=()=>{
    const [picture,setPicture]=useState("");
    // console.log(process.env.FACEBOOK_TOKEN)
    async function callAPI(){
        let endpoint=`https://graph.facebook.com/v19.0/me?fields=id,name,messenger_profile,picture&access_token=${process.env.FACEBOOK_TOKEN}`
        // console.log(process.env.FACEBOOK_TOKEN)
        axios.get(endpoint,{})
            .then((response)=>{
                setPicture(response.data.picture.data.url)
            })
            .catch((error)=>{
                console.log("oh no")
            });


    }
    // callAPI();
    // console.log(picture)
    return(
        <nav className={styles.navbar}>
            <div className={`${styles.icons} ${styles.section}`}>
                <ul className={styles.list}>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className={`w-6 h-6 ${styles.icon}`}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className={`w-6 h-6 ${styles.icon} ${styles.active}`}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"/>
                        </svg>

                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className={`w-6 h-6 ${styles.icon}`}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className={`w-6 h-6 ${styles.icon}`}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>
                        </svg>

                    </li>
                </ul>
            </div>
            <div className={`${styles.picture} ${styles.section}`}>
                <div>
                    <img className={styles.profilePicture} src={picture} alt={picture} />

                </div>
            </div>

        </nav>
    )
}