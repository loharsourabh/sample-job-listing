import JobFormStep1 from "./JobFormStep1";
import JobFormStep2 from "./JobFormStep2";

interface Props {
  onClose(): void;
}

export default function JobForm({ onClose }: Props) {
  
  return (
    <div
      onClick={(event) => event.target === event.currentTarget && onClose()}
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-5"
    >
      {/* <JobFormStep1 value='' onChane={() => {}} /> */}
      <JobFormStep2 value='' onChane={() => {}}/>
    </div>
  );
}
