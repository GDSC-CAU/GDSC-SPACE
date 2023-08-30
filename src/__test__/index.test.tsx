import { render, screen } from '@testing-library/react'
import MainPage from 'src/app/page'

describe('Test Home is here', () => {
    it('renders a heading', () => {
        render(<MainPage />)

        const headers = 'GDSC' as const
        const testHeadings = [...headers].map((e) =>
            screen.getByRole('heading', {
                name: e,
            })
        )

        testHeadings.forEach((heading) => {
            expect(heading).toBeInTheDocument()
        })
    })
})
