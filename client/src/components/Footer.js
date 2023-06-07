import React from "react";

const Footer = ({dark}) => {
  return (
    <footer >
      <div className={`flex flex-wrap items-center justify-between text-[12px] py-4 border-t-4  ${dark ? 'border-[#282c3a]':'border-[#dddddd]'} text-[#6b6a6d] px-8`}>
        <div>Copyright © 2019 &nbsp; &nbsp; HodlInfo.com</div>
        <div>Support</div>
      </div>
    </footer>
  );
};

export default Footer;
