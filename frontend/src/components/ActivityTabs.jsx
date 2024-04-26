import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ActivityTabs({ children }) {
  return (
    <Tabs defaultValue="general">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="general">
          General
        </TabsTrigger>
        <TabsTrigger className="w-full" value="forks">
          Forks
        </TabsTrigger>
        <TabsTrigger className="w-full" value="issues">
          Issues
        </TabsTrigger>
        <TabsTrigger className="w-full" value="settings">
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="general">{children}</TabsContent>
      <TabsContent value="forks">{children}</TabsContent>
      <TabsContent value="issues">{children}</TabsContent>
      <TabsContent value="settings">{children}</TabsContent>
    </Tabs>
  );
}
