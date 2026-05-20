"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import promoCodes from "@/data/promocodes.json";

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

export default function PromoCodesTab() {
  return (
    <div className="flex flex-col gap-8">
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
        <TriangleAlert size={13} />
        Works in development environments only
      </p>
      {promoCodes.map((group) => (
        <div key={group.brand} className="flex flex-col gap-2">
          <div>
            <h3 className="text-sm font-semibold">{group.brand}</h3>
            <p className="text-xs text-muted-foreground">{group.lab}</p>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Promo Code</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {group.codes.map((code) => (
                <TableRow key={code}>
                  <TableCell className="font-mono">
                    {code}
                    <CopyButton value={code} message="Promo code copied" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}
