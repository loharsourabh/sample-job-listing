import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import AppButton from "../AppButton/AppButton";
import AppInput from "../AppInput/AppInput";

interface Props {
  value: any;
  onChane(): void;
}

export default function JobFormStep1(props: Props) {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="w-[577px] rounded-[10px] bg-white p-8"
    >
      <div className="flex justify-between">
        <h2 className="text-xl">Create a job</h2>
        <div className="font-medium">Step 1</div>
      </div>

      <label className="mt-6 block text-sm">
        <span className="mb-1 block font-medium">
          Job title
          <FontAwesomeIcon
            icon={faAsterisk}
            className="align-super text-[8px] text-[#D86161]"
          />
        </span>
        <AppInput required placeholder="ex. UX UI Designer" />
      </label>

      <label className="mt-6 block text-sm">
        <span className="mb-1 block font-medium">
          Company name
          <FontAwesomeIcon
            icon={faAsterisk}
            className="align-super text-[8px] text-[#D86161]"
          />
        </span>
        <AppInput required placeholder="ex. Google" />
      </label>

      <label className="mt-6 block text-sm">
        <span className="mb-1 block font-medium">
          Industry
          <FontAwesomeIcon
            icon={faAsterisk}
            className="align-super text-[8px] text-[#D86161]"
          />
        </span>
        <AppInput required placeholder="ex. Information Technology" />
      </label>

      <div className="mb-24 mt-6 flex gap-6">
        <label className="flex-1 text-sm">
          <span className="mb-1 block font-medium">Location</span>
          <AppInput required placeholder="ex. Chennai" />
        </label>
        <label className="flex-1 text-sm">
          <span className="mb-1 block font-medium">Remote type</span>
          <AppInput required placeholder="ex. In-office" />
        </label>
      </div>

      <div className="flex justify-end">
        <AppButton>Next</AppButton>
      </div>
    </form>
  );
}
