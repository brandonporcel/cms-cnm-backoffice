import {defineField, defineType} from 'sanity'
import {MdMovie as icon} from 'react-icons/md'

const film = defineType({
  name: 'film',
  title: 'Film',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'releaseYear',
      title: 'Release Year',
      type: 'number',
      description: 'Year of release',
    }),
  ],
})

export default film
