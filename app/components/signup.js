'use client'
import useSWR from 'swr'
import styles from './signup.module.css'
import { useState } from 'react'
 
export default function Signup() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitForm = async (e) => {
    e.preventDefault()
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email
      }),
    });
    console.log(response)
    const result = await response.json()
    setMessage(result.message)
  }

  return (<div>
    <form className={styles.form}
      onSubmit={(e) => submitForm(e)}
    >
      <input
        className={styles.input}
        type="email"
        placeholder="tryhard@pleaseletmein.com"
        onChange={(e) => {setEmail(e.target.value)}}
        />
      <button
        className={styles.submit}
        type="submit"
      >Submit</button>
    </form>
    <p className={styles.message}>{message}</p>
  </div>)



}