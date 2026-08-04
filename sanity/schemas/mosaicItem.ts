import { defineType, defineField } from 'sanity'

export const mosaicItem = defineType({
  name: 'mosaicItem',
  title: 'Media Mosaic Item',
  type: 'document',
  description: 'A single photo or video (MP4) shown in the media mosaic on the Content page. The mosaic is hidden entirely when there are no items.',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video (MP4)', value: 'video' },
        ],
      },
      initialValue: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for screen readers.',
        }),
      ],
    }),
    defineField({
      name: 'video',
      title: 'Video File (MP4)',
      type: 'file',
      options: { accept: 'video/mp4' },
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional short caption shown on hover.',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      mediaType: 'mediaType',
      media: 'image',
    },
    prepare({ title, mediaType, media }) {
      return {
        title: title || (mediaType === 'video' ? 'Video' : 'Image'),
        subtitle: mediaType === 'video' ? 'Video (MP4)' : 'Image',
        media,
      }
    },
  },
})
