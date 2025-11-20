import DoughnutCard from '../components/DoughnutCard';
import LineCard from '../components/LineCard';
import ListCard from '../components/ListCard';

const MetricsPage = ({ allocation }) => {
    //Stocks metrics
    const stocks_total_deposit = allocation.stocks.pea.deposit + allocation.stocks.cto.deposit;
    const stocks_total_value = allocation.stocks.pea.value + allocation.stocks.cto.value;
    const stocks_change = parseFloat(stocks_total_value / stocks_total_deposit * 100 - 100).toFixed(2);
    //Investments metrics
    const investments_deposit = allocation.investments.accounts.map(item => item.deposit);
    const investments_total_deposit = investments_deposit.reduce((acc, num) => acc + num, 0);
    const investments_value = allocation.investments.accounts.map(item => item.value);
    const investments_total_value = investments_value.reduce((acc, num) => acc + num, 0);
    const investments_change = parseFloat(investments_total_value / investments_total_deposit * 100 - 100).toFixed(2);
    //Cryptocurrencies metrics
    const cryptocurrencies_deposit = allocation.cryptocurrencies.accounts.map(item => item.deposit);
    const cryptocurrencies_total_deposit = cryptocurrencies_deposit.reduce((acc, num) => acc + num, 0);
    const cryptocurrencies_value = allocation.cryptocurrencies.accounts.map(item => item.value);
    const cryptocurrencies_total_value = cryptocurrencies_value.reduce((acc, num) => acc + num, 0);
    const cryptocurrencies_change = parseFloat(cryptocurrencies_total_value / cryptocurrencies_total_deposit * 100 - 100).toFixed(2);
    //Trading metrics
    const trading_deposit = allocation.trading.accounts.map(item => item.cost);
    const trading_total_deposit = trading_deposit.reduce((acc, num) => acc + num, 0);
    const trading_earned = allocation.trading.accounts.map(item => item.earned);
    const trading_total_earned = trading_earned.reduce((acc, num) => acc + num, 0);
    const trading_change = parseFloat(trading_total_earned / trading_total_deposit * 100 - 100).toFixed(2);

    const datas = [
        {
            title: 'Stocks',
            deposit: stocks_total_deposit,
            value: stocks_total_value,
            change: stocks_change,
            color: 'rgb(255, 99, 132)'
        },
        {
            title: 'Investments',
            deposit: investments_total_deposit,
            value: investments_total_value,
            change: investments_change,
            color: 'rgb(54, 162, 235)'
        },
        {
            title: 'Cryptocurrencies',
            deposit: cryptocurrencies_total_deposit,
            value: cryptocurrencies_total_value,
            change: cryptocurrencies_change,
            color: 'rgb(255, 205, 86)'
        },
        {
            title: 'Trading',
            deposit: trading_total_deposit,
            value: trading_total_earned,
            change: trading_change,
            color: 'rgb(255, 205, 255)'
        }
    ];
    const values = [
        {
            value: 10,
            date: 'January'
        },
        {
            value: 20,
            date: 'February'
        },
        {
            value: 50,
            date: 'March'
        },
        {
            value: 45,
            date: 'April'
        },
        {
            value: 55,
            date: 'May'
        },
        {
            value: 75,
            date: 'June'
        },
    ];

    return (
        <div className="page-container">
            <h1 className="page-title">Dashboard</h1>
            <div className='grid grid-cols-3'>
                <div className="card col-span-1">
                    <DoughnutCard allocation={datas} />
                </div>
                <div className="card col-span-2">
                    <LineCard values={values} />
                </div>
            </div>
            <div className='card col-span-3'>
                <ListCard items={datas} />
            </div>
        </div >
    );
};

export default MetricsPage;