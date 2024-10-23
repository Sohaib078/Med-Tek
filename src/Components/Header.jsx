import MainNav from "./MainNav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <div>
       <div>
      <div className=" hidden lg:block">
        <MainNav />
      </div>  
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </div>
  
    </div>
  )
}

export default Header
 
   

 
