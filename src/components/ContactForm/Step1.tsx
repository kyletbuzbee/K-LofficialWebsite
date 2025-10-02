type Step1Data = {
  name: string;
  email: string;
};

type Step1Props = Step1Data & {
  updateFields: (fields: Partial<Step1Data>) => void;
};

export function Step1({ name, email, updateFields }: Step1Props) {
  return (
    <div>
      <h2>Step 1</h2>
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
    </div>
  );
}
