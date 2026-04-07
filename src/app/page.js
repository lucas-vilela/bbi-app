import { Smartphone, Monitor } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WebTab from "@/components/custom/WebTab";
import AppTab from "@/components/custom/AppTab";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen w-full py-10 px-2 sm:px-10">
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
        </TabsList>

        <TabsContent value="web" className="flex flex-col gap-4 w-full">
          <WebTab />
        </TabsContent>

        <TabsContent value="app" className="mt-4">
          <AppTab />
        </TabsContent>
      </Tabs>
    </main>
  );
}
