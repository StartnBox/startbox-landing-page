import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StartBox | The Neon Monolith Frontier',
  description: 'Turn Your Idea Into a Startup — Step by Step',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 font-body">{children}</body>
    </html>
  )
}