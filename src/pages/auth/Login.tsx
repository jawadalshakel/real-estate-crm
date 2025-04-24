import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import ThemeToggle from '../../components/ThemeToggle';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('✅ Logged in successfully');
      // redirect to dashboard here later
    } catch (err: any) {
      setError('❌ Login failed: ' + err.message);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <ThemeToggle />
      <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:border dark:border-gray-700 p-6 sm:p-8">
        <div className="mb-6 text-center">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="w-16 h-16 mx-auto mb-2"
          />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Sign in to your account
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Enter your email and password below
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition"
          >
            Sign in
          </button>

          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Register</a>
          </p>
        </form>
      </div>
    </section>
  );
}
