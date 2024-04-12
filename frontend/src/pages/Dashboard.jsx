import { Button } from "@/components/ui/button";
import React from "react";
import { useAuthStore } from "@/store/auth";
import AppLayout from "@/layouts/AppLayout";
import { Link } from "react-router-dom";
import SnippetCard from "@/components/SnippetCard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import DayIndicator from "@/components/DayIndicator";
import EmptyState from "@/components/EmptyState";
const Dashboard = () => {
  const logout = useAuthStore((state) => state.logout);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <AppLayout>
      <div className="py-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 px-4 md:px-0 md:grid-cols-6">
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center justify-between px-2 py-4">
              <h2 className="text-2xl font-semibold font-grotesk">
                My Snippets
              </h2>
            </div>
            <div className="px-2 py-4 space-y-2 bg-white border divide-y rounded-md border-border divide-border">
              <SnippetCard />
              <SnippetCard />

              <SnippetCard />
              <SnippetCard />
              {/* <EmptyState /> */}
            </div>
            <div className="py-4">
              <Button variant="outline" className="w-full">
                <Link to="/dashboard">
                  <span className="pt-1 pr-2 text-sm"> View All</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    color={"currentColor"}
                    fill={"none"}
                    className="inline"
                  >
                    <path
                      d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-span-1 space-y-4 md:col-span-2">
            <div className="p-4 bg-white border rounded-md border-border">
              <div className="flex items-center gap-2 pb-2">
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/5275250?v=4"
                    alt="avatar"
                    className="rounded-full w-14 h-14"
                  />
                </div>
                <div className="flex items-center justify-between flex-1 px-4 py-2 rounded cursor-pointer">
                  <div className="">
                    <h2 className="text-lg font-semibold font-grotesk">
                      John Doe
                    </h2>
                    <p className="text-sm text-neutral-500">
                      joh.doe@gmail.com
                    </p>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          to="/profile"
                          className="flex p-2 rounded-md hover:bg-gray-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            color="#000000"
                            fill="none"
                          >
                            <path
                              d="M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                            />
                            <path
                              d="M19.6221 4.56564C19.8457 4.32342 19.9574 4.20232 20.0762 4.13168C20.3628 3.96123 20.7157 3.95593 21.0071 4.1177C21.1279 4.18474 21.2431 4.30244 21.4735 4.53783C21.7039 4.77322 21.8192 4.89092 21.8848 5.01428C22.0431 5.31194 22.038 5.67244 21.8711 5.96521C21.8019 6.08655 21.6834 6.20073 21.4463 6.4291L18.6252 9.14629C18.1759 9.57906 17.9512 9.79545 17.6704 9.90512C17.3896 10.0148 17.081 10.0067 16.4636 9.99057L16.3796 9.98838C16.1917 9.98346 16.0977 9.98101 16.0431 9.91901C15.9885 9.85702 15.9959 9.7613 16.0108 9.56985L16.0189 9.4659C16.0609 8.92706 16.0819 8.65765 16.1871 8.41547C16.2923 8.17328 16.4738 7.97664 16.8368 7.58335L19.6221 4.56564Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span className="text-sm">Edit Profile</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="py-2">
                <h2 className="text-lg font-semibold font-grotesk">Bio:-</h2>
                <p className="text-sm text-foreground font-grotesk">
                  🚀 Code maestro sculpting digital dreams with elegance and
                  precision. From pixels to algorithms, I turn ideas into
                  seamless realities. Let's redefine the future, one line of
                  code at a time. 💻✨
                </p>
              </div>
              <div className="flex items-center justify-between py-2 font-grotesk">
                {days.map((day, id) => {
                  return <DayIndicator key={id} day={day} />;
                })}
              </div>
              <div className="grid grid-cols-3 py-2 font-grotesk">
                <div className="flex flex-col items-center justify-center col-span-1 gap-2 p-4 text-center border rounded-l hover:bg-neutral-100 border-border">
                  <h2>
                    <span className="text-2xl font-semibold">200</span>
                  </h2>
                  <p className="text-sm text-foreground font-grotesk">
                    Snippets
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center col-span-1 gap-2 p-4 text-center border hover:bg-neutral-100 border-border">
                  <h2>
                    <span className="text-2xl font-semibold">15.6k</span>
                  </h2>
                  <p className="text-sm text-foreground font-grotesk">Stars</p>
                </div>
                <div className="flex flex-col items-center justify-center col-span-1 gap-2 p-4 text-center border rounded-r hover:bg-neutral-100 border-border">
                  <h2>
                    <span className="text-2xl font-semibold">56</span>
                  </h2>
                  <p className="text-sm text-foreground font-grotesk">Forks</p>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-4 bg-white border rounded-md divide-border border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold font-grotesk">
                  Social Links
                </h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link
                        to="/profile"
                        className="flex p-2 rounded-md hover:bg-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          color="#000000"
                          fill="none"
                        >
                          <path
                            d="M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                          />
                          <path
                            d="M19.6221 4.56564C19.8457 4.32342 19.9574 4.20232 20.0762 4.13168C20.3628 3.96123 20.7157 3.95593 21.0071 4.1177C21.1279 4.18474 21.2431 4.30244 21.4735 4.53783C21.7039 4.77322 21.8192 4.89092 21.8848 5.01428C22.0431 5.31194 22.038 5.67244 21.8711 5.96521C21.8019 6.08655 21.6834 6.20073 21.4463 6.4291L18.6252 9.14629C18.1759 9.57906 17.9512 9.79545 17.6704 9.90512C17.3896 10.0148 17.081 10.0067 16.4636 9.99057L16.3796 9.98838C16.1917 9.98346 16.0977 9.98101 16.0431 9.91901C15.9885 9.85702 15.9959 9.7613 16.0108 9.56985L16.0189 9.4659C16.0609 8.92706 16.0819 8.65765 16.1871 8.41547C16.2923 8.17328 16.4738 7.97664 16.8368 7.58335L19.6221 4.56564Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="text-sm">Edit Links</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 px-1 py-2 rounded-md">
                  <a
                    href="https://github.com/johndoe"
                    target="_blank"
                    className="flex items-center gap-2 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-foreground font-grotesk">
                      https://github.com/johndoe
                    </span>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      color={"currentColor"}
                      fill={"none"}
                    >
                      <path
                        d="M11.0988 3.00012C7.4498 3.00669 5.53898 3.09629 4.31783 4.31764C3 5.63568 3 7.75704 3 11.9997C3 16.2424 3 18.3638 4.31783 19.6818C5.63565 20.9999 7.75668 20.9999 11.9987 20.9999C16.2407 20.9999 18.3617 20.9999 19.6796 19.6818C20.9007 18.4605 20.9903 16.5493 20.9969 12.8998"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.5561 3.49637L11.0488 13.0589M20.5561 3.49637C20.0622 3.00175 16.7345 3.04785 16.031 3.05786M20.5561 3.49637C21.0501 3.99098 21.0041 7.32297 20.9941 8.02738"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center justify-between gap-2 px-1 py-2 rounded-md ">
                  <a
                    href="https://github.com/johndoe"
                    target="_blank"
                    className="flex items-center gap-2 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-foreground font-grotesk">
                      https://twitter.com/johndoe
                    </span>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      color={"currentColor"}
                      fill={"none"}
                    >
                      <path
                        d="M11.0988 3.00012C7.4498 3.00669 5.53898 3.09629 4.31783 4.31764C3 5.63568 3 7.75704 3 11.9997C3 16.2424 3 18.3638 4.31783 19.6818C5.63565 20.9999 7.75668 20.9999 11.9987 20.9999C16.2407 20.9999 18.3617 20.9999 19.6796 19.6818C20.9007 18.4605 20.9903 16.5493 20.9969 12.8998"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.5561 3.49637L11.0488 13.0589M20.5561 3.49637C20.0622 3.00175 16.7345 3.04785 16.031 3.05786M20.5561 3.49637C21.0501 3.99098 21.0041 7.32297 20.9941 8.02738"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center justify-between gap-2 px-1 py-2 rounded-md ">
                  <a
                    href="https://github.com/johndoe"
                    target="_blank"
                    className="flex items-center gap-2 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M7 10V17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.00801 7L6.99902 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-foreground font-grotesk">
                      https://linkedin.com/johndoe
                    </span>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      color={"currentColor"}
                      fill={"none"}
                    >
                      <path
                        d="M11.0988 3.00012C7.4498 3.00669 5.53898 3.09629 4.31783 4.31764C3 5.63568 3 7.75704 3 11.9997C3 16.2424 3 18.3638 4.31783 19.6818C5.63565 20.9999 7.75668 20.9999 11.9987 20.9999C16.2407 20.9999 18.3617 20.9999 19.6796 19.6818C20.9007 18.4605 20.9903 16.5493 20.9969 12.8998"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.5561 3.49637L11.0488 13.0589M20.5561 3.49637C20.0622 3.00175 16.7345 3.04785 16.031 3.05786M20.5561 3.49637C21.0501 3.99098 21.0041 7.32297 20.9941 8.02738"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
