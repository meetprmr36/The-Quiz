// import React from "react";
// import Chart from "react-apexcharts";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
// // import dayjs from "dayjs";

// const FirstCards = ({ techCount, QueCount, UserCount, technologie, questions, User }) => {
//     const activeCount = technologie.filter(t => t.status === "Active").length;
//     const inactiveCount = technologie.filter(t => t.status === "InActive").length;


//     const activeQCount = questions.filter((q) => q.status === "Active").length;
//     const inactiveQCount = questions.filter((q) => q.status === "InActive").length;

//     const series = [
//         {
//             name: "Active",
//             data: [5, 8, 6, 10, 4, 7, activeCount]
//         }
//     ];

//     const options = {
//         chart: {
//             type: "bar",
//             sparkline: { enabled: true }
//         },
//         plotOptions: {
//             bar: {
//                 columnWidth: "60%",
//                 borderRadius: 4
//             }
//         },
//         tooltip: {
//             y: {
//                 formatter: (val) => `${val} Active`
//             }
//         },
//         colors: ["#3b82f6"]
//     };


//     const qSeries = [activeQCount || 0, inactiveQCount || 0];
//     console.log("ActiveQ:", activeQCount, "InactiveQ:", inactiveQCount, "Total:", QueCount);
//     const qOptions = {
//         chart: {
//             type: "donut",
//             toolbar: { show: false },
//         },
//         labels: ["Active", "Inactive"],
//         colors: ["#3b82f6", "#f87171"],
//         legend: { show: false },
//         dataLabels: { enabled: false },
//         tooltip: {
//             y: {
//                 formatter: (val, { seriesIndex }) =>
//                     `${val} ${seriesIndex === 0 ? "Active Questions" : "Inactive Questions"}`,
//             },
//         },
//         plotOptions: {
//             pie: {
//                 donut: {
//                     size: "65%",
//                     labels: {
//                         show: true,
//                         total: {
//                             show: true,
//                             label: "Total",
//                             formatter: () => `${QueCount}`,
//                         },
//                     },
//                 },
//             },
//         },
//     };

//     const Udata = [
//         { name: "Pass", value: User.filter(u => u.examStatus === "Pass").length },
//         { name: "Fail", value: User.filter(u => u.examStatus === "Fail").length },
//         { name: "Not Attempted", value: User.filter(u => u.examStatus === "Not Attempted").length },
//     ];

//     const userSeries = [
//         {
//             name: "Users",
//             data: Udata.map(u => u.value),
//         },
//     ];

//     // const userOptions = {
//     //     chart: {
//     //         type: "bar",
//     //         toolbar: { show: false },
//     //     },
//     //     plotOptions: {
//     //         bar: {
//     //             horizontal: false,
//     //             columnWidth: "50%",
//     //             borderRadius: 6,
//     //         },
//     //     },
//     //     // dataLabels: {
//     //     //     enabled: true,
//     //     // },
//     //     // xaxis: {
//     //     //     categories: ["Pass", "Fail", "Not Attempted"],
//     //     // },
//     //     colors: ["#10B981", "#EF4444", "#9CA3AF"],
//     // };

//     const userOptions = {
//         chart: {
//             type: "bar",
//             toolbar: { show: false },
//         },
//         plotOptions: {
//             bar: {
//                 horizontal: false,
//                 columnWidth: "50%",
//                 borderRadius: 6,
//             },
//         },
//         dataLabels: {
//             enabled: false,
//         },
//         xaxis: {
//             categories: ["Pass", "Fail", "Not Attempted"],
//             labels: { show: false },
//             axisBorder: { show: false },
//             axisTicks: { show: false },
//         },
//         yaxis: {
//             show: false,
//         },
//         grid: {
//             show: false,
//         },
//         legend: {
//             show: false,
//         },
//         tooltip: {
//             enabled: true,
//         },
//         colors: ["#10B981", "#EF4444", "#9CA3AF"],
//     };


//     return (
//         <div className="Firstline Flex-column">
//             <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
//                 <div className="Three-cards">
//                     <div className="flex flex-row h-full">
//                         <div className="Content-names absolute">
//                             <h2 className="text-xl my-3 font-semibold text-[var(--black)]">Technologies</h2>
//                             <p className="text-3xl my-2 text-[var(--lightGray)]">{techCount}</p>
//                         </div>
//                         <div className="w-[75%] h-[90%] relative top-2 left-18">
//                             <Chart className="!min-h-auto" options={options} series={series} type="bar" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
//                 <div className="Three-cards">
//                     <div className="flex flex-row h-full" >
//                         <div className="Content-names absolute ">
//                             <h2 className="text-xl my-3 font-semibold text-[var(--black)]">Questions</h2>
//                             <p className="text-3xl my-2 text-[var(--lightGray)]">{QueCount}</p>
//                         </div>
//                         <div className="w-[60%] relative top-3 left-31">
//                             <Chart className="!min-h-auto" options={qOptions} series={qSeries} type="donut" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
//                 <div className="Three-cards">
//                     <div className="flex flex-row h-full">
//                         <div className="Content-names absolute">
//                             <h2 className="text-xl my-3 font-semibold text-[var(--black)]">Users</h2>
//                             <p className="text-3xl my-2 text-[var(--lightGray)]">{UserCount}</p>
//                         </div>
//                         <div className="w-[60%] h-[90%] relative top-3 left-20">
//                             <Chart
//                                 className="!min-h-auto"
//                                 options={userOptions}
//                                 series={userSeries}
//                                 type="bar"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
//                 <div className="Flex-Row Three-cards">
//                     <div className="Content-names">
//                         <h2 className="text-base font-semibold text-[var(--black)]">Users</h2>
//                         <p className="text-2xl my-2 text-[var(--lightGray)]">{UserCount}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default FirstCards

import React from "react";
import Chart from "react-apexcharts";

const FirstCards = ({ techCount, QueCount, UserCount, technologie, questions, User }) => {
    const activeCount = technologie.filter(t => t.status === "Active").length;
    // const inactiveCount = technologie.filter(t => t.status === "InActive").length;

    const techSeries = [{ data: [5, 8, 6, 10, 4, 7, activeCount] }];
    const techOptions = {
        chart: { type: "bar", sparkline: { enabled: true } },
        plotOptions: { bar: { columnWidth: "55%", borderRadius: 6 } },
        dataLabels: { enabled: false },
        tooltip: { enabled: true },
        colors: ["#3B82F6"]
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

    const Udata = [
        { name: "Pass", value: User.filter(u => u.examStatus === "Pass").length },
        { name: "Fail", value: User.filter(u => u.examStatus === "Fail").length },
        { name: "Not Attempted", value: User.filter(u => u.examStatus === "Not Attempted").length },
        { name: "Users", value: User.filter(u => u.role === "User").length },
        { name: "Moderators", value: User.filter(u => u.role === "Moderator").length },
        {
            name: "Average Score",
            value: User.length > 0
                ? Math.round(User.reduce((sum, u) => sum + (u.score || 0), 0) / User.length)
                : 0
        },
        {
            name: "Max Score",
            value: User.length > 0 ? Math.round(Math.max(...User.map(u => u.score || 0))) : 0
        },
        {
            name: "Min Score",
            value: User.length > 0 ? Math.round(Math.min(...User.map(u => u.score || 0))) : 0
        }
    ];

    const userSeries = [{ data: Udata.map(u => u.value) }];
    const userOptions = {
        chart: { type: "bar", toolbar: { show: false }, sparkline: { enabled: true }},
        plotOptions: { bar: { columnWidth: "60%", borderRadius: 6 }},
        dataLabels: { enabled: false },
        xaxis: { categories: ["Pass", "Fail", "Not Attempted", "Average Score", "Min Score", "Max Score", "Users", "Moderators"], labels: { show: false }},
        yaxis: { show: false },
        grid: { show: false },
        legend: { show: false },
        tooltip: { enabled: true },
        colors: ["#3b82f6"]
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="Card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 bg-[var(--white)] flex flex-col justify-between min-h-[220px]">
                <div className="mx-5">
                    <h2 className="text-lg font-semibold text-[var(--black)]">Technologies</h2>
                    <p className="text-3xl font-bold text-[var(--black)] mt-1">{techCount}</p>
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                    <Chart
                        // className="w-[70%]"
                        options={techOptions}
                        series={techSeries}
                        type="bar"
                        height={140}
                    />
                </div>
            </div>

            <div className="Card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 bg-[var(--white)] flex flex-col justify-between min-h-[220px]">
                <div className="mx-5">
                    <h2 className="text-lg font-semibold text-[var(--black)]">Questions</h2>
                    <p className="text-3xl font-bold text-[var(--black)] mt-1">{QueCount}</p>
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                    <Chart
                        options={qOptions}
                        series={qSeries}
                        type="donut"
                        height={160}
                    />
                </div>
            </div>

            <div className="Card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 bg-white flex flex-col justify-between min-h-[220px]">
                <div className="mx-5">
                    <h2 className="text-lg font-semibold text-[var(--black)]">Users</h2>
                    <p className="text-3xl font-bold text-[var(--black)] mt-1">{UserCount}</p>
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                    <Chart
                        options={userOptions}
                        series={userSeries}
                        type="bar"
                        height={140}
                    />
                </div>
            </div>
            {/* <div className="Card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 bg-white flex flex-col justify-between min-h-[220px]">
                <div className="mx-5">
                    <h2 className="text-lg font-semibold text-[var(--black)]">Users</h2>
                    <p className="text-3xl font-bold text-[var(--black)] mt-1">{UserCount}</p>
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                    <Chart
                        options={userOptions}
                        series={userSeries}
                        type="bar"
                        height={140}
                    />
                </div>
            </div> */}
        </div>

    );
};

export default FirstCards;