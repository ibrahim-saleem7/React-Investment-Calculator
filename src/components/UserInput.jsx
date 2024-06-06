export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="Initial">Initial Investment</label>
          <input
            type="number"
            id="Initial"
            required
            onChange={(e) => onChange("initialInvestment", e.target.value)}
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="Annual">Annual Investment</label>
          <input
            type="number"
            id="Annual"
            required
            onChange={(e) => onChange("annualInvestment", e.target.value)}
            value={userInput.annualInvestment}
          />
        </p>
        <p>
          <label htmlFor="Expected">Expected Return</label>
          <input
            type="number"
            id="Expected"
            required
            onChange={(e) => onChange("expectedReturn", e.target.value)}
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="Duration">Duration</label>
          <input
            type="number"
            id="Duration"
            required
            onChange={(e) => onChange("duration", e.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
