import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MetricsPage from './pages/MetricsPage';
import InvestmentsPage from './pages/InvestmentsPage';
import CryptocurrenciesPage from './pages/CryptocurrenciesPage';
import TradingPage from './pages/TradingPage';
import StocksPage from './pages/StocksPage';

import indexIcon from '/assets/icons/icon-index.svg';
import stocksIcon from '/assets/icons/icon-stocks.svg';
import investmentsIcon from '/assets/icons/icon-life-insurance.svg';
import cryptocurrenciesIcon from '/assets/icons/icon-cryptomonnaies.svg';
import tradingIcon from '/assets/icons/icon-trading.svg';
import PeaPage from './pages/PeaPage';
import CtoPage from './pages/CtoPage';

const alphaVantageAPI = "5IE5AFOIICABAMUS";

function useAllocationLoader(file) {
  const [allocation, setAllocation] = useState([]);

  useEffect(() => {
    fetch(`./data/${file}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        return response.json();
      })
      .then((data) => setAllocation(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, [file]);

  return allocation;
}

function App() {
  // const SideBarIcon = ({ icon }) => {
  //   return (
  //     <svg className='sidebar-icon' width={55} height={55}>
  //       {icon}
  //     </svg>
  //   );
  // };

  const allocation = useAllocationLoader('allocation');

  return (
    <BrowserRouter>
      <div className='App'>
        <nav className='navbar'>
          <div className='nav-container text-white'>
            <ul>
              <li>
                <Link to="/" className='nav-menu'>
                  <img src={indexIcon} alt='home page' className='nav-icon'></img>
                </Link>
              </li>
              <li>
                <Link to="/stocks" className='nav-menu'>
                  <img src={stocksIcon} alt='home page' className='nav-icon'></img>
                </Link>
              </li>
              <li>
                <Link to="/investments" className='nav-menu'>
                  <img src={investmentsIcon} alt='home page' className='nav-icon'></img>
                </Link>
              </li>
              <li>
                <Link to="/cryptocurrencies" className='nav-menu'>
                  <img src={cryptocurrenciesIcon} alt='home page' className='nav-icon'></img>
                </Link>
              </li>
              <li>
                <Link to="/trading" className='nav-menu'>
                  <img src={tradingIcon} alt='home page' className='nav-icon'></img>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className='main-content'>
          {Object.keys(allocation).length > 0 ? (
            <Routes>
              <Route path='/' element={<MetricsPage allocation={allocation} />} />
              <Route path='/stocks' element={<StocksPage allocation={allocation.stocks} />} />
              <Route path='/pea' element={<PeaPage allocation={allocation.stocks.pea} />} />
              <Route path='/cto' element={<CtoPage allocation={allocation.stocks.cto} />} />
              <Route path='/investments' element={<InvestmentsPage />} />
              <Route path='/cryptocurrencies' element={<CryptocurrenciesPage />} />
              <Route path='/trading' element={<TradingPage />} />
            </Routes>
          ) : (
            <div>Loading...</div>
          )}
        </main>
      </div>
    </BrowserRouter >
  )
}

export default App
