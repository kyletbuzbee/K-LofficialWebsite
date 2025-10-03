import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

const INITIAL_DATA = {
  name: "",
  email: "",
  message: "",
  honeypot: "",
};

export function ContactForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, step, back, next } = useMultiStepForm([
    <Step1 key="step1" {...data} updateFields={updateFields} />,
    <Step2 key="step2" {...data} updateFields={updateFields} />,
    <Step3 key="step3" />,
  ]);

  function updateFields(fields: Partial<typeof INITIAL_DATA>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (currentStepIndex < steps.length - 2) {
      return next();
    }

    if (currentStepIndex === steps.length - 2) {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(() => {
          next(); // Go to success step
        })
        .catch(() => {
          alert("Error!");
        });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {step}
      <div>
        {currentStepIndex > 0 && currentStepIndex < steps.length - 1 && (
          <button type="button" onClick={back}>
            Back
          </button>
        )}
        {currentStepIndex < steps.length - 1 && (
          <button type="submit">
            {currentStepIndex === steps.length - 2 ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </form>
  );
}
