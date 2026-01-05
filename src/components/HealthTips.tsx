import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Toilet,
  Droplets,
  Utensils,
  Moon,
  Wind,
  User,
  Bug,
  Syringe,
  Hand,
  Carrot,
  PersonStanding,
  LucideIcon,
} from "lucide-react";


interface HealthTip {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  category: string;
}


const iconMap: Record<string, LucideIcon> = {
  soap: Hand,
  droplets: Droplets,
  salad: Utensils,
  plate: Carrot,
  moon: Moon,
  toilet: Toilet,
  window: Wind,
  walk: User,
  activity: PersonStanding,
  bug: Bug,
  syringe: Syringe,
};


const HEALTH_TIPS: HealthTip[] = [
  {
    id: "1",
    title: "Wash Hands Regularly",
    description:
      "Wash hands with soap and water for at least 20 seconds before eating, after using the toilet, and after coming from outside.",
    icon: "soap",
    category: "hygiene",
  },
  {
    id: "2",
    title: "Boil Water Before Drinking",
    description:
      "Always boil water for at least 10 minutes before drinking. This kills germs and makes water safe.",
    icon: "droplets",
    category: "water",
  },
  {
    id: "3",
    title: "Eat Fresh Vegetables",
    description:
      "Include green vegetables and fruits in your daily diet. They give vitamins and keep you healthy.",
    icon: "salad",
    category: "nutrition",
  },
  {
    id: "4",
    title: "Cover Food Properly",
    description:
      "Always cover food with a lid or cloth. This keeps flies and dust away from food.",
    icon: "plate",
    category: "food-safety",
  },
  {
    id: "5",
    title: "Sleep Well",
    description:
      "Get 7–8 hours of sleep every night. Good sleep keeps your body and mind healthy.",
    icon: "moon",
    category: "lifestyle",
  },
  {
    id: "6",
    title: "Use Clean Toilet",
    description:
      "Always use toilets. Open defecation spreads diseases. Keep toilets clean.",
    icon: "toilet",
    category: "sanitation",
  },
  {
    id: "7",
    title: "Keep Home Ventilated",
    description:
      "Open windows and doors for fresh air. Good ventilation prevents respiratory problems.",
    icon: "window",
    category: "environment",
  },
  {
    id: "8",
    title: "Exercise Daily",
    description:
      "Walk or do light exercise for 30 minutes daily. This keeps your body fit and active.",
    icon: "activity",
    category: "fitness",
  },
  {
    id: "9",
    title: "Avoid Mosquito Bites",
    description:
      "Use mosquito nets while sleeping. Remove stagnant water to prevent dengue and malaria.",
    icon: "bug",
    category: "prevention",
  },
  {
    id: "10",
    title: "Get Vaccinated",
    description:
      "Ensure all family members get vaccinated on time. Vaccines prevent serious diseases.",
    icon: "syringe",
    category: "prevention",
  },
];


const HealthTips: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Health Tips
        </h1>
        <p className="text-muted-foreground">
          Simple and effective health tips
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HEALTH_TIPS.map((tip) => {
          const Icon = iconMap[tip.icon];

          return (
            <Card
              key={tip.id}
              className="border border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg">{tip.title}</span>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HealthTips;
