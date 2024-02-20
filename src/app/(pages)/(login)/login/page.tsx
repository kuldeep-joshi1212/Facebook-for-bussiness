import styles from "./login.module.scss"
import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';


export default  function login() {

    return(
        <>
        <div className={styles.pageLogin}>
            <div className={styles.form}>
                <h2>Login to your account</h2>
                <form className={styles.loginForm} action="" method="post">
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Username</label>
                        <input className={styles.input} name="username" type="text" placeholder="Username"/>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Password</label>
                        <input className={styles.input} name="password" type="password" placeholder="Password"/>
                    </div>
                    <div className={styles.formGroup}>
                        <button className={styles.submitButton} type="submit">Login</button>
                        <div className={styles.center}>New to Richpanel? <a href="">Sign up</a></div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}