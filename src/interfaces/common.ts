export interface Event {
    id: string
    category: string
    date: string
    title: string
    content: string
    image: string
}

export interface Member {
    name: string
    gender: 'Male' | 'Female'
    nickname?: string
    role: 'Lead' | 'Core' | 'Member'
    imageSrc?: string
    year: '1기' | '2기' | '3기'
    position: string
    introduction: string
    github?: string
    email?: string
    instagram?: string
}
