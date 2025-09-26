// import React, { useState } from "react";
// import TechnologyTable from "./TechnologyTable";
// import AddButton from "./AddButton";
// import { IoMdClose } from "react-icons/io";
// import { IoIosSave } from "react-icons/io";

// const ManageTechnology = ({ technologies, setTechnologies, questions }) => {

//   const [showForm, setShowForm] = useState(false);
//   const [techName, setTechName] = useState("");
//   const [status, setStatus] = useState("Active");


//   const handleReset = () => {
//     setTechName("");
//     setStatus("Active");
//   };


//   // const handleSave = () => {
//   //   if (!techName.trim()) {
//   //     alert("Technology name required!");
//   //     return;
//   //   } else if (technologies.some(tech => tech.name.toLowerCase() === techName.toLowerCase())) {
//   //     alert("Technology already exists!");
//   //     return;
//   //   }

//   // const handleSave = () => {
//   //   if (!techName.trim()) {
//   //     alert("Technology name required!");
//   //     return;
//   //   }

//   //   if (technologies.some(tech => tech.name.toLowerCase() === techName.toLowerCase())) {
//   //     alert("Technology already exists!");
//   //     return;
//   //   }

//   //   const newTech = {
//   //     id: technologies.length + 1,
//   //     name: techName,
//   //     status: "Active",
//   //     date: new Date().toISOString().split("T")[0]
//   //   };

//   //   setTechnologies(prev => [...prev, newTech]);
//   //   setShowForm(false);
//   // };

//   const handleSave = () => {
//     if (!techName.trim()) {
//       alert("Technology name required!");
//       return;
//     }

//     // Check if technology name already exists (excluding current item when editing)
//     if (technologies.some(tech =>
//       tech.name.toLowerCase() === techName.toLowerCase() &&
//       tech.id !== editingId // Exclude current item when editing
//     )) {
//       alert("Technology already exists!");
//       return;
//     }

//     if (editingId) {
//       // Edit mode - update existing technology
//       setTechnologies(prev =>
//         prev.map(tech =>
//           tech.id === editingId
//             ? { ...tech, name: techName } // Keep other properties, update name
//             : tech
//         )
//       );
//     } else {
//       // Add mode - create new technology
//       const newTech = {
//         id: technologies.length + 1,
//         name: techName,
//         status: "Active",
//         date: new Date().toISOString().split("T")[0]
//       };
//       setTechnologies(prev => [...prev, newTech]);
//     }

//     // Reset form state
//     setShowForm(false);
//     setTechName(""); // Clear the input
//     setEditingId(null); // Clear editing state
//   };


//   const handleDelete = (id) => {
//     setTechnologies(technologies.filter((tech) => tech.id !== id));
//   };

//   const handleEdit = (id) => {
//     const techToEdit = technologies.find((tech) => tech.id === id);
//     if (techToEdit) {
//       setTechName(techToEdit.name);
//       setStatus(techToEdit.status);
//       setShowForm(true);
//     }
//   }


//   const handleBack = () => {
//     handleReset();
//     setShowForm(false);
//   };

//   return (
//     <div className="px-6 py-3 bg-[var(--white)] text-[var(--black)]">
//       <div className="my-5">
//         <div className="flex justify-between mb-4">
//           <h2 className="text-4xl font-semibold">Manage Technology</h2>
//         </div>
//         <div className="flex justify-between items-baseline mb-4">
//           <p className="text-lg items-center text-[var(--lightGray)]">
//             Create and manage technology categories for your quizzes
//           </p>
//           <AddButton onAdd={() => setShowForm(true)} Name="Add Technology" />
//         </div>
//         <TechnologyTable data={technologies} quest={questions} onDelete={handleDelete} onEdit={handleEdit} />
//       </div>

//       {showForm && (
//         <div className="Technology-form-model fixed inset-0 flex items-center justify-center z-50 animate-fadeIn">

//           <div className="Technology-form max-w-xl my-5 bg-[var(--white)] text-[var(--black)] p-6 rounded-lg shadow">

//             <div className="mb-3 flex justify-between items-center">
//               <h1 className="text-2xl font- text-[var(--black)]">Add Technology</h1>
//               <button onClick={handleBack} className="px-3 text-[var(--black)] cursor-pointer text-2xl">
//                 <IoMdClose />
//               </button>
//             </div>
//             <p className="text-[var(--lightGray)] text-left text-sm mb-6">
//               Create a new technology category for quiz questions
//             </p>

//             <div className="mb-8">
//               <label className="block text-[var(--black)] mb-3 text-left font-medium mb-1">
//                 Technology Name <span className="text-red-500 text-2xl">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={techName}
//                 onChange={(e) => setTechName(e.target.value)}
//                 placeholder="e.g., React.js, Node.js, Python"
//                 className="w-full border border-[var(--lightGray)] rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--accent)] focus:outline-none bg-[var(--gray)] text-[var(--black)]"
//               />
//             </div>

//             <div className="mb-8">
//               <label className="block text-[var(--black)] font-medium mb-2 text-left">Status</label>
//               <div className="flex items-center space-x-6">
//                 <label className="flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     name="status"
//                     value="Active"
//                     checked={status === "Active"}
//                     onChange={() => setStatus("Active")}
//                     className="text-blue-600 focus:ring-blue-500"
//                   />
//                   <span className="text-[var(--lightGray)]">Active</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     name="status"
//                     value="InActive"
//                     checked={status === "InActive"}
//                     onChange={() => setStatus("InActive")}
//                     className="text-blue-600 focus:ring-blue-500"
//                   />
//                   <span className="text-[var(--lightGray)]">Inactive</span>
//                 </label>
//               </div>
//             </div>

//             <div className="flex space-x-3">
//               <button
//                 onClick={handleSave}
//                 className="bg-[var(--bitlightblue)] text-white px-4 py-2 rounded-md flex flex-row items-center cursor-pointer"
//               >
//                 <span className="px-2">
//                   <IoIosSave />
//                 </span>
//                 Save Technology
//               </button>
//               <button
//                 onClick={handleReset}
//                 className="bg-[var(--gray)] text-[var(--black)] px-4 py-2 rounded-md cursor-pointer">
//                 Reset
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>

//   );
// };

// export default ManageTechnology;


import React, { useState } from "react";
import TechnologyTable from "./TechnologyTable";
import AddButton from "./AddButton";
import { IoMdClose,IoIosSave } from "react-icons/io";

const ManageTechnology = ({ technologies, setTechnologies, questions }) => {

  const [showForm, setShowForm] = useState(false);
  const [techName, setTechName] = useState("");
  const [status, setStatus] = useState("Active");
  const [editingId, setEditingId] = useState(null);

  const handleReset = () => {
    setTechName("");
    setStatus("Active");
    setEditingId(null);
  };

  const handleSave = () => {
    if (!techName.trim()) {
      alert("Technology name required!");
      return;
    }
    if (technologies.some(tech =>
      tech.name.toLowerCase() === techName.toLowerCase() &&
      tech.id !== editingId
    )) {
      alert("Technology already exists!");
      return;
    }

    if (editingId) {
      setTechnologies(prev =>
        prev.map(tech =>
          tech.id === editingId
            ? { ...tech, name: techName, status: status }
            : tech
        )
      );
    } else {
      const newTech = {
        id: technologies.length + 1,
        name: techName,
        status: status,
        date: new Date().toISOString().split("T")[0]
      };
      setTechnologies(prev => [...prev, newTech]);
    }

    setShowForm(false);
    setTechName("");
    setStatus("Active");
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setTechnologies(technologies.filter((tech) => tech.id !== id));
  };

  const handleEdit = (id) => {
    const techToEdit = technologies.find((tech) => tech.id === id);
    if (techToEdit) {
      setTechName(techToEdit.name);
      setStatus(techToEdit.status);
      setEditingId(id);
      setShowForm(true);
    }
  };

  const handleBack = () => {
    handleReset();
    setShowForm(false);
  };

  return (
    <div className="px-6 py-3 bg-[var(--white)] text-[var(--black)]">
      <div className="my-5">
        <div className="flex justify-between mb-4">
          <h2 className="text-4xl font-semibold">Manage Technology</h2>
        </div>
        <div className="flex justify-between items-baseline mb-4">
          <p className="text-lg items-center text-[var(--lightGray)]">
            Create and manage technology categories for your quizzes
          </p>
          <AddButton onAdd={() => setShowForm(true)} Name="Add Technology" />
        </div>
        <TechnologyTable data={technologies} quest={questions} onDelete={handleDelete} onEdit={handleEdit} />
      </div>

      {showForm && (
        <div className="Technology-form-model fixed inset-0 flex items-center justify-center z-50 animate-fadeIn">

          <div className="Technology-form max-w-xl my-5 bg-[var(--white)] text-[var(--black)] p-6 rounded-lg shadow">

            <div className="mb-3 flex justify-between items-center">
              <h1 className="text-2xl font- text-[var(--black)]">
                {editingId ? "Edit Technology" : "Add Technology"}
              </h1>
              <button onClick={handleBack} className="px-3 text-[var(--black)] cursor-pointer text-2xl">
                <IoMdClose />
              </button>
            </div>
            <p className="text-[var(--lightGray)] text-left text-sm mb-6">
              {editingId ? "Update the technology category" : "Create a new technology category for quiz questions"}
            </p>

            <div className="mb-8">
              <label className="block text-[var(--black)] mb-3 text-left font-medium mb-1">
                Technology Name <span className="text-red-500 text-2xl">*</span>
              </label>
              <input
                type="text"
                value={techName}
                onChange={(e) => setTechName(e.target.value)}
                placeholder="e.g., React.js, Node.js, Python"
                className="w-full border border-[var(--lightGray)] rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--accent)] focus:outline-none bg-[var(--gray)] text-[var(--black)]"
              />
            </div>

            <div className="mb-8">
              <label className="block text-[var(--black)] font-medium mb-2 text-left">Status</label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={status === "Active"}
                    onChange={() => setStatus("Active")}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-[var(--lightGray)]">Active</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value="InActive"
                    checked={status === "InActive"}
                    onChange={() => setStatus("InActive")}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-[var(--lightGray)]">Inactive</span>
                </label>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleSave}
                className="bg-[var(--bitlightblue)] text-white px-4 py-2 rounded-md flex flex-row items-center cursor-pointer"
              >
                <span className="px-2">
                  <IoIosSave />
                </span>
                {editingId ? "Update Technology" : "Save Technology"}
              </button>
              <button
                onClick={handleReset}
                className="bg-[var(--gray)] text-[var(--black)] px-4 py-2 rounded-md cursor-pointer">
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default ManageTechnology;
