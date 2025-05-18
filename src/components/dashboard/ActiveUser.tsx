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
// import Swal from "sweetalert2";
import { ActivateUser } from "@/types/fakeDashboardData";
import { CustomPagination } from "../common/CustomPagination";

export default function ActiveUser() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = ActivateUser.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(ActivateUser.length / itemsPerPage);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="lg:text-[23px] text-black md:text-xl font-semibold">
          User Activity
        </h3>
      </div>

      <div className="border border-primary/10 rounded-md overflow-x-auto">
        <Table>
          <TableHeader className="bg-primary text-white">
            <TableRow className="hover:bg-primary/90">
              <TableHead className="text-white">ID</TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Bids Placed</TableHead>
              <TableHead className="text-white">
                Auctions Participated
              </TableHead>
              <TableHead className="text-white">Completed Activities</TableHead>
              <TableHead className="text-white">Last Active</TableHead>
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
                  {/* <TableCell>{user.name}</TableCell> */}
                  <TableCell>{user.Bids}</TableCell>
                  <TableCell>{user.participation}</TableCell>
                  <TableCell>{user.activities}</TableCell>
                  <TableCell>{user.activateDate}</TableCell>
                  <TableCell>
                    <Button className="bg-transparent text-primary shadow-none hover:bg-transparent underline">
                      View History
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
        totalRecords={ActivateUser.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
}
