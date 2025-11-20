import AddStockCard from '../components/AddStockCard';
import DoughnutCard from '../components/DoughnutCard';
import LineCard from '../components/LineCard';
import ListCard from '../components/ListCard';

const StocksPage = ({ allocation }) => {
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

    const alloc = [
        {
            title: "PEA",
            deposit: allocation.pea.deposit,
            value: allocation.pea.value,
            change: parseFloat(allocation.pea.value / allocation.pea.deposit * 100 - 100).toFixed(2),
            color: "rgb(255, 99, 132)"
        },
        {
            title: "CTO",
            deposit: allocation.cto.deposit,
            value: allocation.cto.value,
            change: parseFloat(allocation.cto.value / allocation.cto.deposit * 100 - 100).toFixed(2),
            color: "rgb(54, 162, 235)"
        }
    ]
    return (
        <div className="page-container">
            <h1 className="page-title">Stocks</h1>
            <div className='grid grid-cols-3'>
                <div className="card col-span-1">
                    <DoughnutCard allocation={alloc} />
                </div>
                <div className="card col-span-2">
                    <LineCard values={values} />
                </div>
            </div>
            <div className='card col-span-3'>
                <ListCard items={alloc} />
            </div>
            <div className='card col-span-3'>
                <AddStockCard />
            </div>
        </div>
    );
};

export default StocksPage;