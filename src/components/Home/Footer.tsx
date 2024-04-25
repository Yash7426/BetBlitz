import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center items-center px-5 mt-5 mb-2 lg:px-36">
      <div className="w-full">
        <span className="font-semibold">
          © BetBlitz {new Date().getFullYear()}.{" "}
        </span>
        <span className="font-light">
          Made with ❤️  by{" "}
          <a
            href="https://diwashdahal.com.np"
            target="_blank"
            className="text-primary"
          >
            BetBlitz Team
          </a>
          .
        </span>
      </div>
    </footer>
  );
}

export default Footer;
