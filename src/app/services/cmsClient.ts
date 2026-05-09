import { directusClient } from './directus';
import type { CmsClient } from './cms';

export const cmsClient: CmsClient = directusClient;
