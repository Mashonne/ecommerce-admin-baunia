import prismadb from "@/lib/prismadb";
import ReportView from "./components/report-view";

const data = [
  {
    no: 1,
    name: "Sam",
    email: "himash@gmail.com",
    total: "$200",
  },
  {
    no: 2,
    name: "Sam",
    email: "himash@gmail.com",
    total: "$200",
  },
  {
    no: 3,
    name: "Sam",
    email: "himash@gmail.com",
    total: "$200",
  },
]

type OrderColumn = {
  id: string;
  phone: string,
  address: string,
  isPaid: boolean,
  totalPrice: string,
  products: string,
  createdAt: string;
};

const SalesReport = async ({
  params 
}: { 
  params: { storeId: string } 
}) => {
    const orders = await prismadb.order.findMany({
      where: {
        storeId: params.storeId,
      },
      include: {
        orderItems: {
          include: {
            product: true
          } 
        }
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    

    return ( 
      <div 
        className="
            justify-center
            items-center
            fixed
            inset-0
            z-50
          "
      >     
       <ReportView data={data}/>
      </div>
     );
}
 
export default SalesReport;