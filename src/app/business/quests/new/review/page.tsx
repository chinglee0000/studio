
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, CreditCard, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export default function ReviewQuestPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();

  const questDetails = {
    title: searchParams.get("title") || "N/A",
    description: searchParams.get("description") || "N/A",
    questType: searchParams.get("questType") || "N/A",
    budget: searchParams.get("budget") || "0",
    targetAudience: searchParams.get("targetAudience") || "N/A",
  };

  const handleConfirmAndLaunch = () => {
    // In a real app, this would trigger the payment and quest creation via a server action.
    toast({
      title: "Quest Launched!",
      description: `Your quest "${questDetails.title}" is now active.`,
    });
    router.push("/business/dashboard");
  };

  const totalCost = Number(questDetails.budget);
  const platformFee = totalCost * 0.1; // Example 10% platform fee
  const finalCost = totalCost + platformFee;

  // Create a new URLSearchParams object for the back link.
  const backLinkParams = new URLSearchParams();
    if (questDetails.title) backLinkParams.set("title", questDetails.title);
    if (questDetails.description) backLinkParams.set("description", questDetails.description);
    if (questDetails.questType) backLinkParams.set("type", questDetails.questType);
    if (questDetails.budget) backLinkParams.set("budget", questDetails.budget);
    if (questDetails.targetAudience) backLinkParams.set("targetAudience", questDetails.targetAudience);


  return (
    <div className="space-y-6">
       <header className="flex items-center p-4 border-b">
        <Button variant="text" size="icon" asChild>
           <Link href={`/business/quests/new/configure?${backLinkParams.toString()}`}>
            <ArrowLeft />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight text-center flex-1">
          Review & Confirm
        </h1>
        <div className="w-8"></div>
      </header>
      
      <div className="grid gap-8 md:grid-cols-2 px-4">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quest Summary</CardTitle>
              <CardDescription>
                Please review the details of your quest below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Title</h3>
                <p className="text-muted-foreground">{questDetails.title}</p>
              </div>
              <div>
                <h3 className="font-semibold">Description</h3>
                <p className="text-muted-foreground">{questDetails.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold flex items-center gap-2"><CheckCircle className="text-muted-foreground" /> Type</h3>
                  <p className="text-muted-foreground pl-7">{questDetails.questType}</p>
                </div>
                 <div>
                  <h3 className="font-semibold flex items-center gap-2"><Target className="text-muted-foreground" /> Audience</h3>
                  <p className="text-muted-foreground pl-7">{questDetails.targetAudience.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                </div>
              </div>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Budget & Cost</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Quest Budget</span>
                  <span>${Number(questDetails.budget).toLocaleString()}</span>
                </div>
                 <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Platform Fee (10%)</span>
                  <span>${platformFee.toLocaleString()}</span>
                </div>
                <Separator />
                 <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total Cost</span>
                  <span>${finalCost.toLocaleString()}</span>
                </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment</CardTitle>
              <CardDescription>
                Confirm your payment method to launch the quest.
              </CardDescription>
            </CardHeader>
            <CardContent>
               <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 p-12 text-center">
                  <CreditCard className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Stripe payment integration placeholder.
                  </p>
                </div>
            </CardContent>
            <CardFooter>
               <Button
                variant="filled"
                className="w-full"
                size="lg"
                onClick={handleConfirmAndLaunch}
              >
                Confirm Payment & Launch Quest
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
