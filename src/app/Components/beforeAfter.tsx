import React from "react";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import {
  PiSliders,
  PiChartLine,
  PiArrowsClockwise,
  PiDatabase,
  PiGear,
  PiArrowUp,
} from "react-icons/pi";

const painPoints = [
  {
    icon: <PiSliders size={32} />,
    title: "Disconnected Systems",
    description:
      "Separate tools across departments cause delays, double entry, and costly errors. We bring everything into one streamlined system.",
  },
  {
    icon: <PiChartLine size={32} />,
    title: "Lack of Real-Time Insights",
    description:
      "You can’t make great decisions with outdated data. We provide live dashboards and up-to-date reports.",
  },
  {
    icon: <PiArrowsClockwise size={32} />,
    title: "Manual Workflows",
    description:
      "Approvals, payroll, inventory — too much is done by hand. We automate where it matters most.",
  },
  {
    icon: <PiDatabase size={32} />,
    title: "Scattered Data",
    description:
      "Your data is all over the place — spreadsheets, emails, disconnected apps. We unify it in one place.",
  },
  {
    icon: <PiGear size={32} />,
    title: "Generic Software",
    description:
      "Off-the-shelf software forces you to adapt to it. We build solutions that adapt to you.",
  },
  {
    icon: <PiArrowUp size={32} />,
    title: "Difficult to Scale",
    description:
      "Your current tools weren’t built to grow with you. Our platform scales alongside your success.",
  },
];

export default function PainPointsSection() {
  return (
    <section className="w-full px-4 py-20 bg-secondary ">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary ">
          Business Challenges We Solve
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {painPoints.map((point, idx) => (
          <Card key={idx} className="shadow-md rounded-xl overflow-hidden">
            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <div className="">{point.icon}</div>
              <h4 className="text-lg font-semibold text-primary ">
                {point.title}
              </h4>
              <p className="text-sm text-gray-600">{point.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
