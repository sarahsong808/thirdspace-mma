import { render, screen } from '@testing-library/react'
import Schedule from '@/components/Schedule'

describe('Schedule', () => {
  it('renders the section heading', () => {
    render(<Schedule />)
    expect(screen.getByRole('heading', { name: /Train with High Quality Instruction, Every Time/i })).toBeInTheDocument()
  })

  it('renders all weekday labels', () => {
    render(<Schedule />)
    expect(screen.getAllByText('Monday').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Tuesday').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Wednesday').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Thursday').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Friday').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Saturday').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Sunday').length).toBeGreaterThanOrEqual(1)
  })

  it('renders updated time ranges and classes from the posted schedule', () => {
    render(<Schedule />)
    expect(screen.getAllByText('7:30 PM - 9:00 PM').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('9:00 AM - 10:00 AM')).toBeInTheDocument()
    expect(screen.getByText("Women's Muay Thai")).toBeInTheDocument()
    expect(screen.getByText('Wrestling')).toBeInTheDocument()
    expect(screen.getAllByText('Open Mat').length).toBeGreaterThanOrEqual(2)
  })

  it('renders a CTA link', () => {
    render(<Schedule />)
    const cta = screen.getByRole('link', { name: /Get Unlimited Access/i })
    expect(cta).toHaveAttribute('href', '#pricing')
  })
})
