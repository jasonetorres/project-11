'use client';

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-4">
            <a href="https://x.com/TasonJorres" target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="icon" className="hover:text-foreground hover:bg-accent">
          <Twitter className="h-5 w-5" />
        </Button>
      </a>
      <a href="https://www.linkedin.com/in/thejasontorres/" target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="icon" className="hover:text-foreground hover:bg-accent">
          <Linkedin className="h-5 w-5" />
        </Button>
      </a>
      <a href="https://github.com/jasonetorres" target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="icon" className="hover:text-foreground hover:bg-accent">
          <Github className="h-5 w-5" />
        </Button>
      </a>
      <a href="mailto:jasontorres585@icloud.com">
        <Button variant="outline" size="icon" className="hover:text-foreground hover:bg-accent">
          <Mail className="h-5 w-5" />
        </Button>
      </a>
    </div>
  );
}