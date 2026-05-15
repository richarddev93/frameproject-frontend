export type HeroSection = {
    id: number;
    title: string;
    description: string;
    subtitle: string;
    banner: string;
    main_banner: boolean;
    status: string;
    sort: null | number;
    user_created: string;
    date_created: string;
    user_updated: null | string;
    date_updated: null | string;
    custom: {
        time: number;
        blocks: Array<{
            id: string;
            type: string;
            data: {
                code: string;
            };
        }>;
        version: string;
    };
};
