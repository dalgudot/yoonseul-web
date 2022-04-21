import type { NextPage } from 'next';
import style from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Logo from '../svg/logo';

const Home: NextPage = () => {
  const router = useRouter();
  const locale = router.locale;

  return (
    <main className={style.main}>
      <Logo />
      <h1>{locale === 'ko' ? '윤슬' : 'Remember this moment'}</h1>
      <p>{locale === 'ko' ? '지금을 기억하기' : 'Remember this moment'}</p>
    </main>
  );
};

export default Home;
