import type { CmsClient } from './cms';

export type DirectusCollectionResponse<T> = {
  data: T[];
  meta?: {
    total_count?: number;
  };
};

const DIRECTUS_BASE_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL ?? '';
const DIRECTUS_TOKEN = process.env.DIRECTUS_API_TOKEN ?? '';
console.log('Directus Config:', {
  url: process.env.NEXT_PUBLIC_DIRECTUS_URL,
  token: process.env.DIRECTUS_API_TOKEN,
});
// Log on initialization
console.log('[Directus Init]', {
  url: DIRECTUS_BASE_URL,
  tokenExists: !!DIRECTUS_TOKEN,
  tokenLength: DIRECTUS_TOKEN?.length,
});
  console.log(DIRECTUS_TOKEN)

const buildDirectusUrl = (collection: string, query?: Record<string, string | number | boolean>) => {
  const baseUrl = `${DIRECTUS_BASE_URL}/items/${collection}`;
  const url = new URL(baseUrl);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url.toString();
};

const directusFetch = async <T>(collection: string, query?: Record<string, string | number | boolean>) => {
  const url = buildDirectusUrl(collection, query);

  console.debug('[Directus] Fetching:', {
    url,
    collection,
    query,
    hasToken: !!DIRECTUS_TOKEN,
  });

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(DIRECTUS_TOKEN ? { Authorization: `Bearer ${DIRECTUS_TOKEN}` } : {}),
    },
  });

  if (!response.ok) {
    const text = await response.text();
    console.error('[Directus] Request failed:', {
      status: response.status,
      statusText: response.statusText,
      responseText: text,
    });
    throw new Error(`Directus request failed (${response.status}): ${text}`);
  }

  const data = (await response.json()) as DirectusCollectionResponse<T>;
  console.debug('[Directus] Request successful:', { itemCount: data.data?.length });
  return data;
};

export async function getDirectusCollection<T>(collection: string, query?: Record<string, string | number | boolean>) {
  return directusFetch<T>(collection, query);
}

export async function getDirectusItem<T>(collection: string, id: string | number, query?: Record<string, string | number | boolean>) {
  const url = new URL(`${DIRECTUS_BASE_URL}/items/${collection}/${id}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  const response = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
      ...(DIRECTUS_TOKEN ? { Authorization: `Bearer ${DIRECTUS_TOKEN}` } : {}),
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Directus request failed (${response.status}): ${text}`);
  }

  return (await response.json()) as { data: T };
}

export const directusClient: CmsClient = {
  getCollection: getDirectusCollection,
  getItem: getDirectusItem,
};
