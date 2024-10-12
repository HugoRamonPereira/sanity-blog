import Link from "next/link";

import LinkedinIcon from "./icons/Linkedin";
import EarthIcon from "./icons/Earth";
import GithubIcon from "./icons/Github";
import { TooltipMsg } from "./Tooltip";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-t-gray-200 mt-10">
      <div className="relative flex items-center justify-between max-w-6xl mx-auto px-4 py-5">
        <div className="font-bold text-primary flex gap-1">Hugo Ramon <span className="hidden sm:flex">Pereira</span></div>
        <div className="flex gap-3 sm:gap-6">
          <TooltipMsg message="Visit my website">
            <Link href="https://hugoramonpereira.dev/" target="_blank">
              <EarthIcon
                height={24}
                width={24}
                mainColor="#2394e0"
                secondaryColor="#a1e367"
              />
            </Link>
          </TooltipMsg>
          <TooltipMsg message="Connect with me on Linkedin">
            <Link
              href="https://www.linkedin.com/in/hugo-ramon-pereira/"
              target="_blank"
            >
              <LinkedinIcon
                height={24}
                width={24}
                mainColor="#0a66c2"
                secondaryColor="#fff"
              />
            </Link>
          </TooltipMsg>
          <TooltipMsg message="Check my repos on Github">
            <Link href="https://github.com/HugoRamonPereira" target="_blank">
              <GithubIcon width={24} height={24} />
            </Link>
          </TooltipMsg>
        </div>
        <div className="flex items-end">
          {year}
          <span className="hidden sm:flex">&nbsp; - All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
