import Logo from "../assets/Logo.png"
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import {Button} from '../components/Button'
import { useState } from "react"
 
export default function PageHeader() {
const [showFullWidthSearch, setShowWidthSearch] = useState(false)
 
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4" >
        <div className={`flex items-center flex-shrink-0 gap-4  ${showFullWidthSearch ? "hidden" : "flex"}`}>
            <Button variant="ghost" size="icon">
                <Menu />
            </Button>
            <a href="/">
                <img src={Logo} className="h-6"/>
            </a>
        </div>
        
        <form className={`md:flex flex-grow justify-center gap-  ${showFullWidthSearch ? "flex" : "hidden"}`}>
          {showFullWidthSearch &&  <Button
            onClick={() => setShowWidthSearch(false)} 
            type="button" 
            size="icon"
            variant="ghost" 
            className="flex-shrink-0">
            <ArrowLeft />
          </Button>}

          <div className="flex flex-grow max-w-[600px]">
            <input type="search" placeholder="Search" className="rounded-l-full border
             border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full
             focus:border-blue-500 outline-none" />
            <Button type="button" className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0
            flex-shrink-0">
              <Search />
            </Button>
          </div>
          <Button type="button" size="icon" className="flex-shrink-0">
            <Mic />
          </Button>
        </form>
        <div className={`flex flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
          <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setShowWidthSearch(true)}>
            <Search />
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Mic />
          </Button>
          <Button size="icon" variant="ghost">
            <Upload />
          </Button>
          <Button size="icon" variant="ghost">
            <Bell />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
        </div>
    </div>
  )
}
