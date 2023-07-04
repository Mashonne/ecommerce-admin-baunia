import React from "react";

export default function AuthLayout({
  children,
}: {
  childern: React.ReactNode;
}) {
  return <div className="flex items-center justify-center h-full w-full">
    {children}
    </div>;
}
