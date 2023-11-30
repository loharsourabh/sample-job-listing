import AppButton from "../AppButton/AppButton";
import AppInput from "../AppInput/AppInput";

interface Props {
  value: any;
  onChange(key: string, value: string): void;
  onSubmit(): void;
}

export default function JobFormStep2({ value, onChange, onSubmit }: Props) {
  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  function experienceChange(
    event: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) {
    const { value, min, max } = event.target;

    if ((Number(value) >= Number(min) && Number(value) <= Number(max)) || value === '') {
      onChange(key, value);
    }
  }

  return (
    <form
      onSubmit={submitForm}
      className="max-h-screen w-[577px] overflow-auto rounded-[10px] bg-white p-8"
    >
      <div className="flex justify-between">
        <h2 className="text-xl">Create a job</h2>
        <div className="font-medium">Step 2</div>
      </div>

      <div className="mt-6 flex gap-6">
        <label className="flex-1 text-sm">
          <span className="mb-1 block font-medium">Experience</span>
          <AppInput
            required
            placeholder="Minimum"
            value={value.minExperience || ""}
            onChange={(event) => experienceChange(event, "minExperience")}
            type="number"
            min={1}
            max={50}
          />
        </label>

        <label className="flex-1 text-sm">
          <span className="invisible mb-1 block font-medium">Experience</span>
          <AppInput
            required
            placeholder="Maximum"
            value={value.maxExperience || ""}
            onChange={(event) => experienceChange(event, "maxExperience")}
            type="number"
            min={1}
            max={50}
          />
        </label>
      </div>

      <div className="mt-6 flex gap-6">
        <label className="flex-1 text-sm">
          <span className="mb-1 block font-medium">Salary</span>
          <AppInput
            required
            placeholder="Minimum"
            value={value.minSalary || ""}
            onChange={(event) => onChange("minSalary", event.target.value)}
            type="number"
          />
        </label>

        <label className="flex-1 text-sm">
          <span className="invisible mb-1 block font-medium">Salary</span>
          <AppInput
            required
            placeholder="Maximum"
            value={value.maxSalary || ""}
            onChange={(event) => onChange("maxSalary", event.target.value)}
            type="number"
          />
        </label>
      </div>

      <label className="mt-6 block text-sm">
        <span className="mb-1 block font-medium">Total employee</span>
        <AppInput
          required
          placeholder="ex. UX UI Designer"
          value={value.totalEmployee || ""}
          onChange={(event) => onChange("totalEmployee", event.target.value)}
          type="number"
        />
      </label>

      <fieldset className="mb-24 mt-6">
        <legend className="mb-2 text-sm font-medium">Apply type</legend>

        <div className="flex gap-4">
          <label className="flex items-center gap-1">
            <input
              required
              className="h-5 w-5 appearance-none rounded-full border-2 border-[#D8D8D8] transition-[border-width] duration-200 ease-linear checked:border-[7px] checked:border-[#1597E4]"
              type="radio"
              name="apply-type"
              value="quick"
              onChange={(event) => onChange("applyType", event.target.value)}
              checked={value.applyType === "quick"}
            />
            <span className="text-sm">Quick apply</span>
          </label>

          <label className="flex items-center gap-1">
            <input
              required
              className="h-5 w-5 appearance-none rounded-full border-2 border-[#D8D8D8] transition-[border-width] duration-200 ease-linear checked:border-[7px] checked:border-[#1597E4]"
              type="radio"
              name="apply-type"
              value="external"
              onChange={(event) => onChange("applyType", event.target.value)}
              checked={value.applyType === "external"}
            />
            <span className="text-sm">External apply</span>
          </label>
        </div>
      </fieldset>

      <div className="flex justify-end">
        <AppButton>Save</AppButton>
      </div>
    </form>
  );
}
