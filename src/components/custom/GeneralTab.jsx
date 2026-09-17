"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GiftCardsTab from "@/components/custom/GiftCardsTab";
import CreditCardsTab from "@/components/custom/CreditCardsTab";
import PromoCodesTab from "@/components/custom/PromoCodesTab";

export default function GeneralTab() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Tabs defaultValue="gift-cards">
        <TabsList>
          <TabsTrigger value="gift-cards">Gift Cards</TabsTrigger>
          <TabsTrigger value="credit-cards">Credit Cards</TabsTrigger>
          <TabsTrigger value="promo-codes">Promo Codes</TabsTrigger>
        </TabsList>

        <TabsContent value="gift-cards">
          <GiftCardsTab />
        </TabsContent>

        <TabsContent value="credit-cards">
          <CreditCardsTab />
        </TabsContent>

        <TabsContent value="promo-codes">
          <PromoCodesTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
