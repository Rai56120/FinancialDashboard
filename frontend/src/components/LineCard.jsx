import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function LineCard({ values }) {
    const lineChartRef = useRef(null);
    const lineChartInstance = useRef(null);

    const data = values.map(item => item.value);
    const dates = values.map(item => item.date);

    //Line chart
    const lineChartData = {
        labels: dates,
        datasets: [{
            label: 'Solde',
            data: data,
            fill: true,
            borderColor: 'rgb(75, 255, 192)',
            backgroundColor: 'rgba(75, 255, 192, 0.25)',
            tension: 0.15
        }]
    };
    const lineChartConfig = {
        type: 'line',
        data: lineChartData,
    };

    //Creating and deleting the charts
    useEffect(() => {
        if (lineChartRef.current) {
            lineChartInstance.current = new Chart(lineChartRef.current, lineChartConfig);
        }

        return () => {
            if (lineChartInstance.current) {
                lineChartInstance.current.destroy();
            }
        }
    }, []);

    return (
        <div className='line-card'>
            <h2 className="card-title">Total value</h2>
            <div className='chart'>
                <canvas ref={lineChartRef}></canvas>
            </div>
        </div>
    );
}

export default LineCard;