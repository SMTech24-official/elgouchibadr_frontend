"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import { UserData } from "@/types/fakeDashboardData";



export default function UserList() {
  const [currentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter users based on search term
 

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = UserData.slice(
    startIndex,
    startIndex + itemsPerPage
  );


  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // In a real app, you would call an API here
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="lg:text-[23px] text-black md:text-xl font-semibold">
          All Users
        </h3>
        
      </div>

      <div className="border border-primary/10 rounded-md overflow-x-auto">
        <Table>
          <TableHeader className="bg-primary text-white">
            <TableRow className="hover:bg-primary/90">
              <TableHead className="text-white">ID</TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Role</TableHead>
              <TableHead className="text-white">Start Date</TableHead>
              <TableHead className="text-white">End Date</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="w-[100px] text-right text-white">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-black">
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user, index) => (
                <TableRow
                  key={user.id}
                  className={
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-primary/5 hover:bg-primary/10"
                  }
                >
                  <TableCell>{user.id}</TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.startDate}</TableCell>
                  <TableCell>{user.endDate}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right space-x-2 flex gap-2">
                   
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete()}
                      className="text-destructive hover:bg-destructive/10 text-red-600 hover:text-red-700"
                    >
                      Deactivate
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete()}
                      className="text-destructive hover:bg-destructive/10 text-red-600 hover:text-red-700"
                    >
                      Delete
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
    </div>
  );
}