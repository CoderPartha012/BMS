"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { analyzeExpenses, predictCashflow } from '@/lib/ai-utils'

export function AIInsights({ data }: { data: any }) {
  const [insights, setInsights] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const generateInsights = async () => {
    setLoading(true)
    try {
      const expenseAnalysis = await analyzeExpenses(data.expenses)
      const cashflowPrediction = await predictCashflow(data.transactions)
      
      setInsights(`${expenseAnalysis}\n\n${cashflowPrediction}`)
    } catch (error) {
      console.error('Error generating insights:', error)
      setInsights('Unable to generate insights at this time.')
    }
    setLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button 
            onClick={generateInsights} 
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Generating Insights...' : 'Generate AI Insights'}
          </Button>
          {insights && (
            <div className="mt-4 p-4 bg-secondary rounded-lg">
              <p className="whitespace-pre-wrap">{insights}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}