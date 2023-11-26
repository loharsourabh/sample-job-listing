import AppButton from "../AppButton/AppButton";
import AppInput from "../AppInput/AppInput";

interface Props {
  value: any;
  onChane(): void;
}

export default function JobFormStep2(props: Props) {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="w-[577px] rounded-[10px] bg-white p-8"
    >
      <div className="flex justify-between">
        <h2 className="text-xl">Create a job</h2>
        <div className="font-medium">Step 2</div>
      </div>

      <div className="mt-6 flex gap-6">
        <label className="flex-1 text-sm">
          <span className="mb-1 block font-medium">Experience</span>
          <AppInput required placeholder="Minimum" />
        </label>
        <label className="flex-1 text-sm">
          <span className="invisible mb-1 block font-medium">Experience</span>
          <AppInput required placeholder="Maximum" />
        </label>
      </div>

      <div className="mt-6 flex gap-6">
        <label className="flex-1 text-sm">
          <span className="mb-1 block font-medium">Salary</span>
          <AppInput required placeholder="Minimum" />
        </label>
        <label className="flex-1 text-sm">
          <span className="invisible mb-1 block font-medium">Salary</span>
          <AppInput required placeholder="Maximum" />
        </label>
      </div>

      <label className="mt-6 block text-sm">
        <span className="mb-1 block font-medium">Total employee</span>
        <AppInput required placeholder="ex. UX UI Designer" />
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
            />
            <span className="text-sm">Quick apply</span>
          </label>

          <label className="flex items-center gap-1">
            <input
              required
              className="h-5 w-5 appearance-none rounded-full border-2 border-[#D8D8D8] transition-[border-width] duration-200 ease-linear checked:border-[7px] checked:border-[#1597E4]"
              type="radio"
              name="apply-type"
            />
            <span className="text-sm">Quick apply</span>
          </label>
        </div>
      </fieldset>

      <div className="flex justify-end">
        <AppButton>Next</AppButton>
      </div>
    </form>
  );
}
