import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import AppLayout from "@/layouts/AppLayout";
const Snippet = () => {
  const [priv, setPriv] = useState(false);
  return (
    <AppLayout>
      <div className="">
        <div className="flex items-center gap-4 p-4 bg-white border-b border-border">
          <Button>Save</Button>
          <Switch
            value={priv}
            defaultChecked={priv}
            onChange={() => setPriv(!priv)}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default Snippet;
