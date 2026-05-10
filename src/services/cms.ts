export type CmsCollectionResponse<T> = {
  data: T[];
  meta?: {
    total_count?: number;
  };
};

export type CmsItemResponse<T> = {
  data: T;
};

export interface CmsClient {
  getCollection<T>(collection: string, query?: Record<string, string | number | boolean>): Promise<CmsCollectionResponse<T>>;
  getItem<T>(collection: string, id: string | number, query?: Record<string, string | number | boolean>): Promise<CmsItemResponse<T>>;
}

export const cmsClient: CmsClient = {
  getCollection: async () => {
    throw new Error('No CMS client registered. Please configure a CMS provider in src/app/services/cmsClient.ts');
  },
  getItem: async () => {
    throw new Error('No CMS client registered. Please configure a CMS provider in src/app/services/cmsClient.ts');
  },
};
