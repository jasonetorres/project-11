'use client';

import { Card } from "@/components/ui/card";

export function InfoCards() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-4">
      <Card className="p-4 bg-accent/50">
        <h3 className="font-semibold mb-1 text-foreground">Current Focus</h3>
        <p className="text-sm text-foreground/80">Building the Largest Community of Developers on a talent platforem at Torc.dev</p>
      </Card>
      <Card className="p-4 bg-accent/50">
        <h3 className="font-semibold mb-1 text-foreground">Experience</h3>
        <p className="text-sm text-foreground/80">15+ years in film, 2+ years as a community manager and developer</p>
      </Card>
    </div>
  );
}