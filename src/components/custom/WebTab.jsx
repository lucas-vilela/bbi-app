"use client";

import { useState } from "react";
import WebLinkPreview from "@/components/custom/WebLinkPreview";
import EnvironmentSelector from "@/components/custom/EnvironmentSelector";
import BrandSelector from "@/components/custom/BrandSelector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import brands from "@/data/brands.json";

function LinksTab() {
  const [env, setEnv] = useState("mav-qa.");
  const [brand, setBrand] = useState("outback");
  const selectedBrand = brands.find((brandOption) => brandOption.value === brand);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full h-fit sticky top-2 z-20 md:static md:top-auto">
        <WebLinkPreview
          env={env}
          brand={brand}
          palette={selectedBrand?.palette}
          brandFavicon={selectedBrand?.favicon}
          brandLabel={selectedBrand?.label}
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-xs">
          <EnvironmentSelector defaultValue={env} onSelect={setEnv} />
        </div>
        <div className="w-full sm:w-xs">
          <BrandSelector defaultValue={brand} onSelect={setBrand} />
        </div>
      </div>
    </div>
  );
}

export default function WebTab() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Tabs defaultValue="links">
        <TabsList>
          <TabsTrigger value="links">Links</TabsTrigger>
        </TabsList>

        <TabsContent value="links" className="mt-4">
          <LinksTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
