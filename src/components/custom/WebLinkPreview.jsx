import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function WebLinkPreview({ env, brand }) {
  const href = `https://${env}${brand}.com`;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Link</CardTitle>
        <CardDescription>Opens in a new tab</CardDescription>
      </CardHeader>
      <CardContent>
        <Link target="_blank" href={href} className="flex w-fit">
          <span className="flex items-center gap-2 font-medium w-fit">
            {href}<ExternalLink size={12} />
          </span>
        </Link>
      </CardContent>
    </Card>
  );
}
