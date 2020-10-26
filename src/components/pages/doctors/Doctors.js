import React from "react";
import { motion } from "framer-motion";

const Doctors = ({ isVisible }) => {
  return (
    <div>
      Doctors page
      <motion.div animate={{ x: 150 }}>
        dddddddddddddddddd
        <br />
        ddddddddddddddddddddd
        <br />
        ddddddddddddddddddddd
      </motion.div>
      {/* <motion.div
        animate={{
          x: 140,
          y: 50,
          scale: 1,
          rotate: 0,
        }}
      >
        lorem15dddddddddddddddddd
      </motion.div> */}
    </div>
  );
};

export default Doctors;

// import { motion } from "framer-motion"

// export const MyComponent = ({ isVisible }) => (
//     <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
// )
