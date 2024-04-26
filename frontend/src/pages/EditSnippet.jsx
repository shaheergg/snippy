import React from "react";
import { Editor } from "@monaco-editor/react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SnippetLayout from "@/layouts/SnippetLayout";
import { ActivityTabs } from "@/components/ActivityTabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import LangIndicator from "@/components/LangIndicator";
const EditSnippet = () => {
  return (
    <div>
      <SnippetLayout>
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-full border"
        >
          <ResizablePanel defaultSize={50}>
            <div className="min-h-[85vh] p-6">
              <ActivityTabs>
                <div className="h-full py-4 space-y-4">
                  <h2 className="text-xl font-semibold font-grotesk">
                    Using Gemini API with NodeJS and Express
                  </h2>
                  <span className="flex items-center gap-2">
                    <LangIndicator language="javascript" />
                    <span className="text-sm text-gray-600 font-grotesk">
                      NodeJS
                    </span>
                  </span>
                  <p className="text-lg text-gray-600 font-grotesk">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc eget risus at ipsum tincidunt ultrices. Ut vel libero
                    scelerisque, ultricies mi eget, vehicula mi. Nullam sit amet
                    justo nec urna ultricies ultricies. Nullam sit amet justo
                    nec urna ultricies ultricies.
                  </p>
                </div>
              </ActivityTabs>
              <div className="py-4 space-y-4 border-t">
                <div>
                  <h2 className="text-xl font-semibold font-grotesk">
                    Comments
                  </h2>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-4">
                    <img
                      className="object-cover w-8 h-8 rounded-full"
                      src="https://avatars.githubusercontent.com/u/105648279?v=4"
                      alt=""
                    />
                    <div>
                      <h3 className="font-semibold font-grotesk">John Doe</h3>
                    </div>
                  </div>
                  <Textarea className="h-28"></Textarea>
                  <div className="flex items-center justify-end py-4 space-x-4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Comment</Button>
                  </div>
                </div>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle={true} />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={75}>
                <Editor height="100%" defaultLanguage="javascript" />
              </ResizablePanel>
              <ResizableHandle withHandle={true} />
              <ResizablePanel defaultSize={25}>
                <div className="flex items-center justify-center h-full p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </SnippetLayout>
    </div>
  );
};

export default EditSnippet;
