import Image from "next/image"
import styles from './Bg.module.scss';

const Bg = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Image src={'/corona.jpg'} layout='fill' alt='背景画像'  className={styles.bg}/>
      </div>
    </div>
  );
};

export default Bg;
