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
  // const [technologies, setTechnologies] = useState([
  //   { id: 1, name: "React", status: "Active", date: "2024-01-15" },
  //   { id: 2, name: "Node", status: "Active", date: "2024-01-16" },
  //   { id: 3, name: "Python", status: "InActive", date: "2024-01-17" },
  //   { id: 4, name: "MongoDB", status: "Active", date: "2024-01-18" },
  //   { id: 5, name: "Express", status: "Active", date: "2024-01-19" },
  //   { id: 6, name: "Django", status: "InActive", date: "2024-01-20" },
  //   { id: 7, name: "Angular", status: "Active", date: "2024-01-21" },
  //   { id: 8, name: "Vue", status: "Active", date: "2024-01-22" },
  //   { id: 9, name: "Java", status: "InActive", date: "2024-01-23" },
  //   { id: 10, name: "C#", status: "Active", date: "2024-01-24" },
  //   { id: 11, name: "Go", status: "Active", date: "2024-01-25" },
  //   { id: 12, name: "Rust", status: "InActive", date: "2024-01-26" },
  //   { id: 13, name: "PHP", status: "Active", date: "2024-01-27" },
  //   { id: 14, name: "Laravel", status: "Active", date: "2024-01-28" },
  //   { id: 15, name: "Spring Boot", status: "InActive", date: "2024-01-29" },
  //   { id: 16, name: "Kotlin", status: "Active", date: "2024-01-30" },
  //   { id: 17, name: "Swift", status: "Active", date: "2024-02-01" },
  //   { id: 18, name: "Flutter", status: "Active", date: "2024-02-02" },
  //   { id: 19, name: "Ruby on Rails", status: "InActive", date: "2024-02-03" },
  //   { id: 20, name: "TypeScript", status: "Active", date: "2024-02-04" }
  // ]);

  const [technologies, setTechnologies] = useState([]);
  useEffect(() => {
    const fetchTechnologies = async () => {
      const API_URL = 'https://56c1c9965cbd.ngrok-free.app/v1/technologies'
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


  const [questions, setQuestions] = useState([
    { id: 1, question: "What is React?", technology: "React", options: ["A JS library", "A framework", "A DB"], status: "Active" },
    { id: 2, question: "Explain Node.js event loop", technology: "Node", options: ["Async process", "Database engine"], status: "Active" },
    { id: 3, question: "What is Python used for?", technology: "Python", options: ["Web Dev", "AI/ML", "Both"], status: "InActive" },
    { id: 4, question: "What is MongoDB?", technology: "MongoDB", options: ["NoSQL DB", "Relational DB", "Graph DB"], status: "Active" },
    { id: 5, question: "What is Express.js?", technology: "Express", options: ["Frontend", "Backend framework"], status: "Active" },
    { id: 6, question: "What is Angular?", technology: "Angular", options: ["Frontend framework", "Database"], status: "Active" },
    { id: 7, question: "What is Vue.js?", technology: "Vue", options: ["Frontend library", "Frontend framework"], status: "Active" },
    { id: 8, question: "What is Java used for?", technology: "Java", options: ["Web apps", "Mobile apps", "Both"], status: "InActive" },
    { id: 9, question: "What is C# commonly used for?", technology: "C#", options: ["Game Dev", "Web Apps", "Both"], status: "Active" },
    { id: 10, question: "What is Django?", technology: "Django", options: ["Frontend", "Backend framework"], status: "InActive" },
    { id: 11, question: "What is Go used for?", technology: "Go", options: ["Concurrency", "Frontend", "Mobile"], status: "Active" },
    { id: 12, question: "What is Rust famous for?", technology: "Rust", options: ["Memory safety", "Game Dev"], status: "InActive" },
    { id: 13, question: "What is PHP?", technology: "PHP", options: ["Backend scripting", "Frontend framework"], status: "Active" },
    { id: 14, question: "What is Laravel?", technology: "Laravel", options: ["PHP framework", "DB tool"], status: "Active" },
    { id: 15, question: "What is Spring Boot?", technology: "Spring Boot", options: ["Java framework", "Testing library"], status: "InActive" },
    { id: 16, question: "What is Kotlin used for?", technology: "Kotlin", options: ["Android apps", "DB queries"], status: "Active" },
    { id: 17, question: "What is Swift?", technology: "Swift", options: ["iOS apps", "Web apps"], status: "Active" },
    { id: 18, question: "What is Flutter?", technology: "Flutter", options: ["Cross-platform apps", "DB framework"], status: "Active" },
    { id: 19, question: "What is Ruby on Rails?", technology: "Ruby on Rails", options: ["Ruby framework", "Frontend lib"], status: "InActive" },
    { id: 20, question: "What is TypeScript?", technology: "TypeScript", options: ["Superset of JS", "Backend language"], status: "Active" },
    { id: 21, question: "How does Virtual DOM work?", technology: "React", options: ["Diffing algo", "Shadow DOM"], status: "Active" },
    { id: 22, question: "What is middleware in Express?", technology: "Express", options: ["Request handler", "Template engine"], status: "Active" },
    { id: 23, question: "What is async/await?", technology: "JavaScript", options: ["Promise syntax", "Database query"], status: "Active" },
    { id: 24, question: "What is REST API?", technology: "Node", options: ["Architectural style", "Database"], status: "Active" },
    { id: 25, question: "What is GraphQL?", technology: "Node", options: ["API query language", "Frontend lib"], status: "InActive" },
  ]);

  // const [questions, setQuestions] = useState([])
  // useEffect(() => {
  //   const fetchquestions = async () => {
  //     const API_URL = 'https://56c1c9965cbd.ngrok-free.app/v1/questions/list'
  //     const token = import.meta.env.VITE_API_TOKEN;
  //     try {
  //       const { data } = await axios.get(
  //         API_URL,
  //         {
  //           headers: {
  //             Accept: 'application/json',
  //             'ngrok-skip-browser-warning': 'true',
  //             "Authorization": `Bearer ${token}`
  //           },
  //         }
  //       )
  //       console.log(data)
  //       if (
  //         data &&
  //         typeof data === 'object'
  //       ) {

  //         setQuestions(data?.data)
  //       } else {
  //         console.error(
  //           'API response data is not in the expected format:',
  //           data
  //         )
  //         setQuestions([])
  //       }
  //     } catch (error) {
  //       console.error('Error fetching technologies:', error)
  //     }
  //   }

  //   fetchquestions()
  // }, [])


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
  //     const API_URL = 'https://56c1c9965cbd.ngrok-free.app/v1/users'
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

  //         setUsers(data.data )
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
              transition={{ duration: 0.3 }}>
              <Dashboard
                tech={technologies}
                question={questions}
                users={users}
              />
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
              transition={{ duration: 0.3 }}
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
              transition={{ duration: 0.3 }}
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