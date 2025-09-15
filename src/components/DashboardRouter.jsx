import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Dashboard from "../Pages/DashboardPage";
import Technology from "../Pages/Technology";
import ManageQuestion from "../Pages/Questions";
import "../index.css"
import "../App.css"

const Themaincomponent = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/dashboard"
                    element={
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Dashboard />
                        </motion.div>
                    }
                />
                <Route
                    path="/technology"
                    element={
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Technology />
                        </motion.div>
                    }
                />
                <Route
                    path="/question"
                    element={
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ManageQuestion />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    )
}

export default Themaincomponent;