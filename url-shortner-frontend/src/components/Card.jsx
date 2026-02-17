// import React from "react";
// import { motion } from "framer-motion";
// const Card = ({ title, desc }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 120 }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className="shadow-md shadow-slate-400 border flex flex-col px-4 py-8  gap-3 rounded-sm"
//     >
//       <h1 className="text-slate-900 text-xl font-bold ">{title}</h1>
//       <p className="text-slate-700 text-sm"> {desc}</p>
//     </motion.div>
//   );
// };

// export default Card;


// ---------------------------------------------------------



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
