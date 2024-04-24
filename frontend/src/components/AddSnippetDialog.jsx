import React from "react";
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
const AddSnippetDialog = ({ children }) => {
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
                  placeholder="Give your snippet a concise name"
                  type={"text"}
                />
              </div>
              <div className="space-y-2">
                <Label>Snippet Description</Label>
                <Textarea placeholder="What does this snippet do?" />
              </div>
              <div className="space-y-2">
                <Label>Programming Language</Label>
                <SelectLang />
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
