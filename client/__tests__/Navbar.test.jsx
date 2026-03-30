import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/Navbar'

// Mock next/link
jest.mock('next/link', () => {
  const Link = ({ children, href, ...rest }) => <a href={href} {...rest}>{children}</a>
  Link.displayName = 'Link'
  return Link
})

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Third Space')).toBeInTheDocument()
    expect(screen.getByText('MMA')).toBeInTheDocument()
  })

  it('renders all primary navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByText(/Classes/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Coach/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Schedule/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Pricing/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the CTA button with correct href', () => {
    render(<Navbar />)
    const ctaLinks = screen.getAllByText(/Start Training/i)
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1)
    ctaLinks.forEach((link) => {
      expect(link.closest('a')).toHaveAttribute('href', '#pricing')
    })
  })

  it('renders a hamburger menu button on mobile', () => {
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    expect(btn).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', () => {
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })

    // Initially closed
    const menu = screen.getByRole('navigation', { name: /main navigation/i })
    // The mobile menu div exists but hidden via max-h-0
    const mobileMenu = document.getElementById('mobile-menu')
    expect(mobileMenu).toHaveAttribute('aria-hidden', 'true')

    // Open
    fireEvent.click(btn)
    expect(mobileMenu).toHaveAttribute('aria-hidden', 'false')

    // Close
    fireEvent.click(btn)
    expect(mobileMenu).toHaveAttribute('aria-hidden', 'true')
  })

  it('has a logo link pointing to homepage', () => {
    render(<Navbar />)
    const logo = screen.getByRole('link', { name: /third space mma/i })
    expect(logo).toHaveAttribute('href', '/')
  })
})
