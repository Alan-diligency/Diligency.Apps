import { createClient } from '@sanity/client';

export const SANITY_CLIENT = createClient({
    dataset: 'production',
    projectId: "623q79br",
    token: "sk4lJGOQVv55YvlXfCbN6KZFRkU01HoXPSnpYrlQy5VDQHJxno4TuRH0foXw9CPsFKlLRR7x18aa5KnopuMCNYuIjyU1SwoKLz3yBe2OgveFXBGBEfwLywbfzG6BQxOvoh3sZ79R6dnNRiNkU5y3JCHCVO9dpw9jEpO4kT6UbqxkHgELWKnP",
    apiVersion: '2025-02-19',
    useCdn: false
});

//  projectId: process.env.SANITY_PROJECT_ID,
// token: process.env.SANITY_TOKEN,