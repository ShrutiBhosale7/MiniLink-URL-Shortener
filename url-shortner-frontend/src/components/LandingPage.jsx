


import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background text-textPrimary lg:px-14 sm:px-8 px-4 pt-16">
      <div className="flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-bold font-roboto text-4xl sm:text-5xl text-white"
        >
          MiniLink 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-textSecondary text-sm mt-4 max-w-2xl"
        >
          MiniLink makes it fast and easy to create short, memorable links to
          share across platforms.
        </motion.p>

        <motion.button
          onClick={handleRedirect}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 px-6 py-2 bg-primary text-white rounded-md shadow hover:bg-blue-600"
        >
          Create Short Link
        </motion.button>
      </div>

      <div className="sm:pt-12 pt-8">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-bold text-2xl text-center"
        >
          Key Features
        </motion.p>

        <div className="pt-6 grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {["Simple URL Shortening", "Powerful Analytics", "Enhanced Security", "Fast and Reliable"].map((title, idx) => (
            <Card key={idx} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

