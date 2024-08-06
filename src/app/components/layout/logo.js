import { ROUTES } from "../../routes";
import CanvasLogo from "../3d_object/logo/canvas";

export default function Logo() {

  return (
    <>
      <a href={ROUTES.Home} className="logo">
        <CanvasLogo/>
      </a>
    </>
  );
}
