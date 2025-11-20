function AddStockCard() {

    return (
        <div className="add-stock-card">
            <h2 className="card-title">Add stock</h2>
            <div className='table-title grid grid-cols-9 gap-1'>
                <div className='allocation-head'>Account</div>
                <div className='allocation-head'>Name</div>
                <div className='allocation-head'>Ticker</div>
                <div className='allocation-head'>Quantity</div>
                <div className='allocation-head'>Price</div>
                <div className='allocation-head'>SL</div>
                <div className='allocation-head'>TP1</div>
                <div className='allocation-head'>TP2</div>
                <div className='allocation-head'>TP3</div>
            </div>
            <div className='table-item grid grid-cols-9 gap-1 text-center'>
                <div className='add-stock-item'>
                    <select name="account">
                        <option value="pea">PEA</option>
                        <option value="cto">CTO</option>
                    </select>
                </div>
                <div className='add-stock-item'><input /></div>
                <div className='add-stock-item'>
                    <select name="ticker">
                        <option value="apple">unknown</option>
                        <option value="apple">MC</option>
                        <option value="banana">ASML</option>
                        <option value="orange">Orange</option>
                    </select>
                </div>
                <div className='add-stock-item'><input /></div>
                <div className='add-stock-item'><input /></div>
                <div className='add-stock-item'><input /></div>
                <div className='add-stock-item'><input /></div>
                <div className='add-stock-item'><input /></div>
                <div className='add-stock-item'><input /></div>
            </div>
            <div className="grid grid-cols-9">
                <div className="submit-button col-start-9 col-span-1">
                    <button type="submit">Add</button>
                </div>
            </div>
        </div>
    )
}
export default AddStockCard;