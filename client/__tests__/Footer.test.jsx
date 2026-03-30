import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Third Space')).toBeInTheDocument()
  })

  it('renders the current year in the copyright statement', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders navigation sections', () => {
    render(<Footer />)
    expect(screen.getByText('Train')).toBeInTheDocument()
    expect(screen.getByText('Gym')).toBeInTheDocument()
    expect(screen.getByText('Connect')).toBeInTheDocument()
  })

  it('renders all discipline links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Muay Thai' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Jiu-Jitsu' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Wrestling' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'MMA' })).toBeInTheDocument()
  })

  it('renders social links with external targets', () => {
    render(<Footer />)
    const instagram = screen.getByRole('link', { name: 'Instagram' })
    expect(instagram).toHaveAttribute('target', '_blank')
    expect(instagram).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders location text', () => {
    render(<Footer />)
    const matches = screen.getAllByText(/North Hollywood/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })
})
