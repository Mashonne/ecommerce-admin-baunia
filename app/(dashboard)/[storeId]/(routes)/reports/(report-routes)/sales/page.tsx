import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";

import ReportView from "./components/report-view";

export type OrderTable = {
  id: string;
  name: string | null;
  phone: string,
  address: string,
  totalPrice: string,
  products: string,
};

const SalesReport = async ({
  params 
}: { 
  params: { storeId: string } 
}) => {
    const orders = await prismadb.order.findMany({
      where: {
        storeId: params.storeId,
        isPaid: true,
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

    const formattedOrders: OrderTable[] = orders.map((item) => ({
      id: item.id,
      name: item.customerName,
      phone: item.phone,
      address: item.address,
      products: item.orderItems.map((orderItem) => orderItem.product.name).join(', '),
      totalPrice: formatter.format(item.orderItems.reduce((total, item) => {
        return total + Number(item.product.price)
      }, 0)),
    }));

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
       <ReportView data={formattedOrders}/>
      </div>
     );
}
 
export default SalesReport;