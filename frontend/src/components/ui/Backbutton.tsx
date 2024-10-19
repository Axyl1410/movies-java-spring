import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface BackButtonProps {
  text?: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  text: additionalText,
  className: additionalClassNames,
}) => {
  const classNames = additionalClassNames ? `${additionalClassNames}` : "";
  const text = additionalText ? `${additionalText}` : "Trở về";

  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.key !== "default") navigate(-1);
    else navigate("/");
  };

  return (
    <button
      className={`${classNames} rounded-md px-3 py-2 transition-colors`}
      onClick={handleBack}
    >
      {text}
    </button>
  );
};

export default BackButton;
