import ProjectList from '../projects/page'

export const ProjectCard = () => {
    const p1 = '/d.png'
    const p2 = '/f.png'
    return (
        <div className="flex flex-col items-center justify-center gap-5 p-5">
            <ProjectList picture={p1} name="Project 1" description="Is it right?" bool={true} />
            <ProjectList picture={p2} name="Project 2" description="I donnot know~" />
        </div>
    )
}
