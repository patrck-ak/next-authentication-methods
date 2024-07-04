import React from "react";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function gitHub() {
  return (
    <>
      <Button variant="outline" className="gap-3 flex flex-row">
        <GitHubLogoIcon scale={1} /> Github
      </Button>
    </>
  );
}
