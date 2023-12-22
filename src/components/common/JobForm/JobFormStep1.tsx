import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import AppButton from "../AppButton/AppButton";
import AppInput from "../AppInput/AppInput";

interface Props {
  value: any;
  onChange(key: string, value: string): void;
  onSubmit(): void;
}

export default function JobFormStep1({ value, onChange, onSubmit }: Props) {
  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={submitForm}>
      <label className="mt-6 block text-sm">
        <span className="mb-1 block font-medium">
          Job title
          <FontAwesomeIcon
            icon={faAsterisk}
            className="align-super text-[8px] text-[#D86161]"
          />
        </span>
        <AppInput
          required
          placeholder="ex. UX UI Designer"
          value={value.jobTitle || ""}
          onChange={(event) => onChange("jobTitle", event.target.value)}
        />
      </label>

      <label className="mt-6 block text-sm">
        <span className="mb-1 block font-medium">
          Company name
          <FontAwesomeIcon
            icon={faAsterisk}
            className="align-super text-[8px] text-[#D86161]"
          />
        </span>
        <AppInput
          required
          placeholder="ex. Google"
          value={value.companyName || ""}
          onChange={(event) => onChange("companyName", event.target.value)}
        />
      </label>

      <label className="mt-6 block text-sm">
        <span className="mb-1 block font-medium">
          Industry
          <FontAwesomeIcon
            icon={faAsterisk}
            className="align-super text-[8px] text-[#D86161]"
          />
        </span>
        <AppInput
          required
          placeholder="ex. Information Technology"
          value={value.industry || ""}
          onChange={(event) => onChange("industry", event.target.value)}
        />
      </label>

      <div className="mb-24 mt-6 flex gap-6">
        <label className="flex-1 text-sm">
          <span className="mb-1 block font-medium">Location</span>
          <AppInput
            required
            placeholder="ex. Chennai"
            value={value.location || ""}
            onChange={(event) => onChange("location", event.target.value)}
          />
        </label>
        <label className="flex-1 text-sm">
          <span className="mb-1 block font-medium">Remote type</span>
          <AppInput
            required
            placeholder="ex. In-office"
            value={value.remoteType || ""}
            onChange={(event) => onChange("remoteType", event.target.value)}
          />
        </label>
      </div>

      <div className="flex justify-end">
        <AppButton>Next</AppButton>
      </div>
    </form>
  );
}
