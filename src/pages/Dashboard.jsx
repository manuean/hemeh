import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Sun,
  Moon,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Building,
  Plus,
  Trash2,
  Edit2,
  X,
  Check
} from 'lucide-react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'

// Sample data - this would come from an API/database in production
const initialCompanies = [
  {
    id: 1,
    name: "Hyperliquid",
    ticker: "HYPE",
    category: "DeFi",
    revenue: [12.5, 15.2, 18.7, 22.1, 28.4, 35.2],
    profit: [3.2, 4.8, 6.1, 8.2, 11.5, 15.8],
    currentRevenue: 35.2,
    currentProfit: 15.8,
    revenueGrowth: 24.3,
    profitMargin: 44.9
  },
  {
    id: 2,
    name: "Ondo Finance",
    ticker: "ONDO",
    category: "RWA",
    revenue: [8.2, 10.5, 14.2, 18.8, 24.1, 31.5],
    profit: [2.1, 3.2, 5.1, 7.8, 10.2, 14.2],
    currentRevenue: 31.5,
    currentProfit: 14.2,
    revenueGrowth: 30.7,
    profitMargin: 45.1
  },
  {
    id: 3,
    name: "Maple Finance",
    ticker: "MPL",
    category: "Lending",
    revenue: [5.8, 7.2, 9.5, 11.2, 13.8, 16.4],
    profit: [1.2, 1.8, 2.5, 3.1, 4.2, 5.8],
    currentRevenue: 16.4,
    currentProfit: 5.8,
    revenueGrowth: 18.8,
    profitMargin: 35.4
  },
  {
    id: 4,
    name: "Aave Protocol",
    ticker: "AAVE",
    category: "DeFi",
    revenue: [45.2, 52.1, 58.4, 65.2, 72.8, 82.5],
    profit: [18.2, 21.5, 24.8, 28.1, 32.4, 38.2],
    currentRevenue: 82.5,
    currentProfit: 38.2,
    revenueGrowth: 13.3,
    profitMargin: 46.3
  },
  {
    id: 5,
    name: "Polymarket",
    ticker: "POLY",
    category: "Prediction",
    revenue: [2.5, 4.8, 8.2, 15.5, 28.4, 42.1],
    profit: [0.5, 1.2, 2.8, 6.2, 12.5, 21.8],
    currentRevenue: 42.1,
    currentProfit: 21.8,
    revenueGrowth: 48.2,
    profitMargin: 51.8
  }
]

const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const COLORS = ['#0074d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']

function Dashboard() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode')
      if (saved !== null) {
        return JSON.parse(saved)
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  const [companies, setCompanies] = useState(initialCompanies)
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [newCompany, setNewCompany] = useState({
    name: '',
    ticker: '',
    category: 'DeFi',
    currentRevenue: '',
    currentProfit: ''
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Calculate totals
  const totalRevenue = companies.reduce((sum, c) => sum + c.currentRevenue, 0)
  const totalProfit = companies.reduce((sum, c) => sum + c.currentProfit, 0)
  const avgGrowth = companies.reduce((sum, c) => sum + c.revenueGrowth, 0) / companies.length
  const avgMargin = companies.reduce((sum, c) => sum + c.profitMargin, 0) / companies.length

  // Prepare chart data
  const combinedChartData = months.map((month, index) => ({
    month,
    revenue: companies.reduce((sum, c) => sum + c.revenue[index], 0),
    profit: companies.reduce((sum, c) => sum + c.profit[index], 0)
  }))

  const pieData = companies.map(c => ({
    name: c.ticker,
    value: c.currentRevenue
  }))

  const handleAddCompany = () => {
    const id = Math.max(...companies.map(c => c.id)) + 1
    const revenue = parseFloat(newCompany.currentRevenue) || 0
    const profit = parseFloat(newCompany.currentProfit) || 0

    const newEntry = {
      id,
      name: newCompany.name,
      ticker: newCompany.ticker,
      category: newCompany.category,
      revenue: Array(6).fill(revenue),
      profit: Array(6).fill(profit),
      currentRevenue: revenue,
      currentProfit: profit,
      revenueGrowth: 0,
      profitMargin: revenue > 0 ? (profit / revenue * 100) : 0
    }

    setCompanies([...companies, newEntry])
    setShowAddModal(false)
    setNewCompany({ name: '', ticker: '', category: 'DeFi', currentRevenue: '', currentProfit: '' })
  }

  const handleDeleteCompany = (id) => {
    setCompanies(companies.filter(c => c.id !== id))
    if (selectedCompany?.id === id) {
      setSelectedCompany(null)
    }
  }

  const formatCurrency = (value) => {
    return `$${value.toFixed(1)}M`
  }

  return (
    <div className={`min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Back</span>
              </Link>
              <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-700" />
              <h1 className="text-lg font-semibold">Portfolio Analytics</h1>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Total Revenue</span>
              <DollarSign className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
            <div className="text-sm text-green-500 flex items-center mt-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              +{avgGrowth.toFixed(1)}% avg growth
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Total Profit</span>
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-2xl font-bold">{formatCurrency(totalProfit)}</div>
            <div className="text-sm text-blue-500 flex items-center mt-1">
              {avgMargin.toFixed(1)}% avg margin
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Companies Tracked</span>
              <Building className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-2xl font-bold">{companies.length}</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Across {new Set(companies.map(c => c.category)).size} categories
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Top Performer</span>
              <TrendingUp className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-2xl font-bold">
              {companies.sort((a, b) => b.revenueGrowth - a.revenueGrowth)[0]?.ticker || 'N/A'}
            </div>
            <div className="text-sm text-amber-500 flex items-center mt-1">
              +{companies.sort((a, b) => b.revenueGrowth - a.revenueGrowth)[0]?.revenueGrowth.toFixed(1)}% growth
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue & Profit Chart */}
          <div className="lg:col-span-2 p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
            <h3 className="text-lg font-semibold mb-4">Revenue & Profit Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={combinedChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="month" stroke={darkMode ? '#9ca3af' : '#6b7280'} fontSize={12} />
                <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} fontSize={12} tickFormatter={(v) => `$${v}M`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                    border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                    borderRadius: '8px'
                  }}
                  formatter={(value) => [`$${value.toFixed(1)}M`]}
                />
                <Line type="monotone" dataKey="revenue" stroke="#0074d4" strokeWidth={2} dot={false} name="Revenue" />
                <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} dot={false} name="Profit" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Distribution Pie */}
          <div className="p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
            <h3 className="text-lg font-semibold mb-4">Revenue Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                    border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                    borderRadius: '8px'
                  }}
                  formatter={(value) => [`$${value.toFixed(1)}M`]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {pieData.map((entry, index) => (
                <div key={entry.name} className="flex items-center space-x-1 text-xs">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  <span className="text-neutral-600 dark:text-neutral-400">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Companies Table */}
        <div className="rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 overflow-hidden">
          <div className="p-4 border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Companies Analysis</h3>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg text-sm font-medium flex items-center space-x-2 hover:opacity-90 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Company</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-50 dark:bg-neutral-800">
                  <th className="text-left px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">Company</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">Category</th>
                  <th className="text-right px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">Revenue</th>
                  <th className="text-right px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">Profit</th>
                  <th className="text-right px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">Growth</th>
                  <th className="text-right px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">Margin</th>
                  <th className="text-right px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <tr
                    key={company.id}
                    className="border-t border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 cursor-pointer transition-colors"
                    onClick={() => setSelectedCompany(company)}
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-sm font-medium">
                          {company.ticker.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium">{company.name}</div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">{company.ticker}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-700">
                        {company.category}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right font-medium">{formatCurrency(company.currentRevenue)}</td>
                    <td className="px-4 py-4 text-right font-medium">{formatCurrency(company.currentProfit)}</td>
                    <td className="px-4 py-4 text-right">
                      <span className={`flex items-center justify-end ${company.revenueGrowth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {company.revenueGrowth >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {company.revenueGrowth.toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">{company.profitMargin.toFixed(1)}%</td>
                    <td className="px-4 py-4 text-right">
                      <button
                        onClick={(e) => { e.stopPropagation(); handleDeleteCompany(company.id); }}
                        className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Company Detail */}
        {selectedCompany && (
          <div className="mt-8 p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-lg font-bold">
                  {selectedCompany.ticker.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{selectedCompany.name}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">{selectedCompany.ticker} • {selectedCompany.category}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCompany(null)}
                className="p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">Revenue History</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={months.map((month, i) => ({ month, revenue: selectedCompany.revenue[i] }))}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                    <XAxis dataKey="month" stroke={darkMode ? '#9ca3af' : '#6b7280'} fontSize={12} />
                    <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} fontSize={12} tickFormatter={(v) => `$${v}M`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                        border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                        borderRadius: '8px'
                      }}
                      formatter={(value) => [`$${value.toFixed(1)}M`, 'Revenue']}
                    />
                    <Bar dataKey="revenue" fill="#0074d4" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">Profit History</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={months.map((month, i) => ({ month, profit: selectedCompany.profit[i] }))}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                    <XAxis dataKey="month" stroke={darkMode ? '#9ca3af' : '#6b7280'} fontSize={12} />
                    <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} fontSize={12} tickFormatter={(v) => `$${v}M`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                        border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                        borderRadius: '8px'
                      }}
                      formatter={(value) => [`$${value.toFixed(1)}M`, 'Profit']}
                    />
                    <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Add Company Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 w-full max-w-md mx-4 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Add Company</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  value={newCompany.name}
                  onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                  placeholder="e.g., Uniswap"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Ticker</label>
                <input
                  type="text"
                  value={newCompany.ticker}
                  onChange={(e) => setNewCompany({ ...newCompany, ticker: e.target.value.toUpperCase() })}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                  placeholder="e.g., UNI"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={newCompany.category}
                  onChange={(e) => setNewCompany({ ...newCompany, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                >
                  <option value="DeFi">DeFi</option>
                  <option value="RWA">RWA</option>
                  <option value="Lending">Lending</option>
                  <option value="Prediction">Prediction Markets</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="L1/L2">L1/L2</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Revenue ($M)</label>
                  <input
                    type="number"
                    value={newCompany.currentRevenue}
                    onChange={(e) => setNewCompany({ ...newCompany, currentRevenue: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                    placeholder="0.0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Profit ($M)</label>
                  <input
                    type="number"
                    value={newCompany.currentProfit}
                    onChange={(e) => setNewCompany({ ...newCompany, currentProfit: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                    placeholder="0.0"
                  />
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2.5 border border-neutral-200 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCompany}
                  disabled={!newCompany.name || !newCompany.ticker}
                  className="flex-1 px-4 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add Company
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
