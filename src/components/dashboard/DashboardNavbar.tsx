
import { usePathname } from "next/navigation";

export default function DashboardNav() {
  const pathName = usePathname();
  console.log("pathname is", pathName);
  return (
    <div>
      <div className="w-full flex items-center justify-between gap-0 sm:gap-10 bg-accent text-white lg:px-4 px-20 py-4">
        <div>
          <h3 className="lg:text-[23px] md:text-xl font-semibold">
            Welcome to Dashboard{" "}
            
          </h3>
          <p>Admin</p>
        </div>

       
      </div>
    </div>
  );
}
