import JobFormStep1 from "./JobFormStep1";
import JobFormStep2 from "./JobFormStep2";
import { CreateJob, UpdateJob } from "../../../api/endpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface Props {
  jobToBeEdited?: { [index: string]: string | number };
  onClose(): void;
}

export default function JobForm({ jobToBeEdited, onClose }: Props) {
  const queryClient = useQueryClient();
  const [formStep, setFormStep] = useState(1);
  const [jobDetails, setJobDetails] = useState(jobToBeEdited || {});

  const { mutate: createNewJob, isPending: isCreatingNewJob } = useMutation({
    mutationFn: (data: any) => CreateJob(data)(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobList"] });
      onClose();
    },
  });

  const { mutate: updateJob, isPending: isUpdatingJob } = useMutation({
    mutationFn: (data: any) => UpdateJob(data.jobId, data.body)(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobList"] });
      onClose();
    },
  });

  function closeForm(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function submitInputValues() {
    if (isCreatingNewJob || isUpdatingJob) {
      return;
    }

    if (jobToBeEdited) {
      updateJob({
        jobId: jobToBeEdited.id,
        body: jobDetails,
      });
    } else {
      createNewJob(jobDetails);
    }
  }

  return (
    <div
      onClick={closeForm}
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 backdrop-blur"
    >
      {formStep === 1 ? (
        <JobFormStep1
          value={jobDetails}
          onChange={(key, value) =>
            setJobDetails((prev) => ({ ...prev, [key]: value }))
          }
          onSubmit={() => setFormStep(2)}
        />
      ) : (
        <JobFormStep2
          value={jobDetails}
          onChange={(key, value) =>
            setJobDetails((prev) => ({ ...prev, [key]: value }))
          }
          onSubmit={submitInputValues}
        />
      )}
    </div>
  );
}
