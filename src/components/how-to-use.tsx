import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import {
  Heart,
  Activity,
  Lightbulb,
  Store,
  MessageCircle,
  Building,
  MapPin,
  Globe,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
} from 'lucide-react';

interface TutorialStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const tutorialSteps: TutorialStep[] = [
    {
    icon: <Heart className="w-12 h-12" />,
    title: 'Welcome to Swasthya Saathi!',
    description: 'This app is designed to take care of your health. Let\'s learn how to use it.',
    color: 'bg-primary',
  },
  {
    icon: <Activity className="w-12 h-12" />,
    title: 'Symptom Tracker',
    description: 'Here you can record your symptoms. Date and time are automatically saved. This helps when visiting the doctor.',
    color: 'bg-primary',
  },
  {
    icon: <MessageCircle className="w-12 h-12" />,
    title: 'AI Assistant',
    description: 'Talk about your health problem. It will guide whether to rest at home or see a doctor.',
    color: 'bg-primary',
  },
  {
    icon: <Store className="w-12 h-12" />,
    title: 'Medicine Store',
    description: 'Buy affordable quality medicines. Search, add to cart, and order. Cash on Delivery available.',
    color: 'bg-primary',
  },
  {
    icon: <Building className="w-12 h-12" />,
    title: 'Government Schemes',
    description: 'Get information about free health schemes like Ayushman Bharat. Check if you are eligible.',
    color: 'bg-primary',
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: 'Nearby Hospitals',
    description: 'Find hospitals and clinics near you. Call directly or get directions.',
    color: 'bg-primary',
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Change Language',
    description: 'Select your preferred language from the language button above - Hindi, English, Bengali, Marathi, Bhojpuri, or Maithili.',
    color: 'bg-primary',
  },
];

interface AppTutorialProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppTutorial: React.FC<AppTutorialProps> = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const step= tutorialSteps[currentStep];
    const isFirst = currentStep === 0;
    const isLast = currentStep === tutorialSteps.length - 1;

    const handleNext = () => {
        if (isLast) {
            localStorage.setItem('tutorialCompleted', 'true');
            onClose();
        }
        else {
            setCurrentStep((prev)=>prev+1);
        }
    };

    const handlePrev = () => {
        setCurrentStep((prev) => Math.max(prev-1,0));
    };

    const handleSkip = () => {
        localStorage.setItem('tutorialCompleted', 'true');
        onClose()
    };

    return (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-md p-0 overflow-hidden border-4 border-border">
      {/* Header */}
      <div className={`${step.color} p-8 text-primary-foreground text-center`}>
        <div className="w-24 h-24 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
          {step.icon}
        </div>

        <DialogHeader>
          <DialogTitle className="text-2xl text-primary-foreground">
            {step.title}
          </DialogTitle>
        </DialogHeader>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-foreground text-center mb-6 leading-relaxed">
          {step.description}
        </p>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {tutorialSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentStep
                  ? 'bg-primary scale-125'
                  : index < currentStep
                  ? 'bg-primary/50'
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          {!isFirst && (
            <Button
              variant="outline"
              onClick={handlePrev}
              className="gap-2 border-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
          )}

          {isFirst && (
            <Button
              variant="ghost"
              onClick={handleSkip}
              className="text-muted-foreground"
            >
              Skip
            </Button>
          )}

          <Button onClick={handleNext} className="flex-1 gap-2">
            {isLast ? (
              <>
                <Check className="w-4 h-4" />
                Get Started
              </>
            ) : (
              <>
                Next
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);
};

export default AppTutorial;