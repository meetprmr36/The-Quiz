import React from "react";
import Chart from "react-apexcharts";
import dayjs from "dayjs";
// import { FaEarthAmericas } from "react-icons/fa6";
// import { FaQuestion } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";

const FirstCards = ({ techCount, QueCount, UserCount, technologie, questions }) => {
    const activeCount = technologie.filter(t => t.status === "Active").length;
    const inactiveCount = technologie.filter(t => t.status === "InActive").length;

    console.log(questions)

    const activeQCount = questions.filter((q) => q.status === "Active").length;
    const inactiveQCount = questions.filter((q) => q.status === "InActive").length;

    const series = [
        {
            name: "Active",
            data: [5, 8, 6, 10, 4, 7, activeCount]
        }
    ];

    const options = {
        chart: {
            type: "bar",
            sparkline: { enabled: true }
        },
        plotOptions: {
            bar: {
                columnWidth: "60%",
                borderRadius: 4
            }
        },
        tooltip: {
            y: {
                formatter: (val) => `${val} Active`
            }
        },
        colors: ["#3b82f6"]
    };


    const qSeries = [activeQCount || 0, inactiveQCount || 0];
    console.log("ActiveQ:", activeQCount, "InactiveQ:", inactiveQCount, "Total:", QueCount);
    const qOptions = {
        chart: {
            type: "donut",
            toolbar: { show: false },
        },
        labels: ["Active", "Inactive"],
        colors: ["#3b82f6", "#f87171"],
        legend: { show: false },
        dataLabels: { enabled: false },
        tooltip: {
            y: {
                formatter: (val, { seriesIndex }) =>
                    `${val} ${seriesIndex === 0 ? "Active Questions" : "Inactive Questions"}`,
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "65%",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: "Total",
                            formatter: () => `${QueCount}`,
                        },
                    },
                },
            },
        },
    };



    return (
        <div className="Firstline Flex-column">
            <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <div className="Three-cards">
                    <div className="flex flex-row h-full">
                        <div className="Content-names absolute">
                            <h2 className="text-xl my-3 font-semibold text-[var(--black)]">Technologies</h2>
                            <p className="text-3xl my-2 text-[var(--lightGray)]">{techCount}</p>
                        </div>
                        <div className="w-[60%] h-[90%] relative top-2 left-25">
                            <Chart className="!min-h-auto" options={options} series={series} type="bar" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <div className="Three-cards">
                    <div className="flex flex-row h-full" >
                        <div className="Content-names absolute ">
                            <h2 className="text-xl my-3 font-semibold text-[var(--black)]">Questions</h2>
                            <p className="text-3xl my-2 text-[var(--lightGray)]">{QueCount}</p>
                        </div>
                        <div className="w-[60%] relative left-27">
                            <Chart className="!min-h-auto" options={qOptions} series={qSeries} type="donut" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <div className="Flex-Row Three-cards">
                    <div className="Content-names">
                        <h2 className="text-base font-semibold text-[var(--black)]">Users</h2>
                        <p className="text-2xl my-2 text-[var(--lightGray)]">{UserCount}</p>
                    </div>
                </div>
            </div>

            <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <div className="Flex-Row Three-cards">
                    <div className="Content-names">
                        <h2 className="text-base font-semibold text-[var(--black)]">Users</h2>
                        <p className="text-2xl my-2 text-[var(--lightGray)]">{UserCount}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FirstCards