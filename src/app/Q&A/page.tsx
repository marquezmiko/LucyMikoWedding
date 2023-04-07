"use client"; // this is a client component

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'

import { Grid, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel'

const inter = Inter({ subsets: ['latin'] })

export default function QandA() {
  return (
    <Grid container spacing={0}>
      <Paper>
        Q: Why Hawaii?
        <br />
        A: most of Lucy's guests are based in Texas, however the ranch-style aesthetic
        of most venues was not appealing. Miko's guests are coming from all over including
        Singapore, so he wanted somewhere that would be worth multiple vacation days and
        long flights. Once we realized Hawaii would be just as expensive venue-wise as Texas
        or Florida, the decision was made!
      </Paper>
      <Paper>
        Q: where should we stay?
        <br />
        A: Kualoa Ranch is between a 35-40 minute drive from Honolulu. There are hotel options
        all over the island.
      </Paper>
    </Grid>
  )
}
