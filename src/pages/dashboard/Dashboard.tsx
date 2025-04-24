import ThemeToggle from '../../components/ThemeToggle';

export default function Dashboard() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-6">
      <ThemeToggle />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Users</h2>
            <p className="text-gray-600 dark:text-gray-300">Manage your team members here.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Properties</h2>
            <p className="text-gray-600 dark:text-gray-300">All properties in the CRM.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Leads</h2>
            <p className="text-gray-600 dark:text-gray-300">Recent leads and inquiries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
