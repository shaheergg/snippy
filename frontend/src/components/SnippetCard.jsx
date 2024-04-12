import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LangIndicator from "./LangIndicator";

const SnippetCard = () => {
  return (
    <Link
      to={"/dashboard"}
      className="block p-4 rounded-md cursor-pointer hover:bg-neutral-100"
    >
      <div>
        <div className="space-y-2">
          <span className="px-2 py-1 text-xs font-semibold border rounded-md">
            Public
          </span>
          <h2 className="text-lg font-semibold font-grotesk">
            Use Gemini API in Nodejs
          </h2>
          <p className="text-sm text-gray-600 font-grotesk">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget est
            euismod, ultricies justo nec, fermentum sem.
          </p>
        </div>
        <div className="flex items-center gap-4 pt-4">
          <div className="flex items-center gap-2 text-gray-600 font-grotesk">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              color={"currentColor"}
              fill={"none"}
            >
              <path
                d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M6.01734 8.74104C6.01734 10.4146 5.77537 12.1999 9.22051 11.9858H12.0053M17.9929 8.57654C18.1259 11.9858 16.9199 11.7651 15.7861 11.9858H12.0053M12.0053 15.7005V11.9858"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs font-semibold">1.2k</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-grotesk">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              color={"currentColor"}
              fill={"none"}
            >
              <path
                d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="pt-1 text-xs font-semibold">56.2k</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-grotesk">
            <LangIndicator language={"cpp"} />
            <span className="text-xs font-semibold ">Ruby</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SnippetCard;
