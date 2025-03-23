"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const columns = [
  {
    accessorKey: "employee",
    header: "Employee"
  },
  {
    accessorKey: "salary",
    header: "Base Salary"
  },
  {
    accessorKey: "overtime",
    header: "Overtime"
  },
  {
    accessorKey: "deductions",
    header: "Deductions"
  },
  {
    accessorKey: "net",
    header: "Net Salary"
  }
]

const data = [
  {
    employee: "Rajesh Kumar",
    salary: "₹85,000",
    overtime: "₹5,000",
    deductions: "₹3,500",
    net: "₹86,500"
  },
  {
    employee: "Priya Sharma",
    salary: "₹95,000",
    overtime: "₹0",
    deductions: "₹4,500",
    net: "₹90,500"
  }
]

export default function PayrollPage() {
  const [open, setOpen] = useState(false)

  const handleExport = () => {
    const csvContent = `Employee,Base Salary,Overtime,Deductions,Net Salary\n${data.map(row => 
      `${row.employee},${row.salary},${row.overtime},${row.deductions},${row.net}`
    ).join('\n')}`
    
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'payroll_export.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Payroll Management</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export Payroll
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Export Complete</DialogTitle>
            </DialogHeader>
            <p>The payroll data has been exported successfully.</p>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Payroll</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹8,75,000</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Pending Advances</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹45,000</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Overtime Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Deductions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹35,000</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payroll Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  )
}