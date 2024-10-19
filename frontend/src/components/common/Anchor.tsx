import React from "react";
import { Link } from "react-router-dom";
import styles from "./Anchor.module.css";

type AnchorProps = {
  href?: string;
  text: string;
  className?: string;
};

const Anchor: React.FC<AnchorProps> = ({
  href: additonalHref,
  text,
  className: additionalClassNames,
}) => {
  const classNames = additionalClassNames ? ` ${additionalClassNames}` : "";
  const href = additonalHref ? `${additonalHref}` : "javascript:void(0)";

  return (
    <Link
      to={href}
      // thêm class after:bg-[] set màu underline
      className={`${styles.links} ${classNames} relative inline-block`}
    >
      {text}
    </Link>
  );
};

export default Anchor;
