const defaultBaseUrl = "https://655f4da5879575426b450f5f.mockapi.io";

interface BaseOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  params?: { [index: string]: any };
  body?: BodyInit;
  headers?: HeadersInit;
}

interface OptionsEndpoint extends BaseOptions {
  baseUrl?: string;
  endpoint: string;
}

interface OptionsBaseUrl extends BaseOptions {
  baseUrl: string;
  endpoint?: string;
}

type Options = OptionsEndpoint | OptionsBaseUrl;

export function customFetch({
  baseUrl = defaultBaseUrl,
  endpoint = "",
  method,
  params,
  body,
  headers,
}: Options) {
  const fullUrl = makeUrl(baseUrl + endpoint, params);

  return async function queryFn(): Promise<any> {
    const options: RequestInit = {
      method,
      body,
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
    };

    const response = await fetch(fullUrl, options);

    if (response.ok) {
      return response.json();
    }

    throw new Error("Request failed!");
  };
}

function makeUrl(url: string, params: { [index: string]: any } = {}) {
  const paramsList = [];

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    paramsList.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }

  return url + (paramsList.length ? "?" + paramsList.join("&") : "");
}
