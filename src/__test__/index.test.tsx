import { render, screen } from '@testing-library/react'
import Home from 'src/app/page'

describe('Test Home is here', () => {
    it('renders a heading', () => {
        render(<Home />)

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
