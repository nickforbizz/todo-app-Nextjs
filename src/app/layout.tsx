import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: 'To-Do app',
    template: '%s | Todo App by ST-Nomads',
  },
  description: 'All about to-do activities',
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
