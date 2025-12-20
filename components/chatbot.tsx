"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! I'm here to help you navigate Lockeroom Wellness. I can assist with booking appointments, finding professionals, understanding our services, or directing you to emergency resources. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    // Emergency keywords
    if (
      lowerMessage.includes("emergency") ||
      lowerMessage.includes("crisis") ||
      lowerMessage.includes("suicide") ||
      lowerMessage.includes("hurt myself") ||
      lowerMessage.includes("kill myself")
    ) {
      return "I'm concerned about your safety. If you're in immediate danger or having thoughts of self-harm, please call the Kenya Red Cross crisis line at 1199 (24/7) or visit our Emergency Resources page. You can also call 999 for immediate emergency services. Would you like me to show you more emergency contacts?"
    }

    // Booking related
    if (lowerMessage.includes("book") || lowerMessage.includes("appointment") || lowerMessage.includes("schedule")) {
      return "I can help you book an appointment! You can schedule a session with one of our licensed professionals by visiting our Booking page. Would you like me to guide you through the booking process or help you find a specific type of professional?"
    }

    // Pricing related
    if (
      lowerMessage.includes("price") ||
      lowerMessage.includes("cost") ||
      lowerMessage.includes("payment") ||
      lowerMessage.includes("package")
    ) {
      return "Our pricing is flexible to meet your needs! We offer:\n\n• Individual sessions: KES 2,000-3,500\n• Package deals: Starter (KES 7,500), Professional (KES 15,000), Premium (KES 24,000)\n• Psychometric assessments: KES 5,000-15,000\n• Corporate rates available on request\n\nWould you like to see detailed pricing or book a session?"
    }

    // Professional finding
    if (
      lowerMessage.includes("therapist") ||
      lowerMessage.includes("counselor") ||
      lowerMessage.includes("psychologist") ||
      lowerMessage.includes("professional") ||
      lowerMessage.includes("find")
    ) {
      return "We have a network of licensed mental health professionals specializing in various areas including anxiety, depression, trauma, relationship issues, and more. You can browse our professionals' profiles, read their bios, and see their specializations on our Professionals page. Would you like help finding someone specific?"
    }

    // Services related
    if (lowerMessage.includes("service") || lowerMessage.includes("therapy") || lowerMessage.includes("counseling")) {
      return "Lockeroom Wellness offers:\n\n• Individual Therapy\n• Couples Counseling\n• Family Therapy\n• Group Sessions\n• Specialized Programs\n• Psychometric Assessments\n\nAll sessions are conducted by licensed professionals in a confidential, supportive environment. Would you like to learn more about any specific service?"
    }

    // Contact/support
    if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
      return "You can reach us at:\n\n• Email: support@lockeroom.com\n• Phone: (123) 456-7890\n• WhatsApp: Available for quick inquiries\n\nOur support team is here to help! Would you like to visit our Contact page to send us a message?"
    }

    // General greeting
    if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey") ||
      lowerMessage.includes("good")
    ) {
      return "Hello! Welcome to Lockeroom Wellness. I'm here to help you with booking appointments, finding the right professional, understanding our services, or answering any questions. What can I assist you with today?"
    }

    // Default response
    return "I'm here to help! You can ask me about:\n\n• Booking appointments\n• Finding professionals\n• Our services and pricing\n• Emergency resources\n• Contact information\n\nWhat would you like to know?"
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 transition-all",
          isOpen && "scale-0",
        )}
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 w-96 h-[600px] bg-card border border-border rounded-lg shadow-2xl z-50 flex flex-col transition-all",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0",
        )}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Lockeroom Assistant</h3>
              <p className="text-xs opacity-90">Here to help you</p>
            </div>
          </div>
          <Button onClick={() => setIsOpen(false)} variant="ghost" size="icon" className="text-primary-foreground">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/30">
          {messages.map((message) => (
            <div key={message.id} className={cn("flex gap-3", message.sender === "user" && "flex-row-reverse")}>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                  message.sender === "bot" ? "bg-primary" : "bg-accent",
                )}
              >
                {message.sender === "bot" ? (
                  <Bot className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <User className="w-4 h-4 text-accent-foreground" />
                )}
              </div>
              <div
                className={cn(
                  "max-w-[75%] rounded-lg p-3",
                  message.sender === "bot" ? "bg-card border border-border" : "bg-primary text-primary-foreground",
                )}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className={cn("text-xs mt-1 opacity-70")}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-card border border-border rounded-lg p-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <Button onClick={handleSendMessage} size="icon" disabled={!inputValue.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Press Enter to send</p>
        </div>
      </div>
    </>
  )
}
