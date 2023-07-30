
import { IconType } from "react-icons";

interface GenerateButtonProps{
    path: string;
    name: string;
    storeId: string;
    icon: IconType;
}

const onClick= (path: string, storeId: string) => {
    window.open(`/${storeId}/reports/${path}`, '_blank');
  }

const GenerateButton: React.FC<GenerateButtonProps>  = ({
    path,
    storeId,
    icon: Icon,
    name
}) => {
    return ( 
        <div className="flex gap-3 py-3 px-4  items-center border-[1px] rounded-md">
            <Icon 
                size={45}
                className="border-[1px] rounded-md p-1"
            />
             <div className="flex flex-1 flex-col items-center justify-between">
                <span className="font-semibold">
                    {name}
                </span>
                    <button 
                        onClick={() => onClick(path, storeId)}
                        className="
                            w-full 
                            text-center 
                            text-sm
                            bg-black 
                            dark:bg-white 
                            dark:text-black 
                            text-white 
                            rounded-md 
                            p-1
                            hover:bg-neutral-400
                        "
                    >
                        Generate
                    </button>
            </div>
        </div>
     );
}
  
export default GenerateButton;