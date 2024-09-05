import { ReactNode } from "react";
import { Link } from "react-router-dom";

function Navlink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link to={href} className="dn link mh3 f4 muted-blue">
        {children}
      </Link>
    </li>
  );
}

export default Navlink;
