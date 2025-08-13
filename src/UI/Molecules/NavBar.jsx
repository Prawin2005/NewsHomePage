import NavLink from "../Atoms/NavLink";


const NavBar = ({navlist}) => {
  return (
    <div>
        <ul className="d-flex list-unstyled gap-3">
            {navlist.map((item)=><NavLink navlist={item} />)}
        </ul>
    </div>
      
  );
};

export default NavBar;
