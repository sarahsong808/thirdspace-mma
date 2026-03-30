import { render, screen, fireEvent } from '@testing-library/react'
import Testimonials from '@/components/Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Real People. Real Results./i })).toBeInTheDocument()
  })

  it('renders all 6 written testimonial cards', () => {
    render(<Testimonials />)
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBe(6)
  })

  it('renders star ratings', () => {
    render(<Testimonials />)
    const ratings = screen.getAllByRole('img', { name: /5 out of 5 stars/i })
    expect(ratings.length).toBe(6)
  })

  it('mentions reviewer names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Marcus T.')).toBeInTheDocument()
    expect(screen.getByText('Sofia R.')).toBeInTheDocument()
    expect(screen.getByText('Andre M.')).toBeInTheDocument()
  })

  it('renders platform badges', () => {
    render(<Testimonials />)
    const googleBadges = screen.getAllByText(/google/i)
    expect(googleBadges.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Google and Yelp review links', () => {
    render(<Testimonials />)
    expect(screen.getByRole('link', { name: /Leave a Google Review/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Review on Yelp/i })).toBeInTheDocument()
  })

  it('renders video cards with play buttons', () => {
    render(<Testimonials />)
    const playButtons = screen.getAllByRole('button', { name: /Play video/i })
    expect(playButtons.length).toBe(2)
  })

  it('video card plays on click', () => {
    render(<Testimonials />)
    const playBtn = screen.getAllByRole('button', { name: /Play video/i })[0]
    fireEvent.click(playBtn)
    expect(screen.getAllByTitle(/Student Review/i).length).toBeGreaterThanOrEqual(1)
  })
})
