import { render, screen } from '@testing-library/react'
import Coach from '@/components/Coach'

describe('Coach', () => {
  it('renders his name', () => {
    render(<Coach />)
    expect(screen.getByRole('heading', { name: /Arsalan Mayel/i })).toBeInTheDocument()
  })

  it('renders the coach section label', () => {
    render(<Coach />)
    expect(screen.getByText(/Head Coach/i)).toBeInTheDocument()
  })

  it('renders Professional MMA Fighter title', () => {
    render(<Coach />)
    const matches = screen.getAllByText(/Professional MMA Fighter/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('shows 14+ years stat', () => {
    render(<Coach />)
    const yearsStats = screen.getAllByText(/14\+/)
    expect(yearsStats.length).toBeGreaterThanOrEqual(1)
  })

  it('renders PRO credential', () => {
    render(<Coach />)
    expect(screen.getByText('PRO')).toBeInTheDocument()
  })

  it('renders all skill-level tags', () => {
    render(<Coach />)
    expect(screen.getByText('Muay Thai')).toBeInTheDocument()
    expect(screen.getByText('MMA Strategy')).toBeInTheDocument()
    expect(screen.getByText('All Levels')).toBeInTheDocument()
  })
})
