import React from "react";
import { motion, Transition, SVGMotionProps } from "framer-motion";

const MenuButton = ({ isOpen = false }) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 9,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -9,
    },
  };

  return (
    <div style={{ height: "max-content" }} className="mt-auto mb-auto">
      <motion.div className="flex flex-col content-center h-100 gap-y-1">
        <motion.div
          className="w-10 bg-gray-300 mt-auto"
          style={{ height: "5px" }}
          variants={top}
          animate={variant}
        ></motion.div>
        <motion.div
          className="w-10 bg-gray-300"
          style={{ height: "5px" }}
          variants={center}
          animate={variant}
        ></motion.div>
        <motion.div
          className="w-10 bg-gray-300 mb-auto"
          style={{ height: "5px" }}
          variants={bottom}
          animate={variant}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export { MenuButton };
