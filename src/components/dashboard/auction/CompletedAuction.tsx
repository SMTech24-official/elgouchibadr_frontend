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
import { CustomPagination } from "../../common/CustomPagination";
import { LiveAuction } from "@/types/fakeDashboardData";
import { Badge } from "../../ui/badge";
import { useRouter } from "next/navigation";

export default function CompletedAuction() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const router = useRouter();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = LiveAuction.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(LiveAuction.length / itemsPerPage);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handleView = (id: string) => {
    router.push(`/dashboard/auction/completed-auction/${id}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="lg:text-[23px] text-black md:text-xl font-semibold">
          Completed Auction
        </h3>
      </div>

      <div className="border border-primary/10 rounded-md overflow-x-auto">
        <Table>
          <TableHeader className="bg-primary text-white">
            <TableRow className="hover:bg-primary/90">
              <TableHead className="text-white">Auction ID</TableHead>
              <TableHead className="text-white">Car Model</TableHead>
              <TableHead className="text-white">Current Bid</TableHead>
              <TableHead className="text-white">Time Remaining</TableHead>
              <TableHead className="text-white">Active Bidders</TableHead>
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
                  {/* <TableCell>{user.name}</TableCell> */}
                  <TableCell>{user.price}</TableCell>
                  <TableCell>{user.timeLeft}</TableCell>
                  <TableCell>{user.bids}</TableCell>
                  <TableCell>
                    <Badge className="bg-primary/10 border-primary text-primary">
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      onClick={() => handleView(user.id.toString())}
                      className="bg-transparent text-primary shadow-none hover:bg-transparent underline"
                    >
                      View Report
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
        totalRecords={LiveAuction.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
}
