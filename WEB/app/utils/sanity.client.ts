import { createClient } from '@sanity/client';
//DEV
export const SANITY_CLIENT = createClient({
    dataset: 'production',
    projectId: "623q79br",
    token: "sky2kgOzXXkm8j64Lbce20iXQLxYmvndB4Ub0uq8vz5WVvO4D7eXMEBeGuu1iFJvLXBiRMVbOhUKIL9qIZiuGkGvLoD0VbMOMiXbSEJA6WlrKpVJGZQSWXHjcDgOXtUzbKG8WtuvSaHP952hlHrV0AvUHkeJwo8l9WrOedbi5Outvb5AFgMX", //TOKEN_A
    apiVersion: '2025-02-19',
    useCdn: false
});
