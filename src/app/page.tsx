import { NavBar } from '../components/menu/index'
import Main from '@/components/main';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <Main />
      <Footer />
    </>
  );
}
