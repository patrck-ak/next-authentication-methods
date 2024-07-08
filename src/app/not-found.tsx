"use client";

import { Button } from "@/components/ui/button";
import { LogOut, SearchX } from "lucide-react";
import { redirect, RedirectType, usePathname } from "next/navigation";
import React from "react";

export default function NotFound() {
  const url = usePathname();

  return (
    <main className="min-h-screen min-w-screen flex flex-col gap-3 items-center justify-center bg-zinc-800">
      <h3 className="text-zinc-100 flex justify-center items-center gap-3">
        <SearchX size={40} color="#F4F4F5" /> Página não encontrada :(
      </h3>
      <p className="font-mono text-sm text-zinc-400">
        <code>{url}</code>
      </p>

      <Button
        className="flex flex-row items-center justify-center gap-2"
        onClick={() => (window.location.href = "/")}
      >
        <LogOut size={20} /> Página inicial
      </Button>
    </main>
  );
}
