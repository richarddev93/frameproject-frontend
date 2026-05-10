import { directusClient } from '../app/services/directus';
import type { CmsClient } from './cms';

export const cmsClient: CmsClient = directusClient;
