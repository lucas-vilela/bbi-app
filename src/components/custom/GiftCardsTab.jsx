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
import giftCards from "@/data/giftcards.json";

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

export default function GiftCardsTab() {
  return (
    <div className="flex flex-col gap-8">
      {giftCards.map((group) => (
        <div key={group.label} className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold">Gift Cards {group.label}</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Gift Card Number</TableHead>
                <TableHead>PIN</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {group.cards.map((card) => (
                <TableRow key={card.number}>
                  <TableCell className="font-mono">
                    {card.number}
                    <CopyButton value={card.number.replace(/\s/g, "")} message="GC number copied" />
                  </TableCell>
                  <TableCell className="font-mono">
                    {card.pin}
                    <CopyButton value={card.pin} message="GC pin copied" />
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
