import { DesignArticleView } from './DesignArticleView'
import { DevelopArticleView } from './DevelopArticleView'
import { ProjectView } from './ProjectView'

export const BlogView = ({ blogCategory }: { blogCategory: string }) => {
    return (
        <div>
            {blogCategory === 'Develop Article' && <DevelopArticleView />}
            {blogCategory === 'Design Article' && <DesignArticleView />}
            {blogCategory === 'Project' && <ProjectView />}
        </div>
    )
}
