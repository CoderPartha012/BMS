"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CloudLightning as Lightning, UserPlus, Plus, Download } from "lucide-react"

export function QuickActions() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Lightning className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Quick Actions</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => document.getElementById('add-employee-btn')?.click()}
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Add Employee
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => document.getElementById('new-transaction-btn')?.click()}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Transaction
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => document.getElementById('export-payroll-btn')?.click()}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Payroll
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}