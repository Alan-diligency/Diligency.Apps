import { createClient } from '@sanity/client';

export const SANITY_CLIENT = createClient({
    dataset: 'production',
    projectId: "bap4muo0",
    token: "skAIcOp1i9HPoA9sNBAPSIQcuJLBuyFUtXNhndGMxJfNzNtA2sozkJglIUQU904xSHttWEA8gnTLj2fO74JKgAUGHyBWTpUtUfGE7CVHQd1lqsyh60evFdg3soXkBsLQat0pcqaQhjqiyDFaFiNFW7OJLD89trojpg6MCNLWQn2DFmCVVWGB",
    apiVersion: '2025-02-19',
    useCdn: false
});

//  projectId: process.env.SANITY_PROJECT_ID,
// token: process.env.SANITY_TOKEN,