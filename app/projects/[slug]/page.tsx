import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects } from '@/data/portfolio'
import { ProjectDetail } from '@/components/ProjectDetail'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Arsh Bansal Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Arsh Bansal Portfolio`,
      description: project.description,
      type: 'website',
      images: project.imageUrl
        ? [
            {
              url: project.imageUrl,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Arsh Bansal Portfolio`,
      description: project.description,
      images: project.imageUrl ? [project.imageUrl] : [],
    },
  }
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}

