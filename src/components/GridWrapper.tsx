import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const GridWrapper = ({ children, className }: Props) => {
  return <div className={cn("grid", className)}>{children}</div>;
};

export default GridWrapper;
