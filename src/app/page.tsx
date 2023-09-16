/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { API_MAIN_PROJECTS, API_MAIN_TIMELINES, API_RESPONSE } from '~/src/interfaces'
import { Footer } from '../components/common'
import { Fetcher } from '../utils'
import { BenefitsSection, IntroductionSection, ProjectsSection, TimeLinesSection } from './_components/sections'

export const dynamic = 'force-dynamic'

const fetcher = new Fetcher({
    baseUrl: 'http://localhost:3000',
})

export default async function MainPage() {
    const timelines = await fetcher.get<API_RESPONSE<API_MAIN_TIMELINES>>('main/getTimelines')
    const mainProjects = await fetcher.get<API_RESPONSE<API_MAIN_PROJECTS>>('main/getProjects')

    return (
        <>
            <IntroductionSection />

            <TimeLinesSection {...timelines.RESULT_DATA!} />

            <BenefitsSection />

            <ProjectsSection {...mainProjects.RESULT_DATA!} />

            <Footer main />
        </>
    )
}
