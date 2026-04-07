import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function DeepLinkGroup({ brand, favicon, faviconAlt, links }) {
  return (
    <div className="flex flex-col">
      <p className="flex gap-2 items-center">
        <Image src={favicon} width={20} height={10} alt={faviconAlt} />
        {brand}
      </p>
      {links.map((link) => (
        <div
          key={link}
          className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full"
        >
          <div className="flex items-center gap-3">
            <Link target="_blank" href={link} className="flex w-fit">
              <span className="flex items-center gap-2 w-fit text-sm">
                {link}<ExternalLink size={12} />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
