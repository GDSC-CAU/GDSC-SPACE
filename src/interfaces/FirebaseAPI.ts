export interface BlogListItem {
    Author: string
    Date: string
    Description: string
    NotionID: string
    Tag: Array<string>
    Thumbnail: string
    Title: string
}

export interface EventListItem {
    Date: string
    Description: string
    NotionID: string
    Thumbnail: string
    Title: string
    Type: string
}

export interface MainProjects {
    Description: string
    ID: string
    Image: string
    Image_sub: string
    Subtitle: string
    Title: string
}

export interface MainTimelines {
    Card_title: string
    Date: string
    Description: string
    Title: string
}

export interface Members {
    Behance: string
    Comment: string
    Email: string
    Gender: string
    Github: string
    Image: string
    Instagram: string
    Name: string
    Nickname: string
    Position: string
    Role: string
}
