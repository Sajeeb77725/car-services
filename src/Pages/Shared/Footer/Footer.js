import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright &copy; <span>{currentYear}</span>
      </p>
    </footer>
  );
};

export default Footer;
