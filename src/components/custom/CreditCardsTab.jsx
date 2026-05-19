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
import creditCards from "@/data/creditcards.json";

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

export default function CreditCardsTab() {
  return (
    <div className="flex flex-col gap-8">
      {creditCards.map((group) => (
        <div key={group.brand} className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold">{group.brand}</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Card Number</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {group.cards.map((card) => (
                <TableRow key={card.number}>
                  <TableCell className="font-mono">
                    {card.number}
                    <CopyButton
                      value={card.number.replace(/\s/g, "")}
                      message="CC number copied"
                    />
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
