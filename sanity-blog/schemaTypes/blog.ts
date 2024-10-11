export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of a blog Article'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title'
      }
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title image'
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          title: 'Block'
        }
      ]
    }
  ]
}