import { customFetch } from "./customFetch";

export function GetAllJobs() {
    return customFetch({
        method: 'GET',
        endpoint: '/jobs',
    });
}

export function DeleteJob(jobID: number) {
    return customFetch({
        method: 'DELETE',
        endpoint: `/jobs/${jobID}`
    });
}