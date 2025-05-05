
import { Home, GridIcon, LayoutList, Package, Mail, Contact } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      // If we're already on the home page, just scroll to the section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to the home page with the section as a hash
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm">
      <NavigationMenu className="max-w-6xl mx-auto">
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuLink
              onClick={() => scrollToSection("home")}
              className="group inline-flex items-center text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <Home className="w-4 h-4 mr-2" />
              <span>Home</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              onClick={() => scrollToSection("features")}
              className="group inline-flex items-center text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <LayoutList className="w-4 h-4 mr-2" />
              <span>Funcionalidades</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              onClick={() => scrollToSection("modules")}
              className="group inline-flex items-center text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <GridIcon className="w-4 h-4 mr-2" />
              <span>Módulos</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              onClick={() => scrollToSection("pricing")}
              className="group inline-flex items-center text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <Package className="w-4 h-4 mr-2" />
              <span>Planos</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/contact"
              className="group inline-flex items-center text-gray-700 hover:text-blue-600"
            >
              <Contact className="w-4 h-4 mr-2" />
              <span>Contato</span>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
