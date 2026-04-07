import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DeepLinkGroup from "@/components/custom/DeepLinkGroup";
import deeplinks from "@/data/deeplinks.json";
import { Fragment } from "react";

export default function AppTab() {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-fit">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Deep links</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {deeplinks.map((group, index) => (
              <Fragment key={group.brand}>
                <DeepLinkGroup
                  brand={group.brand}
                  favicon={group.favicon}
                  faviconAlt={group.faviconAlt}
                  links={group.links}
                />
                {index < deeplinks.length - 1 && <Separator className="my-2" />}
              </Fragment>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
