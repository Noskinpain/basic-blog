import { createContext, useState, useEffect } from "react";

const HeaderContext = createContext();

function Provider({ children }) {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };
  const handleDropDown = () => {
    setDropdownOpen(null)
  }

  const handleScroll = () => {
    const scrollToTop = window.scrollY
    if(scrollToTop > 100){
      setIsScroll(true)
    } else{
      setIsScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
 
    return () => {
     window.removeEventListener("scroll", handleScroll)
    }
 }, [])
 

  return (
    <HeaderContext.Provider
      value={{
        dropdownOpen,
        isOpen,
        isMenuOpen,
        isScroll,
        handleMenuClick,
        handleClick,
        handleCloseSidebar,
        toggleDropdown,
        handleDropDown,
        handleScroll
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export { Provider };
export default HeaderContext;
