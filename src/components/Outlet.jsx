// Layout.js
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <NavBar />
      {/* main으로 Routes를 감싸도 문제 발생x */}
      {/* 전체적인 style 지정에 용이함 */}
      <main className="mt-[90px] flex-grow flex justify-center items-center">
        <Outlet /> {/* 자식 페이지가 여기서 보여짐 */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
