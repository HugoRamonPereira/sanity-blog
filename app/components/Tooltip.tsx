import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PropsWithChildren } from "react";

interface TooltipProps extends PropsWithChildren {
  message: string;
  side?: "top" | "right" | "bottom" | "left" | undefined;
}

export function TooltipMsg({ message, side, children }: TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side}>
          {message}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
