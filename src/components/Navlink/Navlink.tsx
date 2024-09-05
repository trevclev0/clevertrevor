import { ReactNode } from "react";
import { Link } from "react-router-dom";

function Navlink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link to={href} className="dn db-ns link mh1 f4 muted-blue hover-navy">
        {children}
      </Link>
    </li>
  );
}

export default Navlink;
