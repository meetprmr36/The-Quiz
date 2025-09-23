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
            width: 6,
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
        legend: { show: true },
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

    // const Udata = [
    //     { name: "Pass", value: User.filter(u => u.examStatus === "Pass").length },
    //     { name: "Fail", value: User.filter(u => u.examStatus === "Fail").length },
    //     { name: "Not Attempted", value: User.filter(u => u.examStatus === "Not Attempted").length },
    //     { name: "Users", value: User.filter(u => u.role === "User").length },
    //     { name: "Moderators", value: User.filter(u => u.role === "Moderator").length },
    //     {
    //         name: "Average Score",
    //         value: User.length > 0
    //             ? Math.round(User.reduce((sum, u) => sum + (u.score || 0), 0) / User.length)
    //             : 0
    //     },
    //     {
    //         name: "Max Score",
    //         value: User.length > 0 ? Math.round(Math.max(...User.map(u => u.score || 0))) : 0
    //     }
    // ];

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
        { name: "Moderators", value: User.filter(u => u.role === "Moderator").length },
        { name: "Users", value: User.filter(u => u.role === "User").length }
    ];


    const userSeries = [{ data: Udata.map(u => u.value) }];
    const userOptions = {
        chart: { type: "bar", toolbar: { show: false }, sparkline: { enabled: true } },
        plotOptions: { bar: { columnWidth: "60%", borderRadius: 6 } },
        dataLabels: { enabled: false },
        xaxis: { categories: ["Pass", "Fail", "Not Attempted", "Average Score", "Max Score", "Moderators", "Users"], labels: { show: false } },
        yaxis: { show: false },
        grid: { show: false },
        legend: { show: false },
        tooltip: { enabled: true },
        colors: ["#3b82f6"]
    };

    return (
        // <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        //     <div className="Card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 bg-[var(--white)] flex flex-col justify-between min-h-[220px]">
        //         <div className="">
        //             <h2 className="text-lg font-semibold text-[var(--black)]">Technologies</h2>
        //             <p className="text-3xl font-bold text-[var(--black)] mt-1">{techCount}</p>
        //         </div>
        //         <div className="flex-1 flex items-center justify-center w-full">
        //             <Chart
        //                 options={techOptions}
        //                 series={techSeries}
        //                 type="area"
        //                 height={140}
        //                 className="w-[70%]"
        //             />

        //         </div>
        //     </div>

        //     <div className="Card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 bg-[var(--white)] flex flex-col justify-between min-h-[220px]">
        //         <div className="mx-5">
        //             <h2 className="text-lg font-semibold text-[var(--black)]">Questions</h2>
        //             <p className="text-3xl font-bold text-[var(--black)] mt-1">{QueCount}</p>
        //         </div>
        //         <div className="flex-1 flex items-center justify-center w-full">
        //             <Chart
        //                 options={qOptions}
        //                 series={qSeries}
        //                 type="donut"
        //                 height={140}
        //             />
        //         </div>
        //     </div>

        //     <div className="Card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 bg-white flex flex-col justify-between min-h-[220px]">
        //         <div className="mx-5">
        //             <h2 className="text-lg font-semibold text-[var(--black)]">Users</h2>
        //             <p className="text-3xl font-bold text-[var(--black)] mt-1">{UserCount}</p>
        //         </div>
        //         <div className="flex-1 flex items-center justify-center w-full">
        //             <Chart
        //                 options={userOptions}
        //                 series={userSeries}
        //                 type="bar"
        //                 height={140}
        //                 className="w-[100%]"
        //             />
        //         </div>
        //     </div>
        // </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-[18px]">
            <div className="Card">
                <div>
                    <h2 className="text-lg font-semibold text-[var(--black)]">Technologies</h2>
                    <p className="text-3xl font-bold text-[var(--black)] mt-1">{techCount}</p>
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                    <Chart
                        options={techOptions}
                        series={techSeries}
                        type="area"
                        height={140}
                        className="w-[70%]"
                    />
                </div>
            </div>

            <div className="Card">
                <div>
                    <h2 className="text-lg font-semibold text-[var(--black)]">Questions</h2>
                    <p className="text-3xl font-bold text-[var(--black)] mt-1">{QueCount}</p>
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                    <Chart options={qOptions} series={qSeries} type="donut" height={140} />
                </div>
            </div>

            <div className="Card">
                <div>
                    <h2 className="text-lg font-semibold text-[var(--black)]">Users</h2>
                    <p className="text-3xl font-bold text-[var(--black)] mt-1">{UserCount}</p>
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                    <Chart
                        options={userOptions}
                        series={userSeries}
                        type="bar"
                        height={140}
                        className="w-[100%]"
                    />
                </div>
            </div>
        </div>


    );
};

export default FirstCards;