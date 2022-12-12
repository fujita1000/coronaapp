import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import CountrySelector from '@/components/Country/Country';
import Stats from '@/components/Stats/Stats';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <CountrySelector />
      <Stats url='https://covid19.mathdro.id/api/' />
    </div>
  );
}

export default Home
