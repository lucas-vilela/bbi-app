"use client";

import Image from "next/image";
import Link from "next/link";
import { Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import deeplinks from "@/data/deeplinks.json";

const BRAND_TABS = [
  { key: "obs", value: "outback", label: "Outback", favicon: "/obs-favicon.png", faviconAlt: "obs icon" },
  { key: "cig", value: "carrabbas", label: "Carrabba's", favicon: "/cig-favicon.png", faviconAlt: "cig icon" },
  { key: "bfg", value: "bonefish", label: "Bonefish", favicon: "/bfg-favicon.png", faviconAlt: "bfg icon" },
];

function CopyButton({ value, message }) {
  function handleCopy() {
    navigator.clipboard.writeText(value);
    toast.success(message);
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-2 inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
      aria-label={`Copiar ${value}`}
    >
      <Copy size={14} />
    </button>
  );
}

function DeepLinkCell({ url }) {
  return (
    <div className="flex items-center gap-2">
      <Link
        target="_blank"
        href={url}
        className="flex items-center gap-1.5 text-sm font-mono break-all whitespace-normal hover:underline"
      >
        {url}
        <ExternalLink size={12} className="shrink-0" />
      </Link>
      <CopyButton value={url} message="Deep link copiado" />
    </div>
  );
}

function StatusBadge({ active }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
        active
          ? "bg-emerald-100 text-emerald-700"
          : "bg-slate-200 text-slate-500 line-through"
      }`}
    >
      {active ? "YES" : "NO"}
    </span>
  );
}

function BrandDeepLinksTable({ brandKey }) {
  const activeLinks = deeplinks.filter((link) => !link.deprecated);
  const deprecatedLinks = deeplinks.filter((link) => link.deprecated);

  return (
    <div className="flex flex-col gap-4">
      <Card className="w-full">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Deep Link URL</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Active?</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeLinks.map((link) => (
                <TableRow key={link.id}>
                  <TableCell>
                    <DeepLinkCell url={link.urls[brandKey]} />
                  </TableCell>
                  <TableCell className="max-w-md whitespace-normal text-sm text-muted-foreground">
                    {link.description}
                  </TableCell>
                  <TableCell>
                    <StatusBadge active={link.active} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {deprecatedLinks.length > 0 && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Deprecated</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Deep Link URL</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Active?</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deprecatedLinks.map((link) => (
                  <TableRow key={link.id}>
                    <TableCell className="text-sm font-mono line-through text-muted-foreground">
                      {link.urls[brandKey]}
                    </TableCell>
                    <TableCell className="max-w-md whitespace-normal text-sm text-muted-foreground line-through">
                      {link.description}
                    </TableCell>
                    <TableCell>
                      <StatusBadge active={link.active} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default function DeepLinksTab() {
  return (
    <Tabs defaultValue={BRAND_TABS[0].value}>
      <TabsList>
        {BRAND_TABS.map((brandTab) => (
          <TabsTrigger key={brandTab.value} value={brandTab.value}>
            <Image src={brandTab.favicon} width={16} height={16} alt={brandTab.faviconAlt} />
            {brandTab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {BRAND_TABS.map((brandTab) => (
        <TabsContent key={brandTab.value} value={brandTab.value} className="mt-4">
          <BrandDeepLinksTable brandKey={brandTab.key} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
