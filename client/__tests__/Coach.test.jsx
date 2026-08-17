import { render, screen } from '@testing-library/react'
import Coach from '@/components/Coach'

describe('Coach', () => {
  it('renders his name', () => {
    render(<Coach />)
    expect(screen.getByRole('heading', { name: /Arsalan Mayel/i })).toBeInTheDocument()
  })

  it('renders Alex Pyle profile', () => {
    render(<Coach />)
    expect(screen.getByRole('heading', { name: /Alex Pyle/i })).toBeInTheDocument()
  })

  it('renders the coach section label', () => {
    render(<Coach />)
    expect(screen.getByText(/Head Coach/i)).toBeInTheDocument()
  })

  it('renders Professional Muay Thai Fighter title', () => {
    render(<Coach />)
    const matches = screen.getAllByText(/Professional Muay Thai Fighter/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('shows 14+ years stat', () => {
    render(<Coach />)
    const yearsStats = screen.getAllByText(/14\+/)
    expect(yearsStats.length).toBeGreaterThanOrEqual(1)
  })

  it('renders PRO credential', () => {
    render(<Coach />)
    const proStats = screen.getAllByText('PRO')
    expect(proStats.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all skill-level tags', () => {
    render(<Coach />)
    expect(screen.getAllByText('Muay Thai').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('MMA Strategy').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('All Levels').length).toBeGreaterThanOrEqual(1)
  })
})
