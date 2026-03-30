import { render, screen } from '@testing-library/react'
import Pricing from '@/components/Pricing'

describe('Pricing', () => {
  it('renders section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Invest In Yourself/i })).toBeInTheDocument()
  })

  it('renders all three plans', () => {
    render(<Pricing />)
    expect(screen.getByRole('article', { name: /drop-in plan/i })).toBeInTheDocument()
    expect(screen.getByRole('article', { name: /unlimited plan/i })).toBeInTheDocument()
    expect(screen.getByRole('article', { name: /fighter program plan/i })).toBeInTheDocument()
  })

  it('shows prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$30')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('Custom')).toBeInTheDocument()
  })

  it('marks the Unlimited plan as most popular', () => {
    render(<Pricing />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('all plan CTA links point to #contact', () => {
    render(<Pricing />)
    const ctas = screen.getAllByRole('link').filter((a) => a.getAttribute('href') === '#contact')
    expect(ctas.length).toBeGreaterThanOrEqual(3)
  })

  it('shows "first class free" message', () => {
    render(<Pricing />)
    expect(screen.getByText(/first class free/i)).toBeInTheDocument()
  })
})
