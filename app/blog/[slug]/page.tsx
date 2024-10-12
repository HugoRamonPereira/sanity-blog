import { MarkdownRenderer } from "@/app/components/MarkdownRenderer";
import { client, urlFor } from "@/app/lib/sanity";
import { fullBlogProps } from "@/lib/interface";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getArticlesData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == "${slug}"] {
      "currentSlug": slug.current,
        title,
        content,
        titleImage
    }[0]
  `;

  const data = await client.fetch(query);
 
  return data;
}

export default async function BlogArticle({params}: {params: { slug: string }}) {
  const data: fullBlogProps = await getArticlesData(params.slug);
  const markdownTextArray = data.content.map((block) => (
    block.children.map(child => child.text)
  ));

  const markdownArrayText = markdownTextArray.flat().join(' \n').toString();

  return (
    <div className="mt-8">
      <h1 className="space-y-10">
        <span className="block text-2xl text-center text-primary font-semibold tracking-wide uppercase">
          Hugo Ramon&apos;s Blog
        </span>
        <span className="mt-2 block text-5xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <div className="mt-10 flex justify-center">
        <Image 
          src={urlFor(data.titleImage).url()} 
          width={800} 
          height={800} 
          alt="Title Image" 
          priority
          className="rounded-3xl"
        />
      </div>
      <div className="mt-16 prose min-w-[90%] mx-auto dark:text-gray-200">
        <MarkdownRenderer content={markdownArrayText} />
      </div>
      <div className="mt-10 p-4">
        <Link 
          href="/" 
          className="w-fit flex items-center gap-2 px-4 py-2 rounded-md mx-auto border border-gray-500 text-gray-500 hover:border-primary hover:text-white hover:bg-primary transition-colors duration-150"
        >
          Back to Home
          <House strokeWidth={1.5} size={20} />
        </Link>
      </div>
    </div>
  )
}