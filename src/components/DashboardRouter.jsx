import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Dashboard from "../Pages/DashboardPage";
import ManageTechnology from "./ManageTechology";
import ManageQuestion from "./ManageQuestion";
import ManageUser from "./ManageUser";
import axios from "axios";

const Themaincomponent = () => {
  const location = useLocation();
  const [technologies, setTechnologies] = useState([]);
  useEffect(() => {
    const fetchTechnologies = async () => {
      const API_URL = `${import.meta.env.VITE_API_URL}v1/technologies`
      try {
        const { data } = await axios.get(
          API_URL,
          {
            headers: {
              Accept: 'application/json',
              'ngrok-skip-browser-warning': 'true',
            },
          }
        )
        if (
          data &&
          typeof data === 'object'
        ) {
          setTechnologies(data?.data)
        } else {
          console.error(
            'API response data is not in the expected format:',
            data
          )
          setTechnologies([])
        }
      } catch (error) {
        console.error('Error fetching technologies:', error)
      }
    }
    fetchTechnologies()
  }, [])

  const [questions, setQuestions] = useState([])
  useEffect(() => {
    const fetchquestions = async () => {
      const API_URL = `${import.meta.env.VITE_API_URL}v1/questions/list`
      const token = import.meta.env.VITE_API_TOKEN;
      try {
        const { data } = await axios.get(
          API_URL,
          {
            headers: {
              Accept: 'application/json',
              'ngrok-skip-browser-warning': 'true',
              "Authorization": `Bearer ${token}`
            },
          }
        )
        if (
          data &&
          typeof data === 'object'
        ) {

          setQuestions(data?.data)
        } else {
          console.error(
            'API response data is not in the expected format:',
            data
          )
          setQuestions([])
        }
      } catch (error) {
        console.error('Error fetching technologies:', error)
      }
    }

    fetchquestions()
  }, [])


  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", date: "2024-01-15", examStatus: "Pass", score: 10 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active", date: "2024-01-16", examStatus: "Fail", score: 8 },
    { id: 3, name: "Alex Johnson", email: "alex@example.com", role: "Moderator", status: "InActive", date: "2024-01-17", examStatus: "Not Attempted", score: null },
    { id: 4, name: "Emily Brown", email: "emily@example.com", role: "User", status: "Active", date: "2024-01-18", examStatus: "Pass", score: 13 },
    { id: 5, name: "Michael Lee", email: "michael@example.com", role: "User", status: "Active", date: "2024-01-19", examStatus: "Pass", score: 9 },
    { id: 6, name: "Sophia Wilson", email: "sophia@example.com", role: "Admin", status: "InActive", date: "2024-01-20", examStatus: "Fail", score: 13 },
    { id: 7, name: "Daniel Martinez", email: "daniel@example.com", role: "User", status: "Active", date: "2024-01-21", examStatus: "Pass", score: 15 },
    { id: 8, name: "Olivia Garcia", email: "olivia@example.com", role: "Moderator", status: "Active", date: "2024-01-22", examStatus: "Pass", score: 10 },
    { id: 9, name: "James Miller", email: "james@example.com", role: "User", status: "InActive", date: "2024-01-23", examStatus: "Not Attempted", score: 6 },
    { id: 10, name: "Ava Davis", email: "ava@example.com", role: "User", status: "Active", date: "2024-01-24", examStatus: "Fail", score: 12 },
  ]);
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const API_URL = `${import.meta.env.VITE_API_URL}v1/users`
  //     const token = import.meta.env.VITE_API_TOKEN;
  //     try {
  //       const { data } = await axios.get(
  //         API_URL,
  //         {
  //           headers: {
  //             "ngrok-skip-browser-warning": "true",
  //             "Authorization": `Bearer ${token}`
  //           },
  //         }
  //       )
  //       if (
  //         data &&
  //         typeof data === 'object'
  //       ) {
  //         setUsers(data.data)
  //       } else {
  //         console.error(
  //           'API response data is not in the expected format:',
  //           data
  //         )
  //         setUsers([])
  //       }
  //     } catch (error) {
  //       console.error('Error fetching users:', error)
  //     }
  //   }

  //   fetchUsers()
  // }, [])


  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/dashboard"
          element={
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}>
              <Dashboard
                tech={technologies}
                question={questions}
                users={users} />
            </motion.div>
          }
        />
        <Route
          path="/technology"
          element={
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ManageTechnology
                technologies={technologies}
                questions={questions}
                setTechnologies={setTechnologies}
              />
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
              transition={{ duration: 0.4 }}
            >
              <ManageQuestion
                technologies={technologies}
                questions={questions}
                setQuestions={setQuestions}
              />
            </motion.div>
          }
        />
        <Route
          path="/User"
          element={
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ManageUser
                Users={users}
                setUsers={setUsers}
              />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default Themaincomponent;