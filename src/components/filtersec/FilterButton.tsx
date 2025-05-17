"use client"

interface FilterButtonProps {
  label: string
  active: boolean
  onClick: () => void
}

export default function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        active ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
