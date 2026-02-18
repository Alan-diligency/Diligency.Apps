const URL_REGEX = /^(https?:\/\/|www\.)[^\s/$.?#].[^\s]*$/i;
export const isLink = (link: any): boolean => {
    return URL_REGEX.test(link);
}