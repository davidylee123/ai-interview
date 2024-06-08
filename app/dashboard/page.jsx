import React from "react";
import AddNewInterview from "./_components/AddNewInterview";

function Dashboard() {
  return (
    <div className="p-10 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center mb-10">
        <h2 className="font-bold text-4xl mb-6">
          Create and Start your AI Mock Interview
        </h2>
      </div>
      <AddNewInterview />
    </div>
  );
}

export default Dashboard;
