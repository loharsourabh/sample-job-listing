import { customFetch } from "./customFetch";

export function GetAllJobs() {
  return customFetch({
    method: "GET",
    endpoint: "/jobs",
  });
}

export function CreateJob(body: { [index: string]: string | number }) {
  return customFetch({
    method: "POST",
    endpoint: "/jobs",
    body: JSON.stringify(body),
  });
}

export function UpdateJob(
  jobId: string,
  body: { [index: string]: string | number },
) {
  return customFetch({
    method: "PUT",
    endpoint: `/jobs/${jobId}`,
    body: JSON.stringify(body),
  });
}

export function DeleteJob(jobID: string) {
  return customFetch({
    method: "DELETE",
    endpoint: `/jobs/${jobID}`,
  });
}
