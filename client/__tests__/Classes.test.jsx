import { render, screen } from '@testing-library/react'
import Classes from '@/components/Classes'

describe('Classes', () => {
  it('renders the section heading', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { name: /Our Disciplines/i })).toBeInTheDocument()
  })

  it('renders a card for each discipline', () => {
    render(<Classes />)
    expect(screen.getByText('Muay Thai')).toBeInTheDocument()
    expect(screen.getByText('Brazilian Jiu-Jitsu')).toBeInTheDocument()
    expect(screen.getByText('Wrestling')).toBeInTheDocument()
    expect(screen.getByText('MMA')).toBeInTheDocument()
  })

  it("renders the Women's Classes card with a badge", () => {
    render(<Classes />)
    expect(screen.getByText("Women's Classes")).toBeInTheDocument()
    expect(screen.getByText('Once a Week')).toBeInTheDocument()
  })

  it('each discipline card is an article element', () => {
    render(<Classes />)
    const articles = screen.getAllByRole('article')
    expect(articles.length).toBe(5)
  })

  it('renders discipline-specific taglines', () => {
    render(<Classes />)
    expect(screen.getByText(/Art of Eight Limbs/i)).toBeInTheDocument()
    expect(screen.getByText(/Ground Mastery/i)).toBeInTheDocument()
    expect(screen.getByText(/Control the Fight/i)).toBeInTheDocument()
    expect(screen.getByText(/Complete Fighter/i)).toBeInTheDocument()
  })
})
