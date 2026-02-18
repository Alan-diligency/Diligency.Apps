import { createClient } from '@sanity/client';
export const SANITY_CLIENT = createClient({
    dataset: 'production',
    projectId: "623q79br",
    token: "skT7XtUjfCkluEDVKVAkPKSlDkAhqMnBGMYnqvH3dKtPG8Y7HpQPLGBGnXYrsD8JFBT2vGndYJy8WQKvHG5e3y0ptVS0zmSVYjhAkApACChfMOWg5ztpkasFmpZiG8tTfMxQosV90UG4kPOpTfQb7cWcTT7XHy31oDeZDDr1yrdVgMbmSOJx",
    apiVersion: '2025-02-19',
    useCdn: false
});