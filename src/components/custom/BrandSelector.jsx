import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import brands from "@/data/brands.json";

export default function BrandSelector({ defaultValue, onSelect }) {
  const mainBrands = brands.filter((b) => b.id !== "dine-rewards");
  const loyaltyBrands = brands.filter((b) => b.id === "dine-rewards");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Brand</CardTitle>
        <CardDescription>Choose which restaurant brand to use.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue={defaultValue}>
          {mainBrands.map((brand) => (
            <div
              key={brand.id}
              className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value={brand.value}
                  id={brand.id}
                  onClick={(e) => onSelect(e.target.value)}
                />
                <Label htmlFor={brand.id}>{brand.label}</Label>
              </div>
              <div className="flex gap-2 items-center">
                <Separator orientation="vertical" />
                <Image src={brand.favicon} width={20} height={10} alt={`${brand.abbreviation} icon`} />
                <p className="text-sm leading-none font-medium w-7">{brand.abbreviation}</p>
              </div>
            </div>
          ))}

          <Separator className="my-4" />

          {loyaltyBrands.map((brand) => (
            <div
              key={brand.id}
              className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value={brand.value}
                  id={brand.id}
                  onClick={(e) => onSelect(e.target.value)}
                />
                <Label htmlFor={brand.id}>{brand.label}</Label>
              </div>
              <div className="flex gap-2 items-center">
                <Separator orientation="vertical" />
                <Image src={brand.favicon} width={20} height={10} alt={`${brand.abbreviation} icon`} />
                <p className="text-sm leading-none font-medium w-7">{brand.abbreviation}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
