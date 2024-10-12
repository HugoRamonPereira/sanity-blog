export interface simpleBlogProps {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: string;
}

interface BlogContent {
  _key: string;
  _type: "blog";
  style: string;
  children: Array<{
    _key: string;
    _type: "span";
    text: string;
  }>;
}

export interface fullBlogProps {
  currentSlug: string;
  title: string;
  content: BlogContent[];
  titleImage: string;
}