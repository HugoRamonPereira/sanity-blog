import { JSX, ClassAttributes, HTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer(props: MarkdownRendererProps) {
  const renderers = {
    h1: (
      props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLHeadingElement> &
        HTMLAttributes<HTMLHeadingElement>
    ) => (
      <h1
        className="text-4xl font-bold text-gray-900 dark:text-white"
        {...props}
      />
    ),
    h2: (
      props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLHeadingElement> &
        HTMLAttributes<HTMLHeadingElement>
    ) => (
      <h2
        className="text-3xl font-bold text-gray-900 dark:text-white"
        {...props}
      />
    ),
    h3: (
      props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLHeadingElement> &
        HTMLAttributes<HTMLHeadingElement>
    ) => (
      <h3
        className="text-2xl font-bold text-gray-900 dark:text-white"
        {...props}
      />
    ),
    strong: (
      props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLElement> &
        HTMLAttributes<HTMLElement>
    ) => (
      <strong className="font-bold text-gray-900 dark:text-white" {...props} />
    ),
    a: (
      props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLAnchorElement> &
        HTMLAttributes<HTMLAnchorElement>
    ) => <a className="text-gray-900 dark:text-gray-300" {...props} />,
    li: (
      props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLLIElement> &
        HTMLAttributes<HTMLLIElement>
    ) => <li className="text-gray-900 dark:text-gray-300" {...props} />,
    ul: (
      props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLUListElement> &
        HTMLAttributes<HTMLUListElement>
    ) => <ul className="list-disc marker:text-gray-900 dark:list-disc dark:marker:text-gray-300" {...props} />,
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={renderers}>
      {props.content}
    </ReactMarkdown>
  );
}
