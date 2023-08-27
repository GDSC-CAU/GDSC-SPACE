import { DesignArticleView } from './DesignArticleView'
import { DevelopArticleView } from './DevelopArticleView'
import { ProjectView } from './ProjectView'

export const BlogView = ({ blogCategory }: { blogCategory: string }) => {
    return (
        <div>
            {blogCategory === 'Develop' && <DevelopArticleView />}
            {blogCategory === 'Design' && <DesignArticleView />}
            {blogCategory === 'Project' && <ProjectView />}
        </div>
    )
}
