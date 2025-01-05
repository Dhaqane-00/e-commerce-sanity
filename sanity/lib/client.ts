import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for live preview
  token: process.env.WebsitePreview, // Add the preview token
  perspective: 'previewDrafts', // Show draft content
  stega:{
    studioUrl: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/studio` : 'http://localhost:3000/studio'
  }
})
