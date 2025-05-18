/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { CustomPagination } from "../common/CustomPagination"

// Sample data - replace with your actual data source
const ActivateUser = [
  {
    id: "U001",
    name: "Saifur Rahman",
    Bids: "Bidder",
    participation: "Pending",
    activities: "ID, Address proof",
    activateDate: "2023-05-15",
    documentDetails: "ID, Address proof",
  },
  {
    id: "U002",
    name: "John Doe",
    Bids: "Seller",
    participation: "Verified",
    activities: "ID, Business License",
    activateDate: "2023-04-20",
    documentDetails: "ID, Business License",
  },
  {
    id: "U003",
    name: "Jane Smith",
    Bids: "Bidder",
    participation: "Rejected",
    activities: "ID, Proof of Address",
    activateDate: "2023-06-01",
    documentDetails: "ID, Proof of Address",
  },
  // Add more sample data as needed
]



// User verification details modal component
const UserVerificationModal = ({
  isOpen,
  onClose,
  user,
  onApprove,
  onReject,
}: {
  isOpen: boolean
  onClose: () => void
  user: any
  onApprove: (userId: string) => void
  onReject: (userId: string) => void
}) => {
  if (!user) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">User Verification Details</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-muted-foreground">User ID</div>
            <div className="font-medium">{user.id}</div>

            <div className="text-muted-foreground">Name</div>
            <div className="font-medium">{user.name}</div>

            <div className="text-muted-foreground">Role</div>
            <div className="font-medium">{user.Bids}</div>

            <div className="text-muted-foreground">Verification Status</div>
            <div>
              <Badge
                className={
                  user.participation === "Pending"
                    ? "bg-yellow-500"
                    : user.participation === "Verified"
                      ? "bg-green-500"
                      : "bg-red-500"
                }
              >
                {user.participation}
              </Badge>
            </div>

            <div className="text-muted-foreground">Document</div>
            <div className="font-medium">{user.documentDetails}</div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button className="flex-1 bg-primary bg-primary/90" onClick={() => onApprove(user.id)}>
              Approve
            </Button>
            <Button className="flex-1 bg-red-500 hover:bg-red-600" onClick={() => onReject(user.id)}>
              Reject
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function VerifiedUser() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [users, setUsers] = useState(ActivateUser)

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = users.slice(startIndex, startIndex + itemsPerPage)

  const totalPages = Math.ceil(users.length / itemsPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  // Handle items per page change
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage)
    setCurrentPage(1) // Reset to first page when changing items per page
  }

  // Open modal with user details
  const handleViewUser = (user: any) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  // Handle approve action
  const handleApprove = (userId: string) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, participation: "Verified" } : user)))
    setIsModalOpen(false)
  }

  // Handle reject action
  const handleReject = (userId: string) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, participation: "Rejected" } : user)))
    setIsModalOpen(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="lg:text-[23px] text-black md:text-xl font-semibold">Verified User</h3>
      </div>

      <div className="border border-primary/10 rounded-md overflow-x-auto">
        <Table>
          <TableHeader className="bg-primary text-white">
            <TableRow className="hover:bg-primary/90">
              <TableHead className="text-white">User Id</TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Role</TableHead>
              <TableHead className="text-white">Verification Status</TableHead>
              <TableHead className="text-white">Document Submitted</TableHead>
              <TableHead className="w-[100px] text-right text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-black">
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user, index) => (
                <TableRow key={user.id} className={index % 2 === 0 ? "bg-white" : "bg-primary/5 hover:bg-primary/10"}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.Bids}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        user.participation === "Pending"
                          ? "bg-yellow-500"
                          : user.participation === "Verified"
                            ? "bg-green-500"
                            : "bg-red-500"
                      }
                    >
                      {user.participation}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.activities}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      className="bg-transparent text-primary shadow-none hover:bg-transparent underline"
                      onClick={() => handleViewUser(user)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalRecords={users.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />

      {/* User Verification Modal */}
      <UserVerificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  )
}
