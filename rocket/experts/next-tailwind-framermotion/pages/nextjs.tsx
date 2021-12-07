import { motion } from "framer-motion";
import { Card } from "../components/Card";
import Link from "next/link";

export default function Nextjs() {
  return (
    <div>

        <Card
          imgSource="/img/nextjs.svg"
          href="nextjs"
          layoutId="nextjs-logo"
        />

        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="bg-gray-900 text-gray-50 px-6 text-lg font-semibold rounded-xl hover:bg-gray-700">
            <a>Voltar para a home</a>
          </motion.div>
        </Link>
    </div>
    );
}
