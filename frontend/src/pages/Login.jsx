import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center max-w-xl min-h-screen mx-auto">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-center py-8">
            <Logo />
          </div>
          <h1 className="max-w-xs mx-auto text-2xl font-semibold text-center font-grotesk">
            Login in to the Snippy Account
          </h1>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password" />
            </div>
            <div className="space-y-2">
              <Button className="w-full">Log In</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <p className="text-sm text-center">
            Don't have an account?{" "}
            <Link to="/register" className="hover:underline text-primary">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
