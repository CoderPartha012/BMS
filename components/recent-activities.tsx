"use client"

import { Avatar } from "@/components/ui/avatar"
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    name: "Rajesh Kumar",
    action: "Punched in",
    timestamp: "2 minutes ago",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=75&fit=crop"
  },
  {
    name: "Priya Sharma",
    action: "Requested advance",
    timestamp: "10 minutes ago",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=75&fit=crop"
  },
  {
    name: "Amit Patel",
    action: "Submitted report",
    timestamp: "25 minutes ago",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&q=75&fit=crop"
  },
  {
    name: "Neha Gupta",
    action: "Punched out",
    timestamp: "1 hour ago",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&q=75&fit=crop"
  },
  {
    name: "Rahul Singh",
    action: "Added expense",
    timestamp: "2 hours ago",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&q=75&fit=crop"
  }
]

export default function RecentActivities() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.image} alt={activity.name} />
            <AvatarFallback>{activity.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">
              {activity.action}
            </p>
          </div>
          <div className="ml-auto font-medium text-sm text-muted-foreground">
            {activity.timestamp}
          </div>
        </div>
      ))}
    </div>
  )
}

export { RecentActivities }