import styles from "./profile.module.scss"

export const Profile = () =>{
    return (
        <>
        <div className={styles.container}>
            <div className={styles.upper}>
                <div className={styles.picture}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className={`w-6 h-6 ${styles.icon}`}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                </div>
                <div className={styles.title}>Amit Rg</div>
                <div className={styles.status}>online</div>
                <div className={styles.buttons}>
                    <button className={styles.button}>call</button>
                    <button className={styles.button}> profile</button>
                </div>
            </div>
            <div className={styles.lower}>
                <div className={styles.wrapper}>
                    <div className={styles.details}>
                        <div className={`${styles.detail} ${styles.head}`}>Customer Details</div>
                        <div className={`${styles.detail} ${styles.email}`}>
                            <span className={styles.light}>Email</span>
                            <span className={styles.dark}>abc@gmail.com</span>
                        </div>
                        <div className={`${styles.detail} ${styles.firstName}`}>
                            <span className={styles.light}> First name</span>
                            <span className={styles.dark}> Amit</span>
                        </div>
                        <div className={`${styles.detail} ${styles.lastName}`}>
                            <span className={styles.light}>Last name</span>
                            <span className={styles.dark}> RG</span>
                        </div>
                        <div className={styles.more}>
                            <div>View more details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}