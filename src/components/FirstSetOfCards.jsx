// import React from "react";
// import Chart from "react-apexcharts";

// const FirstCards = ({ technologie, questions, User }) => {
//     const activeCount = technologie.filter(t => t.status === "Active").length;

//     const techSeries = [
//         {
//             name: "Technologies",
//             data: [5, 8, 6, 10, 4, 7, activeCount],
//         },
//     ];

//     const techOptions = {
//         chart: {
//             type: "area",
//             sparkline: { enabled: true },
//         },
//         stroke: {
//             curve: "smooth",
//             width: 3,
//         },
//         fill: {
//             type: "gradient",
//             gradient: {
//                 shadeIntensity: 0.8,
//                 opacityFrom: 0.7,
//                 opacityTo: 0.7,
//                 stops: [0, 80]
//             },
//         },
//         markers: { size: 0 },
//         tooltip: {
//             enabled: true,
//             x: { show: false },
//         },
//         colors: ["#3B82F6"],
//     };

//     const activeQCount = questions.filter(q => q.status === "Active").length;
//     const inactiveQCount = questions.filter(q => q.status === "InActive").length;

//     const qSeries = [activeQCount || 0, inactiveQCount || 0];
//     const qOptions = {
//         chart: { type: "donut", toolbar: { show: false } },
//         labels: ["Active", "Inactive"],
//         colors: ["#3B82F6", "#F87171"],
//         legend: { show: false },
//         dataLabels: { enabled: false },
//         tooltip: { enabled: true },
//         plotOptions: {
//             pie: {
//                 donut: {
//                     size: '80%',
//                     labels: {
//                         show: true,
//                         total: {
//                             show: true,
//                             showAlways: true,
//                             label: 'Total',
//                             fontSize: '12px',
//                             fontWeight: 500,
//                             color: 'var(--lightGray)',
//                             formatter: function (w) {
//                                 return w.globals.seriesTotals.reduce((a, b) => a + b, 0)
//                             }
//                         },
//                         value: {
//                             show: true,
//                             fontSize: '18px',
//                             fontWeight: 'bold',
//                             color: 'var(--black)',
//                             offsetY: 8,
//                             formatter: function (val) {
//                                 return val
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     };

//     const Udata = [
//         { name: "Pass", value: User.filter(u => u.examStatus === "Pass").length },
//         { name: "Fail", value: User.filter(u => u.examStatus === "Fail").length },
//         { name: "Not Attempted", value: User.filter(u => u.examStatus === "Not Attempted").length },
//         {
//             name: "Average Score",
//             value: User.length > 0
//                 ? Math.round(User.reduce((sum, u) => sum + (u.score || 0), 0) / User.length)
//                 : 0
//         },
//         {
//             name: "Max Score",
//             value: User.length > 0
//                 ? Math.max(...User.map(u => u.score || 0))
//                 : 0
//         },
//         { name: "Users", value: User.filter(u => u.role === "User").length }
//     ];


//     const userSeries = [{ data: Udata.map(u => u.value) }];
//     const userOptions = {
//         chart: { type: "bar", toolbar: { show: false }, sparkline: { enabled: true } },
//         plotOptions: { bar: { columnWidth: "30%", borderRadius: 2 } },
//         dataLabels: { enabled: false },
//         xaxis: { categories: ["Pass", "Fail", "Not Attempted", "Average Score", "Max Score", "Users"], labels: { show: false } },
//         yaxis: { show: false },
//         grid: { show: false },
//         legend: { show: false },
//         tooltip: { enabled: true },
//         colors: ["#3b82f6"]
//     };

//     const Pdata = [
//         { name: "Not Attempted", value: User.filter(u => u.examStatus === "Not Attempted").length },
//         {
//             name: "Average Score",
//             value: User.length > 0
//                 ? Math.max(User.reduce((sum, u) => sum + (u.score || 0), 0) / User.length)
//                 : 0
//         },
//         {
//             name: "Max Score",
//             value: User.length > 0
//                 ? Math.max(...User.map(u => u.score || 0))
//                 : 0
//         },
//         { name: "Users", value: User.filter(u => u.role === "User").length }
//     ];


//     const PerfSeries = [{ data: Pdata.map(u => u.value) }];
//     const PerfOptions = {
//         chart: { type: "bar", toolbar: { show: false }, sparkline: { enabled: true } },
//         plotOptions: { bar: { columnWidth: "30%", borderRadius: 2 } },
//         dataLabels: { enabled: false },
//         xaxis: { categories: ["Not Attempted", "Average Score", "Max Score", "Users"], labels: { show: false } },
//         yaxis: { show: false },
//         grid: { show: false },
//         legend: { show: false },
//         tooltip: { enabled: true },
//         colors: ["#3b82f6"]
//     };

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full my-6">
//             <div className="Card">
//                 <div className="Card-Names">
//                     <h2 className="text-sm font-medium text-gray-500 mb-1">Technologies</h2>
//                     <p className="text-4xl my-2 font-semibold text-[var(--black)]">
//                         {technologie.length}
//                     </p>
//                 </div>
//                 <div className="flex justify-end items-end w-full">
//                     <div className="w-[170px] h-[90px]">
//                         <Chart
//                             options={techOptions}
//                             series={techSeries}
//                             type="area"
//                             width="100%"
//                             height="100%"
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className="Card">
//                 <div className="Card-Names">
//                     <h2 className="text-sm font-medium text-gray-500 mb-1">Questions</h2>
//                     <p className="text-4xl my-2 font-semibold text-[var(--black)]">{questions.length}</p>
//                 </div>
//                 <div className="flex-1 flex justify-end w-full items-end">
//                     <div className="relative w-[110px] h-[100px]">
//                         <Chart
//                             options={qOptions}
//                             series={qSeries}
//                             type="donut"
//                             width="120px"
//                             height="110px"
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className="Card">
//                 <div className="Card-Names">
//                     <h2 className="text-sm font-medium text-gray-500 mb-1">Users</h2>
//                     <p className="text-4xl my-2 font-semibold text-[var(--black)]">{User.length}</p>
//                 </div>
//                 <div className="flex-1 flex justify-end items-end w-full">
//                     <div className="w-[160px] h-[100px]">
//                         <Chart
//                             options={userOptions}
//                             series={userSeries}
//                             type="bar"
//                             width="100%"
//                             height="100%"
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className="Card">
//                 <div className="Card-Names">
//                     <h2 className="text-sm font-medium text-gray-500 mb-1">Performance</h2>
//                     <p className="text-4xl my-2 font-semibold text-[var(--black)]">
//                         {User.length > 0
//                             ? Math.max(User.reduce((sum, u) => sum + (u.score || 0), 0) / User.length)
//                             : 0}%
//                     </p>
//                 </div>
//                 <div className="flex-1 flex justify-end items-end w-full">
//                     <div className="w-[110px] h-[100px]">
//                         <Chart
//                             options={PerfOptions}
//                             series={PerfSeries}
//                             type="bar"
//                             width="100%"
//                             height="100%"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default FirstCards;


import React, { useMemo, useState, useEffect } from "react";
import Chart from "react-apexcharts";

const FirstCards = ({ technologie, questions, User }) => {
    const [chartsReady, setChartsReady] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setChartsReady(true);
        }, 600);
        return () => clearTimeout(timer);
    }, []);


    const calculations = useMemo(() => {
        if (!technologie || !questions || !User) return null;

        const activeCount = technologie.filter(t => t.status === "Active").length;
        const activeQCount = questions.filter(q => q.status === "Active").length;
        const inactiveQCount = questions.filter(q => q.status === "InActive").length;

        const passCount = User.filter(u => u.examStatus === "Pass").length;
        const failCount = User.filter(u => u.examStatus === "Fail").length;
        const notAttemptedCount = User.filter(u => u.examStatus === "Not Attempted").length;
        const userRoleCount = User.filter(u => u.role === "User").length;

        const avgScore = User.length > 0
            ? Math.round(User.reduce((sum, u) => sum + (u.score || 0), 0) / User.length)
            : 0;
        const maxScore = User.length > 0
            ? Math.max(...User.map(u => u.score || 0))
            : 0;

        return {
            activeCount,
            activeQCount,
            inactiveQCount,
            passCount,
            failCount,
            notAttemptedCount,
            userRoleCount,
            avgScore,
            maxScore
        };
    }, [technologie, questions, User]);


    // const staticOptions = useMemo(() => ({
    //     tech: {
    //         chart: {
    //             type: "area",
    //             sparkline: { enabled: true },
    //             animations: { enabled: false }, // Disable all animations
    //             redrawOnParentResize: false,
    //             redrawOnWindowResize: false
    //         },
    //         stroke: { curve: "smooth", width: 3 },
    //         fill: {
    //             type: "gradient",
    //             gradient: {
    //                 shadeIntensity: 0.8,
    //                 opacityFrom: 0.7,
    //                 opacityTo: 0.7,
    //                 stops: [0, 80]
    //             },
    //         },
    //         markers: { size: 0 },
    //         tooltip: { enabled: true, x: { show: false } },
    //         colors: ["#3B82F6"],
    //     },
    //     questions: {
    //         chart: {
    //             type: "donut",
    //             toolbar: { show: false },
    //             animations: { enabled: false },
    //             redrawOnParentResize: false,
    //             redrawOnWindowResize: false
    //         },
    //         labels: ["Active", "Inactive"],
    //         colors: ["#3B82F6", "#F87171"],
    //         legend: { show: false },
    //         dataLabels: { enabled: false },
    //         tooltip: { enabled: true },
    //         plotOptions: {
    //             pie: {
    //                 donut: {
    //                     size: '80%',
    //                     labels: {
    //                         show: true,
    //                         total: {
    //                             show: true,
    //                             showAlways: true,
    //                             label: 'Total',
    //                             fontSize: '12px',
    //                             fontWeight: 500,
    //                             color: 'var(--lightGray)',
    //                             formatter: function (w) {
    //                                 return w.globals.seriesTotals.reduce((a, b) => a + b, 0)
    //                             }
    //                         },
    //                         value: {
    //                             show: true,
    //                             fontSize: '18px',
    //                             fontWeight: 'bold',
    //                             color: 'var(--black)',
    //                             offsetY: 8,
    //                             formatter: function (val) {
    //                                 return val
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     },
    //     users: {
    //         chart: {
    //             type: "bar",
    //             toolbar: { show: false },
    //             sparkline: { enabled: true },
    //             animations: { enabled: false },
    //             redrawOnParentResize: false,
    //             redrawOnWindowResize: false
    //         },
    //         plotOptions: { bar: { columnWidth: "30%", borderRadius: 2 } },
    //         dataLabels: { enabled: false },
    //         xaxis: { categories: ["Pass", "Fail", "Not Attempted", "Average Score", "Max Score", "Users"], labels: { show: false } },
    //         yaxis: { show: false },
    //         grid: { show: false },
    //         legend: { show: false },
    //         tooltip: { enabled: true },
    //         colors: ["#3b82f6"]
    //     },
    //     performance: {
    //         chart: {
    //             type: "bar",
    //             toolbar: { show: false },
    //             sparkline: { enabled: true },
    //             animations: { enabled: false },
    //             redrawOnParentResize: false,
    //             redrawOnWindowResize: false
    //         },
    //         plotOptions: { bar: { columnWidth: "30%", borderRadius: 2 } },
    //         dataLabels: { enabled: false },
    //         xaxis: { categories: ["Not Attempted", "Average Score", "Max Score", "Users"], labels: { show: false } },
    //         yaxis: { show: false },
    //         grid: { show: false },
    //         legend: { show: false },
    //         tooltip: { enabled: true },
    //         colors: ["#3b82f6"]
    //     }
    // }), []);

    const staticOptions = useMemo(() => ({
        tech: {
            chart: {
                type: "area",
                sparkline: { enabled: true },
                animations: {
                    enabled: true,
                    easing: "easeinout",
                    speed: 800,
                    animateGradually: { enabled: true, delay: 150 },
                    dynamicAnimation: { enabled: true, speed: 350 }
                }
            },
            stroke: { curve: "smooth", width: 3 },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 0.8,
                    opacityFrom: 0.7,
                    opacityTo: 0.7,
                    stops: [0, 80]
                },
            },
            markers: { size: 0 },
            tooltip: { enabled: true, x: { show: false } },
            colors: ["#3B82F6"],
        },

        questions: {
            chart: {
                type: "donut",
                toolbar: { show: false },
                animations: {
                    enabled: true,
                    easing: "easeinout",
                    speed: 800,
                    animateGradually: { enabled: true, delay: 150 },
                    dynamicAnimation: { enabled: true, speed: 350 }
                }
            },
            labels: ["Active", "Inactive"],
            colors: ["#3B82F6", "#F87171"],
            legend: { show: false },
            dataLabels: { enabled: false },
            tooltip: { enabled: true },
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
                                color: 'var(--lightGray)',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                                }
                            },
                            value: {
                                show: true,
                                fontSize: '18px',
                                fontWeight: 'bold',
                                color: 'var(--black)',
                                offsetY: 8,
                                formatter: function (val) {
                                    return val
                                }
                            }
                        }
                    }
                }
            }
        },

        users: {
            chart: {
                type: "bar",
                toolbar: { show: false },
                sparkline: { enabled: true },
                animations: {
                    enabled: true,
                    easing: "easeinout",
                    speed: 800,
                    animateGradually: { enabled: true, delay: 150 },
                    dynamicAnimation: { enabled: true, speed: 350 }
                }
            },
            plotOptions: { bar: { columnWidth: "35%", borderRadius: 3 } },
            dataLabels: { enabled: false },
            xaxis: { categories: ["Pass", "Fail", "Not Attempted", "Average Score", "Max Score", "Users"], labels: { show: false } },
            yaxis: { show: false },
            grid: { show: false },
            legend: { show: false },
            tooltip: { enabled: true },
            colors: ["#3b82f6"]
        },

        performance: {
            chart: {
                type: "bar",
                toolbar: { show: false },
                sparkline: { enabled: true },
                animations: {
                    enabled: true,
                    easing: "easeinout",
                    speed: 800,
                    animateGradually: { enabled: true, delay: 150 },
                    dynamicAnimation: { enabled: true, speed: 350 }
                }
            },
            plotOptions: { bar: { columnWidth: "35%", borderRadius: 3 } },
            dataLabels: { enabled: false },
            xaxis: { categories: ["Not Attempted", "Average Score", "Max Score", "Users"], labels: { show: false } },
            yaxis: { show: false },
            grid: { show: false },
            legend: { show: false },
            tooltip: { enabled: true },
            colors: ["#3b82f6"]
        }
    }), []);


    if (!calculations || !chartsReady) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full my-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="Card">
                        <div className="Card-Names">
                            <div className="h-4 bg-gray-200 rounded w-20 mb-2 animate-pulse"></div>
                            <div className="h-10 bg-gray-200 rounded w-12 mb-1 animate-pulse"></div>
                            <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
                        </div>
                        <div className="flex justify-end items-end w-full">
                            <div className="w-[110px] h-[90px] bg-gray-100 rounded animate-pulse"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full my-3">
            <div className="Card">
                <div className="Card-Names">
                    <h2 className="text-sm font-medium text-gray-500 mb-1">Technologies</h2>
                    <p className="text-4xl my-2 font-semibold text-[var(--black)]">
                        {technologie.length}
                    </p>
                    <p className="text-xs text-gray-400">Coverage</p>
                </div>
                <div className="flex justify-end items-end w-full">
                    <div className="w-[170px] h-[90px]">
                        <Chart
                            key="tech-chart"
                            options={staticOptions.tech}
                            series={[{
                                name: "Technologies",
                                data: [5, 8, 6, 10, 4, 7, calculations.activeCount],
                            }]}
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
                    <p className="text-4xl my-2 font-semibold text-[var(--black)]">
                        {questions.length}
                    </p>
                    <p className="text-xs text-gray-400">Quality</p>
                </div>
                <div className="flex-1 flex justify-end w-full items-end">
                    <div className="relative w-[110px] h-[100px]">
                        <Chart
                            key="questions-chart"
                            options={staticOptions.questions}
                            series={[calculations.activeQCount || 0, calculations.inactiveQCount || 0]}
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
                    <p className="text-4xl my-2 font-semibold text-[var(--black)]">
                        {User.length}
                    </p>
                    <p className="text-xs text-gray-400">Growth</p>
                </div>
                <div className="flex-1 flex justify-end items-end w-full">
                    <div className="w-[160px] h-[100px]">
                        <Chart
                            key="users-chart"
                            options={staticOptions.users}
                            series={[{
                                data: [
                                    calculations.passCount,
                                    calculations.failCount,
                                    calculations.notAttemptedCount,
                                    calculations.avgScore,
                                    calculations.maxScore,
                                    calculations.userRoleCount
                                ]
                            }]}
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
                    <p className="text-4xl my-2 font-semibold text-[var(--black)]">
                        {calculations.avgScore}%
                    </p>
                    <p className="text-xs text-gray-400">Trending</p>
                </div>
                <div className="flex-1 flex justify-end items-end w-full">
                    <div className="w-[110px] h-[100px]">
                        <Chart
                            key="performance-chart"
                            options={staticOptions.performance}
                            series={[{
                                data: [
                                    calculations.notAttemptedCount,
                                    calculations.avgScore,
                                    calculations.maxScore,
                                    calculations.userRoleCount
                                ]
                            }]}
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