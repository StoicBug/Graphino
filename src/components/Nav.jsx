import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-primary font-inconsolata">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2">
          <h1 className="font-bold text-3xl text-white">Graphino</h1>
          <ul className="flex items-center gap-6 text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Simulation</Link>
            </li>
            <li>
              <Link to="/about">Graph Manipulation</Link>
            </li>
            <li>
              <Link to="/about">
                <button className="bg-white rounded-lg py-2 px-4 text-black font-medium">
                Start Learning
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
