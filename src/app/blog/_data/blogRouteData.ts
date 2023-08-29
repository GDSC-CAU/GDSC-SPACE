export const blogRoutingData = [
    {
        type: 'Development',
        url: '/blog/Development',
        tags: ['All', 'Front-End', 'Back-End', 'DS/ML/DL', 'Application', 'Cloud', 'General'],
    },
    {
        type: 'Design',
        url: '/blog/Design',
        tags: ['All', 'Graphic', 'UI/UX', 'Product', 'Reference'],
    },
    {
        type: 'Project',
        url: '/blog/Project',
        tags: ['All', 'Web', 'App'],
    },
] as const

export type BlogRoutingType = (typeof blogRoutingData)[number]['type']
export type BlogTag = (typeof blogRoutingData)[number]['tags'][number]
