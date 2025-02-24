import Image from "next/image";
import Link from "next/link"

interface MenuProps {
    color: string;
  }
  
  export default function Menu({ color }: MenuProps) {
    return (
      <div style={{ backgroundColor: color }} className="w-full h-32 flex items-center gap-4 p-4">
        <Link href="/" className="text-blue-500 hover:underline ">
          Home          
        </Link>
        <Link href="/page2" className="text-blue-500 hover:underline">
          page2
        </Link>
      </div>
    );
  }