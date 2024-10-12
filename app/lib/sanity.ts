import { createClient } from "next-sanity";
import imageUrlBuilder from  "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  apiVersion: "2023-10-11",
  dataset: "production",
  projectId: "5pnn3jek",
  useCdn: false
});

// Function to convert images to URL with the help of a package provided by Sanity
// npm i @santy/image-url

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}