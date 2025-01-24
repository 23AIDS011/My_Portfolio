import React from "react";

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
