import Link from "next/link";

const Nav = ({navData, header}) => {
  return <nav>
    <ul className="flex justify-around items-center">
      {navData.map((item,idx)=>{
        const {name, href} = item
        return <li key={idx}>
          <Link href={href}>
            <a className={`${header ? 'text-primary' : 'text-white'} px-8 cursor-pointer hover:text-accent-hover transition`}>{name}</a>
          </Link>
        </li>
      })}
    </ul>
  </nav>;
};

export default Nav;
