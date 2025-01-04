import { ThemeToggle } from "@/components/theme-toggle";
import { ProfileCard } from "@/components/profile-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <ThemeToggle />
      <ProfileCard />
    </main>
  );
}