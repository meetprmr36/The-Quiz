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
  // const [technologies, setTechnologies] = useState([]);
  // useEffect(() => {
  //   const fetchTechnologies = async () => {
  //     const API_URL = `${import.meta.env.VITE_API_URL}v1/technologies`
  //     try {
  //       const { data } = await axios.get(
  //         API_URL,
  //         {
  //           headers: {
  //             Accept: 'application/json',
  //             'ngrok-skip-browser-warning': 'true',
  //           },
  //         }
  //       )
  //       if (
  //         data &&
  //         typeof data === 'object'
  //       ) {
  //         setTechnologies(data?.data)
  //       } else {
  //         console.error(
  //           'API response data is not in the expected format:',
  //           data
  //         )
  //         setTechnologies([])
  //       }
  //     } catch (error) {
  //       console.error('Error fetching technologies:', error)
  //     }
  //   }
  //   fetchTechnologies()
  // }, [])
  const [technologies, setTechnologies] = useState([
    { id: 1, name: "React", active: 1, createdAt: "2024-01-15" },
    { id: 2, name: "Node.js", active: 1, createdAt: "2024-01-16" },
    { id: 3, name: "MongoDB", active: 0, createdAt: "2024-01-17" },
    { id: 4, name: "JavaScript", active: 1, createdAt: "2024-01-18" },
    { id: 5, name: "Express.js", active: 1, createdAt: "2024-01-19" },
    { id: 6, name: "Next.js", active: 1, createdAt: "2024-01-20" },
    { id: 7, name: "Python", active: 0, createdAt: "2024-01-21" },
    { id: 8, name: "Django", active: 1, createdAt: "2024-01-22" },
    { id: 9, name: "Tailwind CSS", active: 1, createdAt: "2024-01-23" },
    { id: 10, name: "AWS", active: 1, createdAt: "2024-01-24" },
  ]);



  // const [questions, setQuestions] = useState([])
  // useEffect(() => {
  //   const fetchquestions = async () => {
  //     const API_URL = `${import.meta.env.VITE_API_URL}v1/questions/list`
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

  const [questions, setQuestions] = useState([
    {
      id: 1,
      technology: "React",
      question: "What is JSX?",
      difficulty: "Easy",
      active: 1,
      date: "2024-01-15",
      options: [
        { id: 1, option: "A templating syntax for JavaScript", isCorrect: 1 },
        { id: 2, option: "A database query language", isCorrect: 0 },
        { id: 3, option: "A CSS framework", isCorrect: 0 },
        { id: 4, option: "A Node.js module", isCorrect: 0 }
      ]
    },
    {
      id: 2,
      technology: "Node.js",
      question: "What is middleware?",
      difficulty: "Medium",
      active: 1,
      date: "2024-01-16",
      options: [
        { id: 1, option: "A function that handles requests before the final route", isCorrect: 1 },
        { id: 2, option: "A database connector", isCorrect: 0 },
        { id: 3, option: "A debugging tool", isCorrect: 0 },
        { id: 4, option: "A CSS preprocessor", isCorrect: 0 }
      ]
    },
    {
      id: 3,
      technology: "MongoDB",
      question: "What is a document in MongoDB?",
      difficulty: "Easy",
      active: 0,
      date: "2024-01-17",
      options: [
        { id: 1, option: "A JSON-like data structure", isCorrect: 1 },
        { id: 2, option: "A SQL table", isCorrect: 0 },
        { id: 3, option: "A CSS class", isCorrect: 0 },
        { id: 4, option: "An HTTP request", isCorrect: 0 }
      ]
    },
    {
      id: 4,
      technology: "JavaScript",
      question: "Explain event loop.",
      difficulty: "Hard",
      active: 1,
      date: "2024-01-18",
      options: [
        { id: 1, option: "Manages async operations in JS", isCorrect: 1 },
        { id: 2, option: "Loops through database entries", isCorrect: 0 },
        { id: 3, option: "Creates UI animations", isCorrect: 0 },
        { id: 4, option: "Handles API authentication", isCorrect: 0 }
      ]
    },
    {
      id: 5,
      technology: "Express.js",
      question: "What is express.json() used for?",
      difficulty: "Easy",
      active: 1,
      date: "2024-01-19",
      options: [
        { id: 1, option: "To parse JSON data from requests", isCorrect: 1 },
        { id: 2, option: "To set cookies", isCorrect: 0 },
        { id: 3, option: "To start a server", isCorrect: 0 },
        { id: 4, option: "To validate passwords", isCorrect: 0 }
      ]
    },
    {
      id: 6,
      technology: "Next.js",
      question: "What is server-side rendering?",
      difficulty: "Medium",
      active: 1,
      date: "2024-01-20",
      options: [
        { id: 1, option: "Rendering HTML on the server", isCorrect: 1 },
        { id: 2, option: "Rendering CSS in browser", isCorrect: 0 },
        { id: 3, option: "Serving static images", isCorrect: 0 },
        { id: 4, option: "Running background jobs", isCorrect: 0 }
      ]
    },
    {
      id: 7,
      technology: "Python",
      question: "What is a virtual environment?",
      difficulty: "Easy",
      active: 0,
      date: "2024-01-21",
      options: [
        { id: 1, option: "An isolated Python workspace", isCorrect: 1 },
        { id: 2, option: "An API endpoint", isCorrect: 0 },
        { id: 3, option: "A database replica", isCorrect: 0 },
        { id: 4, option: "A cloud hosting method", isCorrect: 0 }
      ]
    },
    {
      id: 8,
      technology: "Django",
      question: "What are Django models?",
      difficulty: "Medium",
      active: 1,
      date: "2024-01-22",
      options: [
        { id: 1, option: "Python classes that map to database tables", isCorrect: 1 },
        { id: 2, option: "HTML templates", isCorrect: 0 },
        { id: 3, option: "API routes", isCorrect: 0 },
        { id: 4, option: "Middleware functions", isCorrect: 0 }
      ]
    },
    {
      id: 9,
      technology: "Tailwind CSS",
      question: "What are utility classes?",
      difficulty: "Easy",
      active: 1,
      date: "2024-01-23",
      options: [
        { id: 1, option: "Classes that apply single-purpose styles", isCorrect: 1 },
        { id: 2, option: "React components", isCorrect: 0 },
        { id: 3, option: "API routes", isCorrect: 0 },
        { id: 4, option: "Node modules", isCorrect: 0 }
      ]
    },
    {
      id: 10,
      technology: "AWS",
      question: "What is EC2?",
      difficulty: "Medium",
      active: 1,
      date: "2024-01-24",
      options: [
        { id: 1, option: "A virtual server instance", isCorrect: 1 },
        { id: 2, option: "A database service", isCorrect: 0 },
        { id: 3, option: "A frontend framework", isCorrect: 0 },
        { id: 4, option: "An email service", isCorrect: 0 }
      ]
    }
  ]);



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