"use client"
import styles from "./login.module.scss"
import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import {useRouter} from "next/navigation";
import {FormEvent} from "react";


export default  function login() {
    const router = useRouter()

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
            router.push('/integration')
        } else {
            // todo:Handle errors
        }
    }

    return(
        <>
        <div className={styles.pageLogin}>
            <div className={styles.form}>
                <h2>Login to your account</h2>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email</label>
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
                        <button className={styles.submitButton} type="submit">Login</button>
                        <div className={styles.center}>New to Richpanel? <a href="">Sign up</a></div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}