"use client";

type Props = {
  active: string;
  setActive: (value: string) => void;
};

export default function UditProjectTabs({
  active,
  setActive,
}: Props) {
  return (
    <div className="udit-project-tabs">
      <button
        className={`udit-tab-btn ${
          active === "web" ? "udit-tab-active" : ""
        }`}
        onClick={() => setActive("web")}
      >
        💻 Web Dev
      </button>

      <button
        className={`udit-tab-btn ${
          active === "creative" ? "udit-tab-active" : ""
        }`}
        onClick={() => setActive("creative")}
      >
        🎨 Graphic Design
      </button>
    </div>
  );
}