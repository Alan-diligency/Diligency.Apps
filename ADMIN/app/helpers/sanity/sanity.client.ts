import { createClient } from '@sanity/client';
export const SANITY_CLIENT = createClient({
    projectId: 'bap4muo0',
    dataset: 'production',
    token: 'kEG6PgxbibTihtnEJxkdkzNaBkoUyw17ORKqMRFNxsd81xhdETXU69GFeFCPC5xLHKXvCFVqz4HpFYjhJS9vhBf0uvvVKu1meIF0AmPM9XYmUD9IEP4inYpapHBR8erQoZ4R59BIiC5KHBq4kZHDI6Mo2w6nOT9VgzG1TN5RafjDUOPZzAN',
    apiVersion: '2025-02-19',
    useCdn: false
});