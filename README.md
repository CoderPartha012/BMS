# Business Management System

A comprehensive business management solution built with Next.js, featuring a modern UI and extensive functionality for managing workforce, payroll, finances, and more.

![Business Management System](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000&h=600)

## Features

### 1. Dashboard
- Interactive admin dashboard with real-time data visualization
- Overview of key metrics (employees, payroll, finances)
- Recent activities feed
- Dynamic charts and graphs using Recharts
- Customizable widgets and layouts

### 2. Workforce Management
- Employee directory with detailed profiles
- Department and role management
- Status tracking (active, on leave, etc.)
- Quick employee addition and updates
- Department-wise employee distribution analytics

### 3. Payroll System
- Automated payroll processing
- Salary calculations with overtime and deductions
- Payroll history and records
- Export functionality for payroll data
- Advanced filtering and search capabilities

### 4. Cashbook
- Transaction management and tracking
- Income and expense logging
- Real-time balance calculations
- Transaction history with detailed records
- Financial analytics and reporting

### 5. Reports
- Comprehensive reporting system
- Customizable report generation
- Multiple report formats
- Export functionality (CSV, etc.)
- Historical data analysis

### 6. Advanced Features

#### User Experience
- Global search functionality (⌘K or Ctrl+K)
- Quick actions panel for common tasks
- Keyboard shortcuts for efficient navigation
- Toast notifications for real-time updates
- Loading states and skeleton loaders

#### Accessibility
- Dark mode support
- Responsive design for all devices
- Role-based access control (RBAC)
- Keyboard navigation support

#### Performance
- Optimized for speed and efficiency
- Lazy loading for better performance
- Code splitting for optimal load times
- Efficient state management

## Tech Stack

- **Framework**: Next.js 13.5
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Forms**: React Hook Form with Yup validation
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Notifications**: React Hot Toast
- **Theme**: Next Themes

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/business-management-system.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── cashbook/        # Cashbook module
│   ├── payroll/         # Payroll module
│   ├── reports/         # Reports module
│   ├── settings/        # Settings module
│   └── workforce/       # Workforce module
├── components/          # Reusable components
│   ├── ui/             # UI components
│   └── ...             # Other components
├── lib/                 # Utilities and hooks
└── public/             # Static assets
```

## Key Features by Module

### Dashboard
- Total employee count
- Monthly payroll overview
- Present/absent tracking
- Cash balance monitoring
- Recent activities feed
- Monthly overview charts

### Workforce Management
- Employee directory
- Department management
- Status tracking
- Quick employee addition
- Attendance monitoring

### Payroll
- Salary processing
- Overtime calculation
- Deduction management
- Advance tracking
- Export functionality

### Cashbook
- Transaction logging
- Balance tracking
- Income/expense management
- Transaction history
- Financial analytics

### Reports
- Payroll reports
- Attendance reports
- Financial reports
- Custom report generation
- Export capabilities

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)