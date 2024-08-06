import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

export default function Navigation () {
  console.log(ROUTES.Blog)
  return (
    <>
      <nav className={'flex flex-row '}> 
        <ul className={'flex flex-col md:flex-row flex-nowrap items-center md:justify-end gap-8 '}>
          <li>
            <Link to={ROUTES.Home}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.Project}>Projects</Link>
          </li>
          <li>
            <Link to={ROUTES.Blog}>Blog</Link>
          </li>
          <li>
            <Link to={ROUTES.About}>Who am I?</Link>
          </li>
          <li>
            <Link to={ROUTES.Contact}>contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}