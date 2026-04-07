import { Hammer, PackageCheck } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import environments from "@/data/environments.json";

export default function EnvironmentSelector({ defaultValue, onSelect }) {
  const lowEnvs = environments.filter((e) => e.group === "low");
  const highEnvs = environments.filter((e) => e.group === "high");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Environment</CardTitle>
        <CardDescription>Choose which environment to use.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue={defaultValue}>
          <p className="flex gap-2 items-center">
            <span><Hammer size={14} /></span> Low
          </p>
          {lowEnvs.map((env) => (
            <div
              key={env.id}
              className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value={env.value}
                  id={env.id}
                  onClick={(e) => onSelect(e.target.value)}
                />
                <Label htmlFor={env.id}>{env.label}</Label>
              </div>
              {env.abbreviation && (
                <div className="flex gap-2">
                  <Separator orientation="vertical" />
                  <p className="text-sm leading-none font-medium w-7">{env.abbreviation}</p>
                </div>
              )}
            </div>
          ))}

          <Separator className="my-4" />

          <p className="flex gap-2 items-center">
            <span><PackageCheck size={14} /></span> High
          </p>
          {highEnvs.map((env) => (
            <div
              key={env.id}
              className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value={env.value}
                  id={env.id}
                  onClick={(e) => onSelect(e.target.value)}
                />
                <Label htmlFor={env.id}>{env.label}</Label>
              </div>
              {env.abbreviation && (
                <div className="flex gap-2">
                  <Separator orientation="vertical" />
                  <p className="text-sm leading-none font-medium w-7">{env.abbreviation}</p>
                </div>
              )}
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
