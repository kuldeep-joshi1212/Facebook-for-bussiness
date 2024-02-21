import styles from "./register.module.scss"

export default function register() {
    return(
        <>
            <div className={styles.pageRegister}>
                <div className={styles.form}>
                    <h2>Login to your account</h2>
                    <form className={styles.registerForm} action="" method="post">
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Username</label>
                            <input className={styles.input} name="username" type="text" placeholder="Username"/>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>E-mail</label>
                            <input className={styles.input} name="email" type="text" placeholder="E-mail"/>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Password</label>
                            <input className={styles.input} name="password" type="password" placeholder="Password"/>
                        </div>
                        <div className={styles.remember}>
                            <input type={"checkbox"}/>
                            <span> Remember Me</span>
                        </div>
                        <div className={styles.formGroup}>
                            <button className={styles.submitButton} type="submit">Register</button>
                            <div className={styles.center}>Already have an account <a href="">Login</a></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}