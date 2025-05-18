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
      hoverColor: "hover:bg-slate-200"
    },
    {
      id: 2,
      value: 850,
      title: "Active Orders",
      bgColor: "bg-blue-100",
      hoverColor: "hover:bg-blue-200"
    },
    {
      id: 3,
      value: 320,
      title: "Completed Orders",
      bgColor: "bg-green-100",
      hoverColor: "hover:bg-green-200"
    },
    {
      id: 4,
      value: 45,
      title: "Pending Orders",
      bgColor: "bg-yellow-100",
      hoverColor: "hover:bg-yellow-200"
    }
  ];


  export const UserData = [
  {
    "id": "#U001",
    "name": "Saifur Rahman",
    "role": "Seller",
    "startDate": "2025-01-15",
    "endDate": "2025-04-30",
    "status": "Active"
  },
  {
    "id": "#U002",
    "name": "Saifur Rahman",
    "role": "Bidder",
    "startDate": "2025-02-10",
    "endDate": "2025-04-29",
    "status": "Active"
  },
  {
    "id": "#A003",
    "name": "Saifur Rahman",
    "role": "Seller",
    "startDate": "2025-03-01",
    "endDate": "2025-04-25",
    "status": "Active"
  },
  {
    "id": "#U002",
    "name": "Saifur Rahman",
    "role": "Bidder",
    "startDate": "2025-02-10",
    "endDate": "2025-04-29",
    "status": "Active"
  }
]
