"use client";

import { useState, useEffect } from "react";
import WebLinkPreview from "@/components/custom/WebLinkPreview";
import EnvironmentSelector from "@/components/custom/EnvironmentSelector";
import BrandSelector from "@/components/custom/BrandSelector";

export default function WebTab() {
  const [env, setEnv] = useState("mav-qa.");
  const [brand, setBrand] = useState("outback");

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full">
        <WebLinkPreview env={env} brand={brand} />
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
