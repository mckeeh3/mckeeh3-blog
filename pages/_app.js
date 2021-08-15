import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // console.log('pageProps', pageProps);

  return (
    <div className='mx-auto my-10 w-9/12'>
      <header>
        <h1 className='text-6xl font-bold text-center'>mckeeh3 Blog</h1>
        <nav className='my-4'>
          <ul className='flex flex-row justify-center space-x-4'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
