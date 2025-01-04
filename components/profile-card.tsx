'use client';

import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SocialLinks } from "@/components/social-links";
import { InfoCards } from "@/components/info-cards";
import { User } from "lucide-react";
import Image from "next/image";

export function ProfileCard() {
  return (
    <Card className="w-full max-w-2xl p-8 space-y-6 shadow-lg border bg-card">
      <div className="flex flex-col items-center space-y-4">
        <a href="https://x.com/TasonJorres" target="_blank" rel="noopener noreferrer">
          <Avatar className="h-26 w-24">
            <Image
              src="/jason.jpg"
              alt="Profile picture"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
              style={{ objectFit: 'fill', width: '100%', height: '100%' }}
            />
            <AvatarFallback>
              <User className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
        </a>
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground">Jason Torres</h1>
          <p className="text-muted-foreground">Community Manager / Developer Advocate</p>
        </div>
      </div>
      
      <p className="text-center text-foreground/80 max-w-lg mx-auto">
      I am dedicated to fostering vibrant tech communities. I thrive on connecting with fellow innovators to share knowledge, discuss cutting-edge tools, and build networks that inspire growth and collaboration. Let's make the tech world more connected together! Hit me up below.
      </p>

      <SocialLinks />
      <InfoCards />
    </Card>
  );
}