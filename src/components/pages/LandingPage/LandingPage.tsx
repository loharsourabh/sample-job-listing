import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GetAllJobs, DeleteJob } from "../../../api/endpoints";
import { useState } from "react";
import logo from "../../../assets/images/logo.png";
import AppButton from "../../common/AppButton/AppButton";
import ConfirmationDialog from "../../common/ConfirmationDialog/ConfirmationDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function LandingPage() {
  const queryClient = useQueryClient();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const { data: jobList } = useQuery({
    queryKey: ["jobList"],
    queryFn: GetAllJobs(),
    staleTime: 5 * 60 * 1000,
  });

  const { mutate: deleteJob } = useMutation({
    mutationFn: (jobID: number) => DeleteJob(jobID)(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobList"] });
    },
  });

  return (
    <div>
      <div className="grid gap-10 [@media(min-width:1000px)]:grid-cols-2">
        {(jobList as any[])?.map((job) => (
          <div key={job.id} className="flex rounded-[10px] bg-white px-6 py-4">
            <div className="mr-2 w-12 shrink-0 self-start overflow-hidden rounded-[5px]">
              <img src={logo} className="w-full" />
            </div>
            <div>
              <h2 className="text-2xl">{job.jobTitle}</h2>
              <div>{job.companyName}</div>
              <div className="mb-6 text-[#7A7A7A]">
                {job.location}
                {job.remoteType && (
                  <span className="capitalize"> ({job.remoteType})</span>
                )}
              </div>

              <div className="mb-2">Part-Time (9.00 am - 5.00 pm IST)</div>
              <div className="mb-2">
                Experience ({job.minExperience} - {job.maxExperience} years)
              </div>
              <div className="mb-2">
                INR (₹) {job.minSalary} - {job.maxSalary} / Month
              </div>
              <div className="mb-6">{job.totalEmployee} employees</div>

              <AppButton
                variant={job.applyType === "quick" ? "default" : "light"}
              >
                {job.applyType === "quick" ? "Apply Now" : "External Apply"}
              </AppButton>
            </div>

            <div className="ml-auto flex gap-5 self-start">
              <FontAwesomeIcon
                icon={faPencil}
                className="cursor-pointer"
                title="Edit"
              />

              <FontAwesomeIcon
                icon={faTrashCan}
                className="cursor-pointer text-red-500"
                title="Delete"
                onClick={() => setIsDeleteDialogOpen(true)}
              />
              {isDeleteDialogOpen && (
              <ConfirmationDialog
                onSuccess={() => deleteJob(job.id)}
                onClose={() => setIsDeleteDialogOpen(false)}
              />
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
