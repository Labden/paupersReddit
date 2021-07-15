
export interface Post{
    //make sure to match the spelling/casing in the api
    //that helps angular to map JSON to our interface
    title: string;
    image?: string;
    link: string;
}