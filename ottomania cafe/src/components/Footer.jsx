import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = ({ cafeName, instagramlink, instagramad }) => {
  return (
    <div className="mx-8 mt-8 text-white p-4  text-sm border-t-2 border-[#5C3828]">
      <div className="flex"></div>{" "}
      {/*Facebook instagram X vs. sosyal medya linkleri */}
      <div className="text-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <a
            href={instagramlink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-500"
          >
            <FaInstagram /> {instagramad || cafeName}
          </a>
        </div>
        <div>{cafeName}</div>
        <p>© {new Date().getFullYear()} Tüm Hakları Saklıdır.</p>
        <p>
          Bu site{" "}
          <a
            href="https://github.com/seninprofilin"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Senin Adın
          </a>{" "}
          tarafından yapılmıştır.
        </p>
      </div>
    </div>
  );
};

export default Footer;
