import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function WebLinkPreview({ env, brand, palette, brandFavicon, brandLabel }) {
  const href = `https://${env}${brand}.com`;
  const hasPalette = Boolean(palette);

  return (
    <Card
      className={`w-full gap-2 py-4`}
    >
      <CardHeader>
        <CardTitle>Link</CardTitle>
        <CardDescription>
          Opens in a new tab
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1 items-center">
          {brandFavicon ? (
          <Image
            src={brandFavicon}
            width={20}
            height={10}
            alt={`${brandLabel || brand} icon`}
          />
        ) : null}
        <Link
          target="_blank"
          rel="noreferrer"
          href={href}
          className="flex w-fit px-4 rounded-full text-sm font-bold transition-colors duration-300 hover:underline"
          style={hasPalette ? { color: palette.text, backgroundColor: palette.primary } : undefined}
        >
          <span className="flex items-center gap-2 font-medium w-fit">
            {href}
            <ExternalLink size={12} />
          </span>
        </Link>
        </div>
        
      </CardContent>
    </Card>
  );
}
