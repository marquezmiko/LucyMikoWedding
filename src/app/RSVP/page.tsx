"use client"; // this is a client component

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'


export default function RSVP() {
  return (
    <div className={styles.rsvp}>
        <form action="/send-data-here" method="post">
            <label htmlFor="first">First name:</label>
            <input type="text" id="first" name="first" />
            <br />
            <label htmlFor="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
