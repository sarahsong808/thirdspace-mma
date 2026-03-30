import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contact from '@/components/Contact'

// Mock fetch
global.fetch = jest.fn()

beforeEach(() => {
  fetch.mockClear()
})

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Your First Class/i })).toBeInTheDocument()
  })

  it('renders the form with all fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Interested In/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /Claim My Free Class/i })).toBeInTheDocument()
  })

  it('shows success state after successful form submission', async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ success: true }) })

    render(<Contact />)

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } })

    fireEvent.click(screen.getByRole('button', { name: /Claim My Free Class/i }))

    await waitFor(() => {
      expect(screen.getByText(/Message Sent/i)).toBeInTheDocument()
    })
  })

  it('shows error message on failed submission', async () => {
    fetch.mockResolvedValueOnce({ ok: false })

    render(<Contact />)

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Jane' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'jane@example.com' } })

    fireEvent.click(screen.getByRole('button', { name: /Claim My Free Class/i }))

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })
  })

  it('renders social links', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /yelp/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /google/i })).toBeInTheDocument()
  })
})
