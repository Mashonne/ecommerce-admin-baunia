'use client';

import { BiBarChartSquare, BiNotepad } from "react-icons/bi";

import GenerateButton from "@/components/ui/generate-button";
import { Heading } from "@/components/ui/heading";


interface OverviewHeadingProps {
   storeId: string;
}
 
const OverviewHeading: React.FC<OverviewHeadingProps> = ({
   storeId
}) => {
    return ( 
        <div className="flex justify-between items-center">
             <Heading title="Dashboard" description="Over view of your store" />
             <div className="flex gap-2">
                <GenerateButton 
                  icon={BiBarChartSquare} 
                  path="sales" 
                  storeId={storeId}
                  name="Monthly Sales"
               />
               <GenerateButton 
                  icon={BiNotepad} 
                  path="stocks" 
                  storeId={storeId}
                  name="Stocks Report"
               />
             </div>
        </div>
     );
}
 
export default OverviewHeading;