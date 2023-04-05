"use client"; // this is a client component

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import { Grid, Paper, styled } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export default function Schedule() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  return (
    <div className={styles.schedule}>
      <h1>Schedule</h1>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
          <h3>Thursday June 6, 2024</h3>
          <ul>
            <li>6:00pm - Welcome Dinner</li>
            <li>7:00pm - Rehearsal</li>
          </ul>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <h2>Friday June 7, 2024</h2>
            <ul>
              <li>12:00pm - Guests leave on bus for Kualoa Ranch</li>
              <li>2:00pm - Open time at Paliku Gardens</li>
              <li>3:00pm - Cermony at water tower</li>
              <li>5:00pm - open bar at reception tent</li>
              <li>6:00pm - Dinner</li>
              <li>10:00pm - Send-off</li>
            </ul>
            <img src="/Tina.gif" alt="Tina" width="100%" />
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <h2>Saturday June 8, 2024</h2>
            <ul>
              <li>10:00am - Group hike at Diamond Head</li>
            </ul>
          </Item>
        </Grid>
      </Grid>
      <iframe src="https://giphy.com/embed/13B40FkhzSC2c" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/popkey-katya-wig-13B40FkhzSC2c"></a></p>
    </div>
  )
}
