import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem,
} from "./ui/select";
import { capitalize } from "@/lib/utils";
const SelectLang = ({ runtimes, selected, setSelected }) => {
  return (
    <Select
      onValueChange={(value) => {
        setSelected(value);
      }}
    >
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder={capitalize(String(selected))} />
      </SelectTrigger>
      <SelectContent className="">
        {runtimes.map((runtime) => {
          return (
            <SelectItem key={runtime.id} value={runtime.language}>
              {capitalize(String(runtime.language))}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectLang;
