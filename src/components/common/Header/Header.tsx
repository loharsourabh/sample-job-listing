import AppButton from "../AppButton/AppButton";
import JobForm from "../JobForm/JobForm";
import { useState } from "react";

export default function Header() {
  const [isJobFormActive, setIsJobFormActive] = useState(false);

  return (
    <>
      <div className="sticky top-0 -m-4 mb-0 w-auto p-4 backdrop-blur">
        <AppButton onClick={() => setIsJobFormActive(true)}>
          Create New Job
        </AppButton>
      </div>
      {isJobFormActive && <JobForm onClose={() => setIsJobFormActive(false)} />}
    </>
  );
}
