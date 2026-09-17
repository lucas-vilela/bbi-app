import { Smartphone, Monitor, LayoutGrid } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WebTab from "@/components/custom/WebTab";
import AppTab from "@/components/custom/AppTab";
import GeneralTab from "@/components/custom/GeneralTab";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen w-full py-4 px-2 sm:px-10">
      <Tabs defaultValue="web">
        <TabsList>
          <TabsTrigger value="web">
            <Monitor />
            Web
          </TabsTrigger>
          <TabsTrigger value="app">
            <Smartphone />
            App
          </TabsTrigger>
          <TabsTrigger value="general">
            <LayoutGrid />
            General
          </TabsTrigger>
        </TabsList>

        <TabsContent value="web" className="mt-4">
          <WebTab />
        </TabsContent>

        <TabsContent value="app" className="mt-4">
          <AppTab />
        </TabsContent>

        <TabsContent value="general" className="mt-4">
          <GeneralTab />
        </TabsContent>
      </Tabs>
    </main>
  );
}
