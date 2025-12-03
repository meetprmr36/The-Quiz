import React, { useMemo } from "react";
import Chart from "react-apexcharts";

const Chartcompo = (props) => {

    const staticOptions = useMemo(() => ({
        thechart: {
            chart: {
                type: "bar",
                toolbar: { show: false },
                sparkline: { enabled: true },
                animations: {
                    enabled: true,
                    easing: "easeinout",
                    speed: 800,
                    animateGradually: { enabled: true, delay: 200 },
                    dynamicAnimation: { enabled: true, speed: 400 }
                }
            },
            plotOptions: { bar: { columnWidth: "35%", borderRadius: 3 } },
            dataLabels: { enabled: false },
            xaxis: {
                categories: props.categories,
                labels: { show: false }
            },
            yaxis: { show: false },
            grid: { show: false },
            legend: { show: false },
            tooltip: { enabled: true },
            colors: ["#6163f1"]
        }
    }), []);

    return (
        <div className="bg-[var(--white)] rounded-xl shadow-sm p-4 flex flex-row max-xl:p-4 max-lg:p-3">
            <div className="flex-1">
                <h2 className="text-sm font-medium text-[var(--black)] mb-1">{props.name}</h2>
                <p className="text-4xl my-2 font-semibold text-[var(--black)]">{props.length || 0}</p>
                <p className="text-xs my-2 text-gray-400">Growth</p>
            </div>
            <div className="flex-1 flex justify-end items-end">
                <div className="w-[160px] h-[100px]">
                    <Chart
                        options={staticOptions.thechart}
                        series={[{ data: props.ChartData }]}
                        type="bar"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
};

export default Chartcompo;