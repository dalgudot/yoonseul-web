import type { NextPage } from 'next';
import style from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const Privacy: NextPage = () => {
  const router = useRouter();
  const locale = router.locale;

  const korean = '윤슬은 어떠한 데이터도 수집하지 않습니다.';
  const english = 'YoonSeul does not collect any data from this app.';

  return (
    <main className={style.main}>{locale === 'ko' ? korean : english}</main>
  );
};

export default Privacy;
