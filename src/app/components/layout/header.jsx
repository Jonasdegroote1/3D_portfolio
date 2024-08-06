import { Link } from "react-router-dom";
import Logo from "./logo";
import Navigation from "./navigation";

export default function Header () {

return(
  <header >
    <div className='max-w-screen-xl m-auto header'>
      <Logo/>
      <Navigation/>
    </div>
  </header>
)
}