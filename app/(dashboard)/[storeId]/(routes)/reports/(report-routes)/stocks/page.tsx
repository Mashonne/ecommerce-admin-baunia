import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";

import ReportView from "./components/report-view";

export type StockTable = {
  id: string;
  name: string | null;
  category: string,
  price: string,
  inStock: number,
  totalValue: string,
};

const SalesReport = async ({
  params 
}: { 
  params: { storeId: string } 
}) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedProducts: StockTable[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    price: formatter.format(item.price.toNumber()),
    category: item.category.name,
    inStock:  item.quantity,
    totalValue: formatter.format(item.quantity*item.price.toNumber()),
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
       <ReportView data={formattedProducts}/>
      </div>
     );
}
 
export default SalesReport;