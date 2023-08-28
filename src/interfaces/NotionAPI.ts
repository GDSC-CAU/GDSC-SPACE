export interface NotionDBRow {
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
        ID: {
            rich_text: [
                {
                    text: {
                        content: string
                    }
                }
            ]
        }
        Title: {
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

export interface NotionImageData {
    image: {
        file: {
            url: string
        }
    }
}

export interface NotionTableRowData {
    results: [
        {
            table_row: {
                cells: [[{ plain_text: string }], [{ plain_text: string }]]
            }
        }
    ]
}
