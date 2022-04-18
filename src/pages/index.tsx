import type { NextPage } from 'next';
import style from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const locale = router.locale;

  return (
    <main className={style.main}>
      {locale === 'ko' ? '지금을 기억하기' : 'Remember this moment'}
    </main>
  );
};

export default Home;
