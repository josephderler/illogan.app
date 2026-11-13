import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { Features } from "@/sections/Features";
import { VideoSection } from "@/sections/VideoSection";
import { Gallery } from "@/sections/Gallery";
import { TeacherApproved } from "@/sections/TeacherApproved";
import { Parents } from "@/sections/Parents";
import { FaqSection } from "@/sections/FaqSection";
import { CtaBanner } from "@/sections/CtaBanner";
import { useDocumentHead } from "@/seo/useDocumentHead";

export default function Home() {
  useDocumentHead("home");
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <VideoSection />
      <Gallery />
      <TeacherApproved />
      <Parents />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
