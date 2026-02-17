import React from "react";
import { motion } from "framer-motion";

const Card = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="shadow-md border border-borderColor px-4 py-6 rounded-sm bg-surface text-white text-center"
    >
      <h1 className="text-xl font-bold">{title}</h1>
    </motion.div>
  );
};

export default Card;
