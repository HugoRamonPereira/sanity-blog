import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PropsWithChildren } from "react";

interface TooltipProps extends PropsWithChildren{
  message: string;
}

export function TooltipMsg({ message, children }: TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          {message}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
