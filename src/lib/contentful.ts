import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import * as contentful from "contentful";
import type {AssetLink, EntryFieldTypes, Link} from "contentful";
import { getSeason } from "./seasons";

export interface Concert {
    contentTypeId: "concert",
    fields: {
        title: EntryFieldTypes.Text
        date: EntryFieldTypes.Date,
        location: EntryFieldTypes.Location,
        address: EntryFieldTypes.Text,
        price: EntryFieldTypes.Number
        description: EntryFieldTypes.RichText,
        poster?: EntryFieldTypes.AssetLink,
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


export interface Recrutement {
    contentTypeId: "recrutement",
    fields: {
        instrument: EntryFieldTypes.Text
        description: EntryFieldTypes.Text
        postesOuverts: EntryFieldTypes.Number
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

export const allOrchestre = await contentfulClient.getEntries<Orchestre>({
    content_type: "orchestre"
})


export const concerts = allConcerts.items.map((item) => {
    const {title, date, description, price} = item.fields;
    let concertDate = new Date(date);
    console.log(item.fields.location)
    return {
        title,
        description: documentToHtmlString(description),
        price,
        location: item.fields.location,
        date: concertDate,
        season: getSeason(concertDate),
        poster: item.fields.poster ? contentfulClient.getAsset(item.fields.poster.sys.id).then(asset => asset.fields.file?.url) : null,
    };
});

// Get next concerts (those with dates in the future)
export const nextConcerts = concerts.filter((concert) => concert.date >= new Date());

export const seasons = [...new Set(concerts.map((concert) => concert.season))].sort((a, b) => b.localeCompare(a));

export const currentSeason = seasons[0];

export const allRecrutements = await contentfulClient.getEntries<Recrutement>({
    content_type: "recrutement"
})