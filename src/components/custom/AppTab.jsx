"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DeepLinksTab from "@/components/custom/DeepLinksTab";

export default function AppTab() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Tabs defaultValue="deep-links">
        <TabsList>
          <TabsTrigger value="deep-links">Deep Links</TabsTrigger>
        </TabsList>

        <TabsContent value="deep-links" className="mt-4">
          <DeepLinksTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
