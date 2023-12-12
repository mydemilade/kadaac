import logo from './logo.svg';
import Navbar from './component/Navbar';
import FontStyles from './FontStyles';
import './index.css';
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-mont",
// });

function App() {
  return (
    <div className='bg-red'>
      <main className='font-mont bg-light dark:bg-dark w-full min-h-screen'>
      <FontStyles />
        <Navbar/>
     
        </main>
      
    </div>
  );
}

export default App;
