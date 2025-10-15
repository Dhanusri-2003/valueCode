import './globals.css'

export const metadata = {
  title: 'Value(ode - AI Powered Micro SaaS Solutions',
  description: 'Transform ideas into AI-powered Micro SaaS applications. Scale smarter, operate leaner with intelligent automation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}