import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Post',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: rule => rule.required(),
    }),
    // 👇 NOVO CAMPO: CATEGORIA
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Dicas de Limpeza', value: 'Limpeza' },
          { title: 'Bem-estar Pet', value: 'Pets' },
          { title: 'Economia', value: 'Economia' },
          { title: 'Novidades', value: 'Novidades' },
        ],
      },
      validation: rule => rule.required(),
    }),
    // 👇 NOVO CAMPO: SUBTÍTULO
    defineField({
      name: 'description',
      title: 'Descrição Curta (Chamada)',
      type: 'text',
      rows: 3,
      description: 'Aquele texto que fica embaixo do título no card.',
      validation: rule => rule.required().max(200),
    }),
    defineField({
        name: 'readingTime',
        title: 'Tempo de Leitura (ex: 5 min)',
        type: 'string',
        initialValue: '5 min de leitura',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo Completo',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
})