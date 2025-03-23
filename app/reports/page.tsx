"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ReportsPage() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  const handleDownload = (reportType: string) => {
    // In a real application, this would trigger the actual report generation and download
    const dummyData = `This is a sample ${reportType} report content`
    const blob = new Blob([dummyData], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${reportType.toLowerCase()}_report.txt`
    a.click()
    window.URL.revokeObjectURL(url)
    setOpenDialog(null)
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Payroll Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Monthly payroll summary with detailed breakdown of salaries, deductions, and overtime.
            </p>
            <Dialog open={openDialog === 'payroll'} onOpenChange={(open) => setOpenDialog(open ? 'payroll' : null)}>
              <DialogTrigger asChild>
                <Button className="w-full" onClick={() => handleDownload('Payroll')}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Download Complete</DialogTitle>
                </DialogHeader>
                <p>The payroll report has been downloaded successfully.</p>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Employee attendance records including punch-in/out times and overtime hours.
            </p>
            <Dialog open={openDialog === 'attendance'} onOpenChange={(open) => setOpenDialog(open ? 'attendance' : null)}>
              <DialogTrigger asChild>
                <Button className="w-full" onClick={() => handleDownload('Attendance')}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Download Complete</DialogTitle>
                </DialogHeader>
                <p>The attendance report has been downloaded successfully.</p>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Complete financial overview with income, expenses, and cash flow analysis.
            </p>
            <Dialog open={openDialog === 'financial'} onOpenChange={(open) => setOpenDialog(open ? 'financial' : null)}>
              <DialogTrigger asChild>
                <Button className="w-full" onClick={() => handleDownload('Financial')}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Download Complete</DialogTitle>
                </DialogHeader>
                <p>The financial report has been downloaded successfully.</p>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}