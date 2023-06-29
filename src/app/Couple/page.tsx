"use client"; // this is a client component

import { Inter } from 'next/font/google'
import styles from '../page.module.css'

import LucyCard from '@/components/lucyCard';
import MikoCard from '@/components/mikoCard';

const inter = Inter({ subsets: ['latin'] })

export default function Couple() {
  return (
    <div className={styles.couple}>
      <img src="/Shanghai_couple.jpeg" alt="Couple pic" width="500px" />
      <div className="bio">
        We met while both working at Epic Systems in Madison, WI. A few months into dating, Miko got an offer
        to relocate to Singapore as an Interface Manager and despite this role being on the other side of the world,
        we decided to go for long distance. Eventually Lucy left Epic and relocated back to Austin, TX, and when it was
        time for Miko to move back to the US in December 2020, he moved in.
        <br />
        <br />
        Since then we've been together doing lots of CrossFit, dragonboat, cooking, and of course spending time with our
        beloved biological canine son Ollie. We're looking forward to spending time with all of you in Hawaii! Paddling
        to the venue is optional.
      </div>
      <div className={styles.coupleCards} >
        <div className={styles.coupleCard}>
          <h1 className="Lucy">
            Lucy
          </h1>
          <LucyCard />
        </div>
        <div className={styles.coupleCard}>
          <h1 className="Miko">
            Miko
          </h1>
          <MikoCard />
        </div>
      </div>
    </div>
  )
}
