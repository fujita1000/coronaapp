import Image from "next/image"
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.image}>
            <Image src={'/logo.png'} width={100} height={100} alt='logo'></Image>
          </div>
          <h1>コロナ感染者数観測アプリ</h1>
          
        </div>
      </div>
    </header>
  );
}

export default Header
