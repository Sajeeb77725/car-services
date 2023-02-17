import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center mt-5">
      <p>
        Copyright &copy; <span>{currentYear}</span>
      </p>
    </footer>
  );
};

export default Footer;
