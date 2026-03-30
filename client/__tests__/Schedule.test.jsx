import { render, screen, fireEvent } from '@testing-library/react'
import Schedule from '@/components/Schedule'

describe('Schedule', () => {
  it('renders the section heading', () => {
    render(<Schedule />)
    expect(screen.getByRole('heading', { name: /Train Every Day/i })).toBeInTheDocument()
  })

  it('renders all 7 day tabs', () => {
    render(<Schedule />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(7)
  })

  it('Monday tab is selected by default', () => {
    render(<Schedule />)
    const monday = screen.getByRole('tab', { name: /Mon/i })
    expect(monday).toHaveAttribute('aria-selected', 'true')
  })

  it('switches day panel when a tab is clicked', () => {
    render(<Schedule />)
    const friday = screen.getByRole('tab', { name: /Fri/i })
    fireEvent.click(friday)
    expect(friday).toHaveAttribute('aria-selected', 'true')
  })

  it("shows Women's class on Wednesday", () => {
    render(<Schedule />)
    const wednesday = screen.getByRole('tab', { name: /Wed/i })
    fireEvent.click(wednesday)
    expect(screen.getByText("Women's Martial Arts")).toBeInTheDocument()
  })

  it('renders a CTA link', () => {
    render(<Schedule />)
    const cta = screen.getByRole('link', { name: /Get Unlimited Access/i })
    expect(cta).toHaveAttribute('href', '#pricing')
  })
})
