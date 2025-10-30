
"use client"

import { useSearchParams } from "next/navigation"
import { useActionState, useEffect, useState, useTransition } from "react"
import { useFormStatus } from "react-dom"
import { ArrowLeft, Loader2, DollarSign, Sparkles, Bot, User, Send } from "lucide-react"
import Link from "next/link"
import { reviewQuest } from "@/app/actions/quest-actions"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { suggestQuestAction, type QuestSuggestionOutput } from "@/app/actions/quest-suggestion-actions"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Avatar } from "@/components/ui/avatar"


function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button variant="filled" type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? <Loader2 className="animate-spin" /> : "Review Quest"}
    </Button>
  )
}

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function QuestConfigurationPage() {
  const searchParams = useSearchParams()
  const { toast } = useToast()

  // Form state
  const [title, setTitle] = useState(searchParams.get("title") || "")
  const [description, setDescription] = useState(searchParams.get("description") || "")
  const [questType, setQuestType] = useState(searchParams.get("type") || "Not specified")
  const [budget, setBudget] = useState(Number(searchParams.get("budget")) || 500)
  const [currency, setCurrency] = useState("USD")
  const [numUsers, setNumUsers] = useState(100)
  const [targetAudience, setTargetAudience] = useState(searchParams.get("targetAudience") || "tech-enthusiasts")
  
  const [lastAiResponse, setLastAiResponse] = useState<QuestSuggestionOutput | null>(null);

  // AI Chat Dialog state
  const [isAiDialogOpen, setIsAiDialogOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isGenerating, startTransition] = useTransition();

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useActionState(reviewQuest, initialState);


  useEffect(() => {
    if (state?.message && state.errors) {
       toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      })
    }
  }, [state, toast])
  
  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const newUserMessage: Message = { role: 'user', content: currentMessage };
    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    setCurrentMessage("");

    startTransition(async () => {
      const conversationHistory = newMessages.map(msg => `${msg.role}: ${msg.content}`).join('\n');
      const currentFormState = `
        Current Title: ${title}
        Current Description: ${description}
        Current Quest Type: ${questType}
        Current Budget: ${budget}
        Current Target Audience: ${targetAudience}
        ---
        Conversation History:
        ${conversationHistory}
      `;

      try {
        const result = await suggestQuestAction({ prompt: currentFormState });
        
        if (result && result.description) {
            const newAssistantMessage: Message = { role: 'assistant', content: result.description };
            setMessages(prevMessages => [...prevMessages, newAssistantMessage]);
            if (result.title) { // Assuming if a title is returned, it's a full suggestion
              setLastAiResponse(result);
            }
        } else {
            throw new Error("The AI returned an incomplete response.");
        }

      } catch (error) {
        console.error("AI Edit failed:", error);
        const errorMessage: Message = { role: 'assistant', content: "Sorry, I couldn't process your request. Please try again." };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      }
    });
  };

  const handleApplyChanges = () => {
    if (lastAiResponse) {
      setTitle(lastAiResponse.title || title);
      setDescription(lastAiResponse.description || description);
      setQuestType(lastAiResponse.questType || questType);
      setBudget(lastAiResponse.budget || budget);
      setTargetAudience(lastAiResponse.targetAudience || targetAudience);
      toast({
        title: "AI Edits Applied",
        description: "The form has been updated with AI suggestions.",
      });
    }
    setIsAiDialogOpen(false);
  };
  
  const openAiChat = () => {
    setMessages([{ role: 'assistant', content: 'I can help you edit the quest details. What would you like to change?' }]);
    setLastAiResponse(null);
    setIsAiDialogOpen(true);
  }

  const formAction = (formData: FormData) => {
    formData.set('title', title);
    formData.set('description', description);
    formData.set('questType', questType);
    formData.set('budget', String(budget));
    formData.set('targetAudience', targetAudience);
    dispatch(formData);
  }

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center p-4 border-b pb-4">
          <Button variant="text" size="icon" asChild>
              <Link href={`/business/quests/new`}>
                  <ArrowLeft />
                  <span className="sr-only">Back</span>
              </Link>
          </Button>
          <h1 className="text-xl font-semibold text-center flex-1">Quest Configuration</h1>
          <div className="w-8"></div>
      </header>
      
      <main className="flex-1 overflow-y-auto px-4">
        <div className="flex justify-end pt-4 pb-4">
            <Button variant="filled" size="default" onClick={openAiChat} className="shadow-lg">
                <Sparkles />
                Ask AI to Edit
            </Button>
        </div>
        <form action={formAction} className="space-y-6">
           <Card>
            <CardHeader>
              <CardTitle>Quest Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  name="title" 
                  placeholder="e.g. Feedback on our new coffee blend" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                />
                 {state.errors?.title && <p className="text-sm text-destructive mt-1">{state.errors.title[0]}</p>}
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  placeholder="Describe what the quest is about and what you want users to do." 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                />
                 {state.errors?.description && <p className="text-sm text-destructive mt-1">{state.errors.description[0]}</p>}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Budget & Audience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="budget">Budget</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="budget" 
                    name="budget" 
                    type="number"
                    placeholder="Enter budget" 
                    value={budget} 
                    onChange={(e) => setBudget(Number(e.target.value))} 
                    className="pl-8"
                  />
                </div>
                 {state.errors?.budget && <p className="text-sm text-destructive mt-1">{state.errors.budget[0]}</p>}
              </div>
              <div>
                <Label htmlFor="currency">Currency</Label>
                <Select name="currency" value={currency} onValueChange={setCurrency}>
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                    </SelectContent>
                  </Select>
              </div>
              <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label htmlFor="num-users">Number of Users</Label>
                    <span className="text-sm font-medium">{numUsers}</span>
                  </div>
                  <Slider
                    id="num-users"
                    name="num_users"
                    value={[numUsers]}
                    max={500}
                    min={10}
                    step={10}
                    onValueChange={(value) => setNumUsers(value[0])}
                  />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Target Audience</CardTitle>
              <CardDescription>
                Select attributes to define your target audience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                  {[ 'tech-enthusiasts', 'online-shoppers', 'social-media-users', 'gamers', 'foodies', 'local-explorers'].map(audience => (
                     <Badge 
                        key={audience}
                        variant={targetAudience === audience ? 'default' : 'secondary'} 
                        className="rounded-full px-4 py-2 text-sm cursor-pointer" 
                        onClick={() => setTargetAudience(audience)}>
                          {audience.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Badge>
                  ))}
                  <Badge variant="outline" className="rounded-full px-4 py-2 text-sm cursor-pointer border-dashed">+ Add more</Badge>
              </div>
               <input type="hidden" name="targetAudience" value={targetAudience} />
               {state.errors?.targetAudience && <p className="text-sm text-destructive mt-2">{state.errors.targetAudience[0]}</p>}
            </CardContent>
          </Card>
          
          <input type="hidden" name="questType" value={questType} />

          <div className="pb-4">
            <SubmitButton />
          </div>
        </form>
      </main>

      <Dialog open={isAiDialogOpen} onOpenChange={setIsAiDialogOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] flex flex-col h-[70vh]">
          <DialogHeader>
            <DialogTitle>AI Quest Editor</DialogTitle>
            <DialogDescription>
              Chat with the AI to refine your quest details.
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="flex-1 p-4 border rounded-lg bg-muted/50">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3",
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.role === 'assistant' && (
                    <Avatar className="w-8 h-8 border bg-primary text-primary-foreground p-1.5">
                        <Bot />
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-xs md:max-w-md p-3 rounded-lg",
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-background rounded-bl-none'
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                   {message.role === 'user' && (
                    <Avatar className="w-8 h-8 border bg-secondary text-secondary-foreground p-1.5">
                        <User />
                    </Avatar>
                  )}
                </div>
              ))}
               {isGenerating && (
                <div className="flex items-start gap-3 justify-start">
                   <Avatar className="w-8 h-8 border bg-primary text-primary-foreground p-1.5">
                        <Bot />
                    </Avatar>
                  <div className="bg-background p-3 rounded-lg rounded-bl-none">
                    <Loader2 className="animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-0">
             <div className="flex items-center gap-2">
              <Input
                id="ai-prompt"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="e.g., Change the budget to $750 and target gamers."
                disabled={isGenerating}
              />
              <Button variant="filled" type="button" onClick={handleSendMessage} disabled={isGenerating || !currentMessage.trim()} size="icon">
                <Send />
              </Button>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="text" onClick={() => setIsAiDialogOpen(false)}>Cancel</Button>
            <Button variant="filled" type="button" onClick={handleApplyChanges} disabled={!lastAiResponse}>
              Apply Changes & Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
