"use client"; // this is a client component

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { ThemeProvider, createTheme } from "@mui/material/styles";

import ResponsiveAppBar from '@/components/appBar';
import Couple from './Couple/page';
import Schedule from './Schedule/page';
import QandA from './Q&A/page';
import Registry from './Registry/page';
import RSVP from './RSVP/page';
import Vendors from './Vendors/page';

import ScrollButton from '../ScrollButton';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f56608',
    },
  },
  typography: {
    fontFamily: 'Lora',
    fontSize: 16,
  },
});

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.appBar}>
        <ResponsiveAppBar />
      </div>
      <main className={styles.main}>
        <div className={styles.introParallax}>
          <div className={styles.center}>
            <h1 className="title">
              Celebrate with us!
            </h1>
            <br />
            <h2 className="subtitle">
              June 7, 2024
            </h2>
            <h3>
              Paliku Gardens at Kualoa Ranch
              <br />
              Oahu, Hawaii
            </h3>
          </div>
        </div>
        <div className={styles.coupleParallax}>
          <a className="anchor" id="Couple"></a><h1 className={styles.coupleTitle}>The Couple</h1>
          <Couple />
        </div>
        <div className={styles.scheduleParallax}>
          <a className="anchor" id="Schedule"></a><h1 className={styles.scheduleTitle}>Schedule</h1>
          <Schedule />
        </div>
        <div className={styles.qAndAParallax}>
          <a className="anchor" id="Q&A"></a><h1 className={styles.qAndATitle}>Q & A</h1>
          <QandA />
        </div>
        <div className={styles.registryParallax}>
          <a className="anchor" id="Registry"></a><h1 className={styles.registryTitle}>Registry</h1>
          <Registry />
        </div>
        <div className={styles.rsvpParallax}>
        <a className="anchor" id="RSVP"></a><h1 className={styles.rsvpTitle}>RSVP</h1>
          <RSVP />
        </div>
        <div className={styles.vendorsParallax}>
        <a className="anchor" id="Vendors"></a><h1 className={styles.vendorsTitle}>Thank You to our Vendors!</h1>
          <Vendors />
        </div>
        <div className={styles.scrollButton}>
          <ScrollButton />
        </div>
      </main>
    </ThemeProvider>
  )
}
