'use client'

import { useState } from 'react'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (status === 'loading') return
    
    setStatus('loading')
    setMessage('')
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setStatus('success')
        setMessage('Thanks for joining! Check your inbox for confirmation.')
        setEmail('')
      } else {
        throw new Error(data.error || 'Something went wrong')
      }
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Failed to join waitlist. Please try again.')
    }
  }

  return (
    <section className="px-6 py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
          Be among the first to launch your startup with <span className="text-gradient">StartBox</span>
        </h2>
        
        <form onSubmit={handleSubmit} className="p-2 bg-slate-800/50 border border-slate-700/50 rounded-2xl flex flex-col sm:flex-row gap-2 max-w-xl mx-auto shadow-2xl">
          <input
            type="email"
            placeholder="Enter your email address"
            className="grow bg-transparent border-none focus:outline-none focus:ring-0 px-6 py-4 text-white placeholder:text-slate-400 font-medium disabled:opacity-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            className="bg-linear-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-headline font-bold whitespace-nowrap hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>
        
        {message && (
          <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
        
        <p className="mt-6 text-slate-400 text-sm">Join the private beta. No credit card required.</p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-purple-500/5 to-transparent z-0"></div>
    </section>
  )
}