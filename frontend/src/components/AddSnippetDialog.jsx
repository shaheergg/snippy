import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import SelectLang from "./SelectLang";
import { Button } from "./ui/button";
import { RUNTIMES } from "@/constants";
import { Switch } from "./ui/switch";
const AddSnippetDialog = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [selected, setSelected] = useState(RUNTIMES[0].language);
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="space-y-4">
        <DialogHeader>
          <DialogTitle>
            <h2 className="text-2xl font-semibold font-grotesk">
              Create Snippet
            </h2>
          </DialogTitle>
          <DialogDescription>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label>Snippet Name</Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Give your snippet a concise name"
                  type={"text"}
                />
              </div>
              <div className="space-y-2">
                <Label>Snippet Description</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What does this snippet do?"
                />
              </div>
              <div className="flex items-center justify-between py-4 border-y">
                <Label className="flex flex-col space-y-2">
                  <span className="font-semibold text-primary">
                    Private Snippet
                  </span>
                  <span className="text-gray-500">
                    No one else will be able to see this snippet
                  </span>
                </Label>
                <Switch
                  checked={isPrivate}
                  onCheckedChange={(checked) => setIsPrivate(checked)}
                />
              </div>
              <div className="space-y-2">
                <Label>Programming Language</Label>
                <SelectLang
                  selected={selected}
                  setSelected={setSelected}
                  runtimes={RUNTIMES}
                />
              </div>
              <div>
                <Button className="w-full btn btn-primary">
                  Create Snippet
                </Button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddSnippetDialog;
