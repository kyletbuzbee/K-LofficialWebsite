import Layout from "@/components/Layout";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { useState } from "react";

const INITIAL_DATA = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  pickupDate: "",
  materials: "",
  honeypot: "",
};

type UserData = typeof INITIAL_DATA;

type StepProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

function Step1({ name, email, phone, updateFields }: StepProps) {
  return (
    <div>
      <h2>Contact Information</h2>
      <label>
        Name
        <input
          autoFocus
          type="text"
          value={name}
          onChange={(e) => updateFields({ name: e.target.value })}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
        />
      </label>
    </div>
  );
}

function Step2({ address, city, state, zip, updateFields }: StepProps) {
  return (
    <div>
      <h2>Pickup Address</h2>

      <label>
        Address
        <input
          type="text"
          value={address}
          onChange={(e) => updateFields({ address: e.target.value })}
        />
      </label>
      <label>
        City
        <input
          type="text"
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
        />
      </label>
      <label>
        State
        <input
          type="text"
          value={state}
          onChange={(e) => updateFields({ state: e.target.value })}
        />
      </label>
      <label>
        Zip Code
        <input
          type="text"
          value={zip}
          onChange={(e) => updateFields({ zip: e.target.value })}
        />
      </label>
    </div>
  );
}

function Step3({ pickupDate, materials, honeypot, updateFields }: StepProps) {
  return (
    <div>
      <h2>Pickup Details</h2>
      <label>
        Desired Pickup Date
        <input
          type="date"
          value={pickupDate}
          onChange={(e) => updateFields({ pickupDate: e.target.value })}
        />
      </label>
      <label>
        Materials for Pickup
        <textarea
          value={materials}
          onChange={(e) => updateFields({ materials: e.target.value })}
        />
      </label>
      <label style={{ display: "none" }}>
        Honeypot
        <input
          type="text"
          value={honeypot}
          onChange={(e) => updateFields({ honeypot: e.target.value })}
        />
      </label>
    </div>
  );
}

function SuccessStep() {
  return (
    <div>
      <h2>Success!</h2>
      <p>Your pickup has been scheduled.</p>
    </div>
  );
}

export default function SchedulePickupPage(): JSX.Element {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, step, back, next } = useMultiStepForm([
    <Step1 key="step1" {...data} updateFields={updateFields} />,
    <Step2 key="step2" {...data} updateFields={updateFields} />,
    <Step3 key="step3" {...data} updateFields={updateFields} />,
    <SuccessStep key="success" />,
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
      fetch("/api/schedule", {
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
    <Layout>
      <h1>Schedule a Pickup</h1>
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
    </Layout>
  );
}
