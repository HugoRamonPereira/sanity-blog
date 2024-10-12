"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { TooltipMsg } from "./Tooltip";

export const ScrollToTop = () => {
  const [display, setDisplay] = useState(false);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    if (!display && window.scrollY > 450) setDisplay(true);
    if (display && window.scrollY <= 450) setDisplay(false);
  }, [display]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="fixed bottom-4 right-2.5 z-50">
      {display ? (
        <TooltipMsg message="Scroll to top" side="left">
          <Button className="rounded-full px-3" onClick={backToTop}>
            <ArrowUp size={20} />
          </Button>
        </TooltipMsg>
      ) : null}
    </div>
  );
};
