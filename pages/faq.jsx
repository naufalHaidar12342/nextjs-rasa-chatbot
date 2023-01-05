import { domAnimation, LazyMotion, m, motion } from "framer-motion";
import { useState } from "react";
import Layout from "../components/Layout";
import ScrollableLayout from "../components/ScrollableLayout";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout title="Frequently Asked Question">
      <style jsx>{`
        .linear-gradient-text {
          background: -webkit-linear-gradient(
            -90deg,
            #ffffff 59.92%,
            #c8940f 20%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <motion.div
        className="flex flex-col items-center"
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h2
          className="text-[50px] font-medium linear-gradient-text"
          style={{ fontWeight: 600 }}
        >
          Frequently Asked Question
        </h2>
        <div className="flex flex-col justify-center items-center space-y-5 pt-6">
          <m.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="flex justify-center items-center rounded-2xl w-[700px] h-28 p-5 bg-white"
          >
            <FaPlus className="text-3xl" />
            <h3 className="px-10 text-3xl"> How to start chatting?</h3>
            <m.div></m.div>
          </m.div>
        </div>
      </motion.div>
    </Layout>
  );
}
