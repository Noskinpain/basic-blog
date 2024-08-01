import React from 'react'
import useHeader from '../../../hooks/use-header';

const MenuOptions = () => {
const {isMenuOpen} = useHeader()
   const menuOptions = [
    { path: "/", label: "Home", value: "1"},
    { path: "/travel", label: "Travel", value: "2" },
    { path: "/destinations", label: "Destination", value: "3" },
    { path: "/hotels", label: "Hotels", value: "" },
    { path: "/lifestyle", label: "Lifestyle", value: "4" },
    { path: "/blog", label: "Blog", value: "" },
    { path: "/galleries", label: "Galleries", value: "5" },
    { path: "/contact", label: "Contact", value: "6" },
  ];
  

  const renderedMenuOptions = menuOptions.map((menu) => {
    return <p className="px-4 w-full" key={menu.value}>
       {menu.label}
     </p>
   })
  return (
  <div>
  {
    isMenuOpen && 
    
    <section className= "absolute mx-2 flex md:hidden flex-col gap-4 py-6 bg-white border w-[calc(100%-1rem)] z-10">
    {renderedMenuOptions}
  </section>
  }
  
  </div>
  )
}

export default MenuOptions