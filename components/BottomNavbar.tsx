"use client";
import { Home, FileDown } from "lucide-react";
import ThemeToggle from "@/components/provider/DarkToggel";

export default function BottomNavbar() {


  return (
   <div className="bottom-nav">
  <button
    className="nav-item"
    onClick={() => {
      document.getElementById("Hero")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
  >
    <Home size={18} />
    <span>Home</span>
  </button>

  <a
    href="/resume/UditResume1.pdf"
    download
    className="nav-item"
  >
    <FileDown size={18} />
    <span>Resume</span>
  </a>

  <div className="toggle ">
    <ThemeToggle />
  </div>
</div>
  );
}