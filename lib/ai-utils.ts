// Mock AI utilities since we don't have actual OpenAI API access
export async function analyzeExpenses(expenses: any[]) {
  return `Based on the expense analysis:
- Total expenses are within normal range
- Major spending categories: Office Supplies, Equipment
- Recommended action: Monitor discretionary spending`;
}

export async function predictCashflow(transactions: any[]) {
  return `Cashflow prediction for next month:
- Expected income: Stable trend
- Projected expenses: Similar to current month
- Overall outlook: Positive cash flow expected`;
}

export async function predictPerformance(employeeData: any) {
  return `Performance prediction:
- Strong track record in current role
- High potential for growth
- Recommended for skill development opportunities`;
}

export async function getSalaryRecommendations(position: string, experience: number) {
  return `Salary recommendations:
- Market range: ₹60,000 - ₹120,000 per month
- Based on experience level and role
- Consider industry standards and location`;
}