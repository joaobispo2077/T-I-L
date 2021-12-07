import Link from "next/link";
import { motion } from "framer-motion";

type CardProps = {
  href: string;
  imgSource: string;
  layoutId: string;
}

export const Card: React.FC<CardProps> = ({
  href,
  imgSource,
  layoutId,
}) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl hover:bg-gray-50 transition">
      <motion.img src={imgSource} className="w-full h-full" layoutId={layoutId}/>
      </div>
    </Link>
  );
}
