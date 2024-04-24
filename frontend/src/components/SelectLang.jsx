import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem,
} from "./ui/select";
import { PROGRAMMING_LANGUAGES } from "@/constants";
import { capitalize } from "@/lib/utils";
const SelectLang = ({ value }) => {
  const [selected, setSelected] = useState(PROGRAMMING_LANGUAGES[0]);
  return (
    <Select className="">
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder={capitalize(selected)} />
      </SelectTrigger>
      <SelectContent className="">
        {PROGRAMMING_LANGUAGES.map((lang) => {
          return (
            <SelectItem key={lang} value={lang}>
              {capitalize(lang)}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectLang;
