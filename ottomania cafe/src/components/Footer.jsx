import React from "react";

const Footer = () => {
  return (
    <div className="mx-8 mt-8 text-white p-4  text-sm border-t-1">
      <div className="flex"></div>{" "}
      {/*Facebook instagram X vs. sosyal medya linkleri */}
      <div className="text-center">
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
