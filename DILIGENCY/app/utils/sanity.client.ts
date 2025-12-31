// import { createClient } from '@sanity/client';

// export const SANITY_CLIENT = createClient() =>{
//     projectId: '623q79br',
//     dataset: 'production',
//     token: process.env.SANITY_TOKEN,
//     apiVersion: '2025-02-19',
//     useCdn: false
// };

import { createClient } from '@sanity/client';

export const SANITY_CLIENT = () => {
    const config = useRuntimeConfig();

    return createClient({
        projectId: config.public.sanityProjectId,
        dataset: config.public.sanityDataset,
        apiVersion: config.public.sanityApiVersion,
        token: process.server ? config.sanityToken : undefined,
        useCdn: true,
    });
};


//projetc id ==> prod
//bap4muo0

//projetc Organisation Id
//otd8NFBiy

//Client TOken ==> prod
//skUF0yIh14OXqxTZANhOqjNH9chvO7x0eEc4lfdsbNNjNzx9y1aDDrpOmgOH8k1Sz9lvI4d7RfvtrQqNikD8fmAlrDNj40AcdWuMoHZiFXgIw4HQ2ysppwZO8nBMt4zEJrnYN0wmNAhU1KZ7yXBLbIpwkm2uUZrmNNonazVbiX5VcehM46tk


