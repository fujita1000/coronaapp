import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import CountrySelector from '@/components/Country/Country';
import Stats from '@/components/Stats/Stats';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <CountrySelector />
      <Stats
        url='https://mathdroid/covid-19-api/api/'
      />
    </div>
  );
}

export default Home
