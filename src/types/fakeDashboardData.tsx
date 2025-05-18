interface StatCard {
  id: number;
  value: number;
  title: string;
  description?: string;
  bgColor: string;
  hoverColor: string;
}

export const statsData: StatCard[] = [
  {
    id: 1,
    value: 1200,
    title: "Total User",
    bgColor: "bg-slate-100",
    hoverColor: "hover:bg-slate-200",
  },
  {
    id: 2,
    value: 850,
    title: "Active Orders",
    bgColor: "bg-blue-100",
    hoverColor: "hover:bg-blue-200",
  },
  {
    id: 3,
    value: 320,
    title: "Completed Orders",
    bgColor: "bg-green-100",
    hoverColor: "hover:bg-green-200",
  },
  {
    id: 4,
    value: 45,
    title: "Pending Orders",
    bgColor: "bg-yellow-100",
    hoverColor: "hover:bg-yellow-200",
  },
];

export const UserData = [
  {
    id: "#U001",
    name: "Saifur Rahman",
    role: "Seller",
    startDate: "2025-01-15",
    endDate: "2025-04-30",
    status: "Active",
  },
  {
    id: "#U002",
    name: "Saifur Rahman",
    role: "Bidder",
    startDate: "2025-02-10",
    endDate: "2025-04-29",
    status: "Active",
  },
  {
    id: "#A003",
    name: "Saifur Rahman",
    role: "Seller",
    startDate: "2025-03-01",
    endDate: "2025-04-25",
    status: "Active",
  },
  {
    id: "#U002",
    name: "Saifur Rahman",
    role: "Bidder",
    startDate: "2025-02-10",
    endDate: "2025-04-29",
    status: "Active",
  },
];

export const ActivateUser = [
  {
    id: "#U001",
    name: "Saifur Rahman",
    Bids: 15,
    participation: 20,
    activities: 30,
    activateDate: "2025-01-15",
  },
  {
    id: "#U002",
    name: "Saifur Rahman",
    Bids: 15,
    participation: 20,
    activities: 30,
    activateDate: "2025-02-10",
  },
  {
    id: "#A003",
    name: "Saifur Rahman",
    Bids: 15,
    participation: 20,
    activities: 30,
    activateDate: "2025-03-01",
  },
  {
    id: "#U002",
    name: "Saifur Rahman",
    Bids: 15,
    participation: 20,
    activities: 30,
    activateDate: "2025-02-10",
  },
];


export const LiveAuction = [
  {
    id: 1,
    name: "Toyota Camry",
    price: "$12,500",
    timeLeft: "5h 30m",
    bids: "03",
    status: "Live"
  },
  {
    id: 2,
    name: "Honda Civic",
    price: "$8,200",
    timeLeft: "3h 15m",
    bids: "05",
    status: "Live"
  },
  {
    id: 3,
    name: "BMW 3 Series",
    price: "$25,000",
    timeLeft: "12h 45m",
    bids: "12",
    status: "Live"
  },
  {
    id: 4,
    name: "BMW 3 Series",
    price: "$25,000",
    timeLeft: "12h 45m",
    bids: "12",
    status: "Live"
  },
  {
    id: 5,
    name: "BMW 3 Series",
    price: "$25,000",
    timeLeft: "12h 45m",
    bids: "12",
    status: "Live"
  },
  {
    id: 5,
    name: "BMW 3 Series",
    price: "$25,000",
    timeLeft: "12h 45m",
    bids: "12",
    status: "Live"
  }
]