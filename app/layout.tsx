import '../styles/globals.css'

export const metadata = {
  title: 'NextJS App 09',
  description: 'Sample application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
