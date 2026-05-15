import type { CmsClient } from "./cms";

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL ?? "";

const DIRECTUS_TOKEN = process.env.NEXT_PUBLIC_DIRECTUS_API_TOKEN ?? "";

type QueryParams = Record<string, string | number | boolean>;

type FetchOptions = {
  query?: QueryParams;

  revalidate?: number;

  tags?: string[];
};

type DirectusResponse<T> = {
  data: T;
};

type DirectusCollectionResponse<T> = {
  data: T[];

  meta?: {
    total_count?: number;
  };
};

function buildUrl(path: string, query?: QueryParams) {
  const url = new URL(`${DIRECTUS_URL}${path}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url.toString();
}

async function directusFetch<T>(
  path: string,
  options?: FetchOptions,
): Promise<T> {
  const url = buildUrl(path, options?.query);

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",

        ...(DIRECTUS_TOKEN && {
          Authorization: `Bearer ${DIRECTUS_TOKEN}`,
        }),
      },

      next: {
        revalidate: options?.revalidate,

        tags: options?.tags,
      },
    });

    if (!response.ok) {
      const text = await response.text();

      throw new Error(`Directus Error (${response.status}): ${text}`);
    }

    const json = (await response.json()) as DirectusResponse<T>;

    return json.data;
  } catch (error) {
    console.error("[DIRECTUS_FETCH_ERROR]", error);

    throw error;
  }
}

export async function getDirectusCollection<T>(
  collection: string,
  options?: FetchOptions,
): Promise<DirectusCollectionResponse<T>> {
  const url = buildUrl(`/items/${collection}`, options?.query);

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",

        ...(DIRECTUS_TOKEN && {
          Authorization: `Bearer ${DIRECTUS_TOKEN}`,
        }),
      },

      next: {
        revalidate: options?.revalidate,

        tags: options?.tags,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed collection fetch`);
    }

    return response.json();
  } catch (error) {
    console.error("[DIRECTUS_COLLECTION_ERROR]", error);

    throw error;
  }
}

export async function getDirectusItem<T>(
  collection: string,
  id: string | number,
  options?: FetchOptions,
): Promise<T> {
  return directusFetch<T>(`/items/${collection}/${id}`, options);
}

export const directusClient: CmsClient = {
  getCollection: getDirectusCollection,
  getItem: getDirectusItem,
};
