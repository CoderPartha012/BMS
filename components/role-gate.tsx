"use client"

import { ReactNode } from 'react'

type Role = 'admin' | 'hr' | 'employee'

interface RoleGateProps {
  children: ReactNode
  allowedRoles: Role[]
}

// This is a mock implementation. In a real app, you'd get the user's role from your auth system
const getCurrentUserRole = (): Role => {
  return 'admin' // Mock return for demo
}

export function RoleGate({ children, allowedRoles }: RoleGateProps) {
  const userRole = getCurrentUserRole()

  if (!allowedRoles.includes(userRole)) {
    return null
  }

  return <>{children}</>
}