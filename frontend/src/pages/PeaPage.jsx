import DoughnutCard from '../components/DoughnutCard';
import LineCard from '../components/LineCard';
import { Link } from 'react-router-dom';

function ListCard({ items }) {
    return (
        <div className="list-card">
            <div className='table-title grid grid-cols-4 gap-1'>
                <div className='allocation-head'>Asset</div>
                <div className='allocation-head'>Deposit</div>
                <div className='allocation-head'>Value</div>
                <div className='allocation-head'>Change</div>
            </div>
            {items.map(categorie => {
                return (
                    <div key={categorie.title} className='small-card'>
                        <Link
                            to={`/${categorie.link}`}
                            className="allocation-line"
                        >
                            <div className='table-item grid grid-cols-4 gap-1 text-center'>
                                <div className='item'>
                                    {categorie.title}
                                </div>
                                <div className='item'>
                                    {categorie.deposit}
                                </div>
                                <div className='item'>
                                    {categorie.value}
                                </div>
                                <div className='item'>
                                    {categorie.value > categorie.deposit ?
                                        (<p className='text-green-600'>{categorie.change} %</p>) :
                                        (<p className='text-red-600'>{categorie.change} %</p>)
                                    }
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

const PeaPage = ({ allocation }) => {
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
    //Modify with real-time value
    const alloc = allocation.allocation.map((item) => {
        const real_time_price = 550;

        return ({
            title: item.title,
            deposit: item.amount * item.unit_cost,
            value: item.amount * real_time_price,
            change: parseFloat((item.amount * real_time_price) / (item.amount * item.unit_cost) * 100 - 100).toFixed(2),
            color: item.color,
            link: "pea"
        });
    });

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
        </div>
    );
};

export default PeaPage;