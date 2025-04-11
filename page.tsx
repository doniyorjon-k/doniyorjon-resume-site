import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <section className="text-center py-20 px-4">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold mb-4">
          Doniyorjon Kuchkarov
        </motion.h1>
        <p className="text-xl md:text-2xl mb-4">Sales Manager / QA Enthusiast</p>
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" asChild>
            <a href="https://uz.linkedin.com/in/doniyor-kuchkarov-32142613b" target="_blank">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button variant="default" asChild>
            <a href="/Doniyorjon_Kuchkarov_CV.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Work Experience</h2>
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="text-xl font-bold">Sales Manager – Mohirdev</h3>
            <p className="text-sm text-gray-600">Sep 2024 – Present | Tashkent, Uzbekistan</p>
            <ul className="list-disc list-inside mt-2">
              <li>Managed 200+ clients with 95% satisfaction</li>
              <li>Increased course enrollments by 40%</li>
              <li>Boosted conversion rates by 30%</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="text-xl font-bold">Exam Coordinator – Najot Ta'lim</h3>
            <p className="text-sm text-gray-600">Sep 2023 – Jul 2024 | Tashkent, Uzbekistan</p>
            <ul className="list-disc list-inside mt-2">
              <li>Handled 1,500+ students, 95% on-time completion</li>
              <li>Standardized assessment, reduced inconsistencies by 40%</li>
              <li>Boosted operational efficiency by 30%</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Education</h2>
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="text-xl font-bold">Inha University in Tashkent</h3>
            <p className="text-sm text-gray-600">School of Computer and Information Engineering – May 2023</p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Activities & Achievements</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Mentored students at Technovation Challenge</li>
          <li>Volunteered at Google DevFest 2018</li>
          <li>Organized International Youth Summit</li>
          <li>Participant in IUT Hackathon 2018</li>
          <li>Completed Quality Assurance course at Mohirdev</li>
        </ul>
      </section>

      <section className="bg-gray-200 py-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="flex flex-col items-center gap-2">
            <p><Mail className="inline mr-2" /> doniyorkuchkarov@gmail.com</p>
            <p><Phone className="inline mr-2" /> +998 91 561-05-86</p>
          </div>
        </div>
      </section>
    </main>
  );
}