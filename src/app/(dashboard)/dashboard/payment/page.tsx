import PayementBarChart from "@/components/dashboard/PaymentBarChart";
import TransactionMetrics from "@/components/dashboard/TransactionMetrics";

export default function Page() {
    return (
        <div>
            <TransactionMetrics />
            
            <div className="mt-6 ">
                <div className="shadow-md rounded-[14px]">
                    <PayementBarChart />
                </div>
              
            </div>
            
        </div>
    );
}