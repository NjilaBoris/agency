import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  const navLinks = [
    { title: "Features", href: "/features" },
    { title: "Product", href: "/product" },
    { title: "Socials", href: "/socials" },
    { title: "Pricing", href: "/pricing" },
  ];
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <Container className="py-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Button className="text-sm px-4 py-2 rounded-md shadow-brand text-neutral-600 dark:text-neutral-400 font-medium">
            Login
          </Button>
          <Button className="bg-neutral-700 text-white">Signup</Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
