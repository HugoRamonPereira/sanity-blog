import { simpleBlogProps } from "@/lib/interface";
import { client, urlFor } from "./lib/sanity";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getPosts() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title, 
        smallDescription,
        "currentSlug": slug.current,
        titleImage
    }
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const blogData: simpleBlogProps[] = await getPosts();

  console.log('Posts data: ', blogData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-4">
      {blogData.map((post, index) => (
        <Card
          key={index}
          className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg"
        >
          <CardHeader className="p-0">
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
              <Image
                src={urlFor(post.titleImage).url()}
                alt="image"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg border-b border-b-gray-200"
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col h-64 justify-between px-4">
            <div className="mt-4">
              <h3 className="font-bold line-clamp-2 text-xl">{post.title}</h3>
              <p className="mt-4 line-clamp-4 text-gray-500 dark:text-gray-400 text-justify">
                {post.smallDescription}
              </p>
            </div>
            <Button asChild className="w-full">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
