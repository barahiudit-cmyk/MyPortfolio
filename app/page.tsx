

import UditHero from '@/components/UditHero';
import UditAbout from '@/components/UditAbout';
import UditStats from '@/components/UditStats';
import UditTimeline from '@/components/UditTimeline';
import UditSkills from '@/components/UditSkills';
import UditProjects from '@/components/UditProjects';
import UditHackathons from '@/components/UditHackathons';
import BottomNavbar from "@/components/BottomNavbar";
import ContactCTA from '@/components/ContactCTA';
import { experiences, education,stats } from '@/data/udit-portfolio-data';


import "@/styles/udit-portfolio.css"

export default function App() {
  return (
    <div className="udit-container">
       <div className="bg-pattern" />
      <UditHero />
      <UditAbout />
      <UditStats
        title="Highlights"
        items={stats}
      />
      <UditTimeline
        title="Work Experience"
        items={experiences.map((e) => ({
          primary: e.company,
          secondary: e.role,
          period: e.period,
          color: e.color,
          initial: e.initial,
          logo: e.logo
        }))}
      />
      <UditTimeline
        title="Education"
        items={education.map((e) => ({
          primary: e.school,
          secondary: e.degree,
          period: e.period,
          color: e.color,
          initial: e.initial,
        }))}
      />
      <UditSkills />
      <UditProjects />
      
      <UditHackathons />
      <ContactCTA />
      <footer className="udit-footer " style={{ marginBottom: '60px' }}>
        <p>© {new Date().getFullYear()} Udit Barahi. Built with Next.js, TypeScript and Tailwind CSS.</p>
      </footer>
      <BottomNavbar />
    </div>
  );
}
