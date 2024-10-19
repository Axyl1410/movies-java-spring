import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Skeleton.module.css";

interface SkeletonImageProps {
  src: string;
  height?: string;
  width?: string;
  className?: string;
}

export default function SkeletonImage({
  src,
  height = "16rem",
  width = "100%",
  className: additionalClassNames,
}: SkeletonImageProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);
  const classNames = additionalClassNames ? `${additionalClassNames}` : "";

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  return (
    <div
      className={`${pulsing ? styles.pulse : ""} ${styles.loadable}`}
      style={{ width: width, background: "#ccc" }}
    >
      <motion.img
        initial={{ height: "0px", opacity: 0 }}
        animate={{
          height: imageLoading ? height : "auto",
          opacity: imageLoading ? 0 : 1,
        }}
        transition={{
          height: { delay: 0, duration: 0.4 },
          opacity: { delay: 0.5, duration: 0.4 },
        }}
        onLoad={imageLoaded}
        src={src}
        className={classNames}
      />
    </div>
  );
}
