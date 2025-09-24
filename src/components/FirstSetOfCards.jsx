import React from "react";
import Chart from "react-apexcharts";

const FirstCards = ({ techCount, QueCount, UserCount, technologie, questions, User }) => {
    const activeCount = technologie.filter(t => t.status === "Active").length;

    const techSeries = [
        {
            name: "Technologies",
            data: [5, 8, 6, 10, 4, 7, activeCount],
        },
    ];

    const techOptions = {
        chart: {
            type: "area",
            sparkline: { enabled: true },
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.6,
                opacityTo: 0.4,
                stops: [0, 90]
            },
        },
        markers: { size: 0 },
        tooltip: {
            enabled: true,
            x: { show: false },
        },
        colors: ["#3B82F6"],
    };

    const activeQCount = questions.filter(q => q.status === "Active").length;
    const inactiveQCount = questions.filter(q => q.status === "InActive").length;

    const qSeries = [activeQCount || 0, inactiveQCount || 0];
    const qOptions = {
        chart: { type: "donut", toolbar: { show: false } },
        labels: ["Active", "Inactive"],
        colors: ["#3B82F6", "#F87171"],
        legend: { show: false },
        dataLabels: { enabled: false },
        tooltip: { enabled: true },
        // plotOptions: {
        //     pie: {
        //         donut: {
        //             size: "80%",
        //             labels: {
        //                 show: true,
        //                 total: {
        //                     show: true,
        //                     label: "Total",
        //                     fontSize: "12px",
        //                     style: {
        //                         fontSize: "12px",
        //                         fontWeight: 500,
        //                     },
        //                     formatter: () => `${QueCount}`,
        //                 },
        //             },
        //         },
        //     },
        // },

        plotOptions: {
            pie: {
                donut: {
                    size: '80%',
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total',
                            fontSize: '12px',
                            fontWeight: 500,
                            color: 'var(--lightGray)', // This will change with theme
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                            }
                        },
                        value: {
                            show: true,
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'var(--black)', // This will change with theme
                            offsetY: 8,
                            formatter: function (val) {
                                return val
                            }
                        }
                    }
                }
            }
        }
    };

    const Udata = [
        { name: "Pass", value: User.filter(u => u.examStatus === "Pass").length },
        { name: "Fail", value: User.filter(u => u.examStatus === "Fail").length },
        { name: "Not Attempted", value: User.filter(u => u.examStatus === "Not Attempted").length },
        {
            name: "Average Score",
            value: User.length > 0
                ? Math.round(User.reduce((sum, u) => sum + (u.score || 0), 0) / User.length)
                : 0
        },
        {
            name: "Max Score",
            value: User.length > 0
                ? Math.max(...User.map(u => u.score || 0))
                : 0
        },
        { name: "Users", value: User.filter(u => u.role === "User").length }
    ];


    const userSeries = [{ data: Udata.map(u => u.value) }];
    const userOptions = {
        chart: { type: "bar", toolbar: { show: false }, sparkline: { enabled: true } },
        plotOptions: { bar: { columnWidth: "30%", borderRadius: 2 } },
        dataLabels: { enabled: false },
        xaxis: { categories: ["Pass", "Fail", "Not Attempted", "Average Score", "Max Score", "Users"], labels: { show: false } },
        yaxis: { show: false },
        grid: { show: false },
        legend: { show: false },
        tooltip: { enabled: true },
        colors: ["#3b82f6"]
    };

    const Pdata = [
        { name: "Not Attempted", value: User.filter(u => u.examStatus === "Not Attempted").length },
        {
            name: "Average Score",
            value: User.length > 0
                ? Math.round(User.reduce((sum, u) => sum + (u.score || 0), 0) / User.length)
                : 0
        },
        {
            name: "Max Score",
            value: User.length > 0
                ? Math.max(...User.map(u => u.score || 0))
                : 0
        },
        { name: "Users", value: User.filter(u => u.role === "User").length }
    ];


    const PerfSeries = [{ data: Pdata.map(u => u.value) }];
    const PerfOptions = {
        chart: { type: "bar", toolbar: { show: false }, sparkline: { enabled: true } },
        plotOptions: { bar: { columnWidth: "30%", borderRadius: 2 } },
        dataLabels: { enabled: false },
        xaxis: { categories: ["Not Attempted", "Average Score", "Max Score", "Users"], labels: { show: false } },
        yaxis: { show: false },
        grid: { show: false },
        legend: { show: false },
        tooltip: { enabled: true },
        colors: ["#3b82f6"]
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full my-6">
            <div className="Card">
                <div className="Card-Names">
                    <h2 className="text-sm font-medium text-gray-500 mb-1">Technologies</h2>
                    <p className="text-3xl font-semibold text-[var(--black)]">{techCount}</p>
                </div>
                <div className="flex justify-end items-end w-full">
                    <div className="w-[170px] h-[110px]">
                        <Chart
                            options={techOptions}
                            series={techSeries}
                            type="area"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>

            <div className="Card">
                <div className="Card-Names">
                    <h2 className="text-sm font-medium text-gray-500 mb-1">Questions</h2>
                    <p className="text-3xl font-semibold text-[var(--black)]">{QueCount}</p>
                </div>
                <div className="flex-1 flex justify-end w-full items-end">
                    <div className="relative w-[110px] h-[100px]">
                        <Chart
                            options={qOptions}
                            series={qSeries}
                            type="donut"
                            width="120px"
                            height="110px"
                        />
                    </div>
                </div>
            </div>

            <div className="Card">
                <div className="Card-Names">
                    <h2 className="text-sm font-medium text-gray-500 mb-1">Users</h2>
                    <p className="text-3xl font-semibold text-[var(--black)]">{UserCount}</p>
                </div>
                <div className="flex-1 flex justify-end items-end w-full">
                    <div className="w-[160px] h-[100px]">
                        <Chart
                            options={userOptions}
                            series={userSeries}
                            type="bar"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>

            <div className="Card">
                <div className="Card-Names">
                    <h2 className="text-sm font-medium text-gray-500 mb-1">Performance</h2>
                    <p className="text-3xl font-semibold text-[var(--black)]">
                        {User.length > 0
                            ? Math.max(User.reduce((sum, u) => sum + (u.score || 0), 0) / User.length)
                            : 0}%
                    </p>
                </div>
                <div className="flex-1 flex justify-end items-end w-full">
                    <div className="w-[110px] h-[100px]">
                        <Chart
                            options={PerfOptions}
                            series={PerfSeries}
                            type="bar"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FirstCards;
