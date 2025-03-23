"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Command } from 'cmdk'
import { Search } from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center w-64 px-3 py-2 space-x-2 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        id="global-search"
      >
        <Search className="w-4 h-4 text-muted-foreground" />
        <span className="text-muted-foreground">Search... (⌘K)</span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => runCommand(() => router.push('/'))}>
              Dashboard
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/workforce'))}>
              Workforce
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/payroll'))}>
              Payroll
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/cashbook'))}>
              Cashbook
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/reports'))}>
              Reports
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => runCommand(() => document.getElementById('add-employee-btn')?.click())}>
              Add Employee
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => document.getElementById('new-transaction-btn')?.click())}>
              New Transaction
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => document.getElementById('export-payroll-btn')?.click())}>
              Export Payroll
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}