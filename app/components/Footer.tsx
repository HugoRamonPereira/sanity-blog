import Link from "next/link";

import LinkedinIcon from "./icons/Linkedin";
import EarthIcon from "./icons/Earth";
import GithubIcon from "./icons/Github";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-t-gray-200 mt-10">
      <div className="relative flex items-center justify-between max-w-6xl mx-auto px-4 py-5">
        <div className="font-bold text-primary">Hugo Ramon Pereira</div>
        <div className="flex gap-6">
          <Link href="https://hugoramonpereira.dev/" target="_blank">
            <EarthIcon
              height={24}
              width={24}
              mainColor="#2394e0"
              secondaryColor="#a1e367"
            />
          </Link>
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
          <Link href="https://github.com/HugoRamonPereira" target="_blank">
            <GithubIcon width={24} height={24} />
          </Link>
        </div>
        <div className="flex items-end">
          {year}
          &nbsp; - All rights reserved
        </div>
      </div>
    </footer>
  );
}
