import { cn } from "@/lib/utils";
import { motion as m } from "framer-motion";
import React from "react";

const TabContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <m.div
      initial={{ filter: "blur(.5rem)", x: -20 }}
      animate={{ filter: "blur(0)", x: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("bg-background p-8", className)}
    >
      {children}
    </m.div>
  );
};

export default TabContentWrapper;
