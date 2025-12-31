import { createClient } from '@sanity/client';
export const SANITY_CLIENT = createClient({
    projectId: '623q79br',
    dataset: 'production',
    token: 'skHx3ZQzwJMq8mY3f75uWEOwmjj5bLun17ZrADBY0VKN0YzSVmaW6M1T884xaRDLzz9amAs6wKA47yFyW0Fwx3fOxZ3UntSpNWnhtSwRgutiCizBQsaQ0qD1zgjMcTe6sMkXhBKxTR527SqfIevnzF52txlRWxIK2zsTw21sQ8YQuqdpFgDp',
    apiVersion: '2025-02-19',
    useCdn: false
});