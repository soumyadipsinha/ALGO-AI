import Header from '@/components/Header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Mock user for now - replace with actual auth
  const user = {
    id: '1',
    name: 'Demo User',
    email: 'demo@algo-ai.com',
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Header user={user} />
      <main>{children}</main>
    </div>
  )
}
