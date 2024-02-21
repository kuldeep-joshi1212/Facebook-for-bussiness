"use client"
import styles from "./register.module.scss"
import {useRouter} from "next/navigation";
import {FormEvent} from "react";

export default function register() {

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const username=formData.get('username')
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username,email, password }),
        })

        if (response.ok) {

        } else {
            // todo:Handle errors
        }
    }
    return(
        <>
            <div className={styles.pageRegister}>
                <div className={styles.form}>
                    <h2>Login to your account</h2>
                    <form className={styles.registerForm}   method="post">
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
                            <button className={styles.submitButton}  type="submit">Register</button>
                            <div className={styles.center}>Already have an account <a href="">Login</a></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}