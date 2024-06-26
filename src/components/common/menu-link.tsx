import { slide, scale } from "@/anim";
import { motion } from "framer-motion";
import Link from "next/link";

interface MenuLinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

const MenuLink = ({ data, isActive, setSelectedIndicator }: MenuLinkProps) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="link"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className=""
      ></motion.div>
      <Link href={href}>
        <span className="text-white hover:text-[#ffee00] transition-colors font-medium uppercase font-epilogue">
          {title}
        </span>
      </Link>
    </motion.div>
  );
};

export default MenuLink;
