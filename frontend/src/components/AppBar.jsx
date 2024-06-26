import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import AppDropdown from "./AppDropdown";
import { formatNumber } from "@/lib/utils";
import { useAuthStore } from "@/store/auth";
import AddSnippetDialog from "./AddSnippetDialog";

const AppBar = () => {
  const logout = useAuthStore((state) => state.logout);
  const items = [
    {
      id: 1,
      label: "Profile",
      to: "/profile",
      type: "link",
    },
    {
      id: 2,
      label: "Settings",
      to: "/settings",
      type: "link",
    },
    {
      id: 3,
      label: "Logout",
      type: "button",
      action: logout,
    },
  ];
  return (
    <div className="sticky top-0 flex items-center justify-between p-4 bg-white border-b border-border">
      <div className="flex items-center gap-8">
        <Logo />
        <div className="items-center hidden gap-2 p-1 rounded-full md:flex bg-neutral-100">
          <Link
            to="/home"
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-primary text-neutral-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={18}
              height={18}
              color={"currentColor"}
              fill={"none"}
            >
              <path
                d="M15.0001 17C14.2006 17.6224 13.1504 18 12.0001 18C10.8499 18 9.79965 17.6224 9.00012 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            Home
          </Link>
          <Link
            to="/home"
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-full hover:bg-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={18}
              height={18}
              color={"currentColor"}
              fill={"none"}
            >
              <circle
                cx="12"
                cy="10"
                r="7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <ellipse
                cx="12"
                cy="10"
                rx="4"
                ry="3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 13C3.34315 13 2 11.6569 2 10C2 8.34315 2 7 5 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 13C20.6569 13 22 11.6569 22 10C22 8.34315 22 7 19 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 7V3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M18 21C18.5523 21 19 20.5523 19 20C19 18.3431 17.6569 17 16 17H8C6.34315 17 5 18.3431 5 20C5 20.5523 5.44772 21 6 21H18Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Explore
          </Link>{" "}
          <Link
            to="/home"
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-full hover:bg-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={18}
              height={18}
              color={"currentColor"}
              fill={"none"}
            >
              <path
                d="M9 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 15.7612 22 17.5167 21.1573 18.7779C20.7926 19.3238 20.3238 19.7926 19.7779 20.1573C18.5167 21 16.7612 21 13.25 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M15.5 12L16.4199 12.7929C16.8066 13.1262 17 13.2929 17 13.5C17 13.7071 16.8066 13.8738 16.4199 14.2071L15.5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 12L7.58009 12.7929C7.19337 13.1262 7 13.2929 7 13.5C7 13.7071 7.19336 13.8738 7.58009 14.2071L8.5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 11L11 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Snippets
          </Link>{" "}
          <Link
            to="/home"
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-full hover:bg-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={18}
              height={18}
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
            Forks
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <AddSnippetDialog>
          <Button className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={20}
              height={20}
              color={"currentColor"}
              fill={"none"}
            >
              <path
                d="M11 22C10.1818 22 9.40019 21.6698 7.83693 21.0095C3.94564 19.3657 2 18.5438 2 17.1613C2 16.7742 2 10.0645 2 7M11 22L11 11.3548M11 22C11.7248 22 12.293 21.7409 13.5 21.2226M20 7V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 17.5H22M18.5 21L18.5 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M7.32592 9.69138L4.40472 8.27785C2.80157 7.5021 2 7.11423 2 6.5C2 5.88577 2.80157 5.4979 4.40472 4.72215L7.32592 3.30862C9.12883 2.43621 10.0303 2 11 2C11.9697 2 12.8712 2.4362 14.6741 3.30862L17.5953 4.72215C19.1984 5.4979 20 5.88577 20 6.5C20 7.11423 19.1984 7.5021 17.5953 8.27785L14.6741 9.69138C12.8712 10.5638 11.9697 11 11 11C10.0303 11 9.12883 10.5638 7.32592 9.69138Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12L7 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 4L6 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-2">Create Snippet</span>
          </Button>
        </AddSnippetDialog>
        <span className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-neutral-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
            color={"currentColor"}
            fill={"none"}
          >
            <path
              d="M13.8561 22C26.0783 19 19.2338 7 10.9227 2C9.9453 5.5 8.47838 6.5 5.54497 10C1.66121 14.6339 3.5895 20 8.96719 22C8.1524 21 6.04958 18.9008 7.5 16C8 15 9 14 8.5 12C9.47778 12.5 11.5 13 12 15.5C12.8148 14.5 13.6604 12.4 12.8783 10C19 14.5 16.5 19 13.8561 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-semibold font-grotesk">
            {formatNumber(1235)}
          </span>
        </span>
        <div className="p-2">
          <AppDropdown items={items} label="My Account">
            <img
              src="https://api.dicebear.com/8.x/lorelei/svg"
              className="w-8 h-8 bg-black rounded-full"
              alt="avatar"
            />
          </AppDropdown>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
