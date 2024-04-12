import React from "react";
import { Button } from "./ui/button";

const EmptyState = ({ text, buttonText }) => {
  return (
    <div className="w-full min-h-[40vh] flex flex-col gap-8 items-center justify-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={50}
          height={50}
          color={"currentColor"}
          fill={"none"}
          className="text-primary"
        >
          <path
            d="M6.08938 14.999C5.71097 14.1484 5.5 13.2021 5.5 12.2049C5.5 8.50135 8.41015 5.49902 12 5.49902C15.5899 5.49902 18.5 8.50135 18.5 12.2049C18.5 13.2021 18.289 14.1484 17.9106 14.999"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 1.99902V2.99902"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 11.999H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 11.999H2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.0704 4.92773L18.3633 5.63484"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.6368 5.63582L4.92969 4.92871"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.517 19.3055C15.5274 18.9786 15.9326 18.0538 16.0466 17.1236C16.0806 16.8458 15.852 16.6152 15.572 16.6152L8.47685 16.6154C8.18725 16.6155 7.95467 16.8612 7.98925 17.1488C8.1009 18.0771 8.3827 18.7553 9.45345 19.3055M14.517 19.3055C14.517 19.3055 9.62971 19.3055 9.45345 19.3055M14.517 19.3055C14.3955 21.2505 13.8338 22.0207 12.0068 21.9991C10.0526 22.0352 9.60303 21.0831 9.45345 19.3055"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h2 className="max-w-sm text-xl font-semibold text-center text-primary font-grotesk">
          {text}
        </h2>
      </div>
      <div>
        <Button variant="outline" size="sm">
          <span className="text-primary">{buttonText}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={18}
            height={18}
            color={"currentColor"}
            fill={"none"}
            className="inline-block ml-2 text-primary"
          >
            <path
              d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
