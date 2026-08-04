import { render, screen } from '@testing-library/react'
import Pricing from '@/components/Pricing'

describe('Pricing', () => {
  it('renders section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Invest In Yourself/i })).toBeInTheDocument()
  })

  it('renders all three plans', () => {
    render(<Pricing />)
    expect(screen.getByRole('article', { name: /one program plan/i })).toBeInTheDocument()
    expect(screen.getByRole('article', { name: /two programs plan/i })).toBeInTheDocument()
    expect(screen.getByRole('article', { name: /three programs plan/i })).toBeInTheDocument()
  })

  it('shows prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('$239')).toBeInTheDocument()
    expect(screen.getByText('$259')).toBeInTheDocument()
  })

  it('marks the two programs plan as most popular', () => {
    render(<Pricing />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('all plan CTA links point to #contact', () => {
    render(<Pricing />)
    const ctas = screen.getAllByRole('link').filter((a) => a.getAttribute('href') === '#contact')
    expect(ctas.length).toBeGreaterThanOrEqual(3)
  })

  it('shows open mat included membership note', () => {
    render(<Pricing />)
    expect(screen.getAllByText(/open mat included/i).length).toBeGreaterThanOrEqual(1)
  })
})
