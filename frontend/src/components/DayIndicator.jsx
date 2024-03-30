import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";

const DayIndicator = ({ day }) => {
  const isCurrentDay = (day) => {
    return new Date().toLocaleString("en-us", { weekday: "long" }) === day;
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span
            className={`flex items-center justify-center text-sm font-semibold border rounded-full h-9 w-9 border-border ${
              isCurrentDay(day)
                ? "bg-primary text-white"
                : "text-primary hover:bg-neutral-100"
            }`}
          >
            {day.charAt(0)}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <span className="text-sm">{day}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DayIndicator;
