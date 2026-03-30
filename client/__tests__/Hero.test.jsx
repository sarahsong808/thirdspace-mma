import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Train Like a/i)
  })

  it('renders the subheadline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Think Like a Champion/i)
  })

  it('renders the location eyebrow text', () => {
    render(<Hero />)
    expect(screen.getByText(/San Fernando, CA · San Fernando Valley/i)).toBeInTheDocument()
  })

  it('renders the primary CTA link pointing to #pricing', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /Start Training/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#pricing')
  })

  it('renders the secondary CTA link pointing to #classes', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /Explore Classes/i })
    expect(cta).toHaveAttribute('href', '#classes')
  })

  it('mentions Arsalan Mayel', () => {
    render(<Hero />)
    expect(screen.getByText(/Arsalan Mayel/i)).toBeInTheDocument()
  })

  it('has a landmark section with an accessible label', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: /Third Space MMA/i })
    expect(section).toBeInTheDocument()
  })
})
