"use client"; // this is a client component

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { ThemeProvider, createTheme } from "@mui/material/styles";

import ResponsiveAppBar from '@/components/appBar';
import Couple from 'src/app/Couple/page.tsx';
import Schedule from 'src/app/Schedule/page.tsx';

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
              Paliku Gardens
              <br />
              Oahu, Hawaii
            </h3>
          </div>
        </div>
        <div className={styles.coupleParallax}>
          <Couple />
        </div>
        <div className={styles.scheduleParallax}>
          <Schedule />
        </div>
      </main>
    </ThemeProvider>
  )
}
