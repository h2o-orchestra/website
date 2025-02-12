import * as contentful from "contentful";
import type {AssetLink, EntryFieldTypes, Link} from "contentful";

export interface Concert {
    contentTypeId: "concert",
    fields: {
        title: EntryFieldTypes.Text
        date: EntryFieldTypes.Date,
        location: EntryFieldTypes.Location,
        price: EntryFieldTypes.Number
        description: EntryFieldTypes.RichText,
    }
}

export interface Orchestre {
    contentTypeId: "orchestre",
    fields: {
        title: EntryFieldTypes.Text
        description: EntryFieldTypes.RichText
        resume: EntryFieldTypes.RichText
        hero: EntryFieldTypes.AssetLink
    }
}

export interface Chef {
    contentTypeId: "chef",
    fields: {
        name: EntryFieldTypes.Text
        resume: EntryFieldTypes.RichText
        description: EntryFieldTypes.RichText
        portrait: EntryFieldTypes.AssetLink
        courant: EntryFieldTypes.Boolean
    }
}

export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.DEV
        ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
        : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export const allConcerts = await contentfulClient.getEntries<Concert>({
    content_type: "concert",
});

export const allChef = await contentfulClient.getEntries<Chef>({
    content_type: "chef"
})

