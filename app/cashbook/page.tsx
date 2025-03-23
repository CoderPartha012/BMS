"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const columns = [
  {
    accessorKey: "date",
    header: "Date"
  },
  {
    accessorKey: "description",
    header: "Description"
  },
  {
    accessorKey: "type",
    header: "Type"
  },
  {
    accessorKey: "amount",
    header: "Amount"
  },
  {
    accessorKey: "balance",
    header: "Balance"
  }
]

export default function CashbookPage() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([
    {
      date: "2024-03-20",
      description: "Office Supplies",
      type: "Expense",
      amount: "-₹5,500",
      balance: "₹2,84,500"
    },
    {
      date: "2024-03-20",
      description: "Client Payment",
      type: "Income",
      amount: "+₹35,000",
      balance: "₹2,90,000"
    }
  ])
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    type: "",
    amount: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleTypeChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      type: value
    }))
  }

  const calculateBalance = (amount: number) => {
    const currentBalance = parseFloat(data[0]?.balance?.replace(/[^0-9.-]+/g, "") || "0")
    return `₹${(currentBalance + amount).toLocaleString('en-IN')}`
  }

  const handleSubmit = () => {
    if (formData.date && formData.description && formData.type && formData.amount) {
      const amount = parseFloat(formData.amount)
      const formattedAmount = formData.type === "Expense" 
        ? `-₹${Math.abs(amount).toLocaleString('en-IN')}`
        : `+₹${amount.toLocaleString('en-IN')}`
      
      const newTransaction = {
        ...formData,
        amount: formattedAmount,
        balance: calculateBalance(formData.type === "Expense" ? -amount : amount)
      }

      setData(prev => [newTransaction, ...prev])
      setFormData({
        date: "",
        description: "",
        type: "",
        amount: ""
      })
      setOpen(false)
    }
  }

  const getTodayStats = () => {
    const today = new Date().toISOString().split('T')[0]
    const todayTransactions = data.filter(t => t.date === today)
    
    const income = todayTransactions
      .filter(t => t.type === "Income")
      .reduce((sum, t) => sum + parseFloat(t.amount.replace(/[^0-9.-]+/g, "")), 0)
    
    const expenses = todayTransactions
      .filter(t => t.type === "Expense")
      .reduce((sum, t) => sum + parseFloat(t.amount.replace(/[^0-9.-]+/g, "")), 0)
    
    return {
      income: `+₹${income.toLocaleString('en-IN')}`,
      expenses: `-₹${Math.abs(expenses).toLocaleString('en-IN')}`,
      net: `${income - expenses >= 0 ? '+' : '-'}₹${Math.abs(income - expenses).toLocaleString('en-IN')}`
    }
  }

  const todayStats = getTodayStats()

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Cashbook</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Transaction
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Transaction</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input 
                  id="date" 
                  type="date" 
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input 
                  id="description" 
                  placeholder="Transaction description" 
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Type</Label>
                <Select onValueChange={handleTypeChange} value={formData.type}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Income">Income</SelectItem>
                    <SelectItem value="Expense">Expense</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="amount">Amount</Label>
                <Input 
                  id="amount" 
                  type="number" 
                  placeholder="0.00" 
                  value={formData.amount}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={handleSubmit}>Add Transaction</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Cash Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data[0]?.balance || "₹0"}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Today's Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{todayStats.income}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Today's Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{todayStats.expenses}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Net Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${todayStats.net.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {todayStats.net}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  )
}