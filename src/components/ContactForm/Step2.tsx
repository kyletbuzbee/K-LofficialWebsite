type Step2Data = {
  message: string;
  honeypot: string;
};

type Step2Props = Step2Data & {
  updateFields: (fields: Partial<Step2Data>) => void;
};

export function Step2({ message, honeypot, updateFields }: Step2Props) {
  return (
    <div>
      <h2>Step 2</h2>
      <label>
        Message
        <textarea
          value={message}
          onChange={(e) => updateFields({ message: e.target.value })}
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
