import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'inventory',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'color',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'T-Shirt', value: 'tshirt'},
          {title: 'Sweatshirt', value: 'sweatshirt'},
          {title: 'Tank', value: 'tank'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      media: 'image',
    },
  },
}) 