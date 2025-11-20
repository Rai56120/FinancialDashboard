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
                            to={`/${categorie.title.toLowerCase()}`}
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
export default ListCard;