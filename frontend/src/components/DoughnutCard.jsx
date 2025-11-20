import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function DoughnutCard({ allocation }) {
    const doughnutChartRef = useRef(null);
    const doughnutChartInstance = useRef(null);

    const labels = allocation.map(item => item.title);
    const data = allocation.map(item => item.value);
    const colors = allocation.map(item => item.color);

    //Doughnut chart
    const doughnutChartData = {
        labels: labels,
        datasets: [{
            label: 'Allocation',
            data: data,
            backgroundColor: colors,
            hoverOffset: 4
        }],
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    };
    const doughnutChartConfig = {
        type: 'doughnut',
        data: doughnutChartData,
    };

    useEffect(() => {
        if (doughnutChartRef.current) {
            doughnutChartInstance.current = new Chart(doughnutChartRef.current, doughnutChartConfig);
        }

        return () => {
            if (doughnutChartInstance.current) {
                doughnutChartInstance.current.destroy();
            }
        }
    }, []);

    return (
        <div className="doughnut-card">
            <h2 className="card-title">Allocation</h2>
            <div className='chart'>
                <canvas ref={doughnutChartRef}></canvas>
            </div>
        </div>
    );
}

export default DoughnutCard;