export interface MemberDBRow {
    properties: {
        Year: {
            rich_text: [
                {
                    text: {
                        content: string
                    }
                }
            ]
        }
        Name: {
            title: [
                {
                    text: {
                        content: string
                    }
                }
            ]
        }
    }
}

export interface MemberImageData {
    image: {
        file: {
            url: string
        }
    }
}

export interface MemberTableRowData {
    results: [
        {
            table_row: {
                cells: [[{ plain_text: string }], [{ plain_text: string }]]
            }
        }
    ]
}

export interface TimelineDBRow {
    properties: {
        Year: {
            rich_text: [
                {
                    text: {
                        content: string
                    }
                }
            ]
        }
        Name: {
            title: [
                {
                    text: {
                        content: string
                    }
                }
            ]
        }
    }
}

export interface TimelineTableRowData {
    results: [
        {
            table_row: {
                cells: [[{ plain_text: string }], [{ plain_text: string }]]
            }
        }
    ]
}
