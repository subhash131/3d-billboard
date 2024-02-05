"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./pixelTransition.module.css";
import { motion } from "framer-motion";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (i: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.1 * i },
  }),
  closed: (i: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.1 * i },
  }),
};

const PixelTransition = () => {
  const [amountOfBlocks, setAmountOfBlocks] = useState<number>(0);
  useEffect(() => {
    getBlocks();
  }, []);
  const getBlocks = () => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const amountOfBlocks = Math.ceil(innerHeight / blockSize);
    setAmountOfBlocks(amountOfBlocks);
  };
  const shuffle = (a: any[]) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };
  return (
    <div className={styles.pixelBackground}>
      {[...Array(amountOfBlocks)].map((_, j) => {
        return (
          <div className={styles.column} key={`column-${j}`}>
            {[...Array(amountOfBlocks)].map((_, i) => {
              return (
                <motion.div
                  className={`${styles.block}`}
                  key={`block-${i}`}
                  custom={i}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: Math.ceil(i * Math.random()),
                    repeat: 100,
                  }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                ></motion.div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PixelTransition;
