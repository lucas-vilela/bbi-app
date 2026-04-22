"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function WebLinkPreview({ env, brand, palette, brandFavicon, brandLabel }) {
  const [openInNewTab, setOpenInNewTab] = useState(true);
  const href = `https://${env}${brand}.com`;
  const hasPalette = Boolean(palette);
  const switchBackground = openInNewTab
    ? (palette?.primary ?? "var(--primary)")
    : "var(--input)";

  return (
    <Card
      className={`w-full gap-4 py-4`}
    >
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
        <CardTitle>Link</CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">new tab</span>
          <Switch
            checked={openInNewTab}
            onCheckedChange={setOpenInNewTab}
            aria-label="Toggle open in new tab"
            style={{ backgroundColor: switchBackground }}
          />
        </div>
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
          target={openInNewTab ? "_blank" : "_self"}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
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
