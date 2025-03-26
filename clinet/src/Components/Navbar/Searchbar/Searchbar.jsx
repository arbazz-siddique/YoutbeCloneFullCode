import {  useState } from "react";
import { FaSearch } from "react-icons/fa";
import {BsMicFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import Searchlist from "./Searchlist"; // ✅ Adjust for the correct folder
import "./Searchbar.css"
import { useSelector } from "react-redux";


const Searchbar = () => {
  
  const [Searchquery, setSearchquery] = useState("");
  const [searchlist, setSearchlist] = useState(false);
  const Titlearray = useSelector(state=>state?.videoreducer)?.data?.filter(q=>q?.videotitle.toUpperCase().includes(Searchquery?.toUpperCase() )).map(m=>m?.videotitle)

  // const Titlearray = ["video1", "video2", "programming", "songs", "video3", "movies", "animated video"].filter((q) =>
  //   q.toUpperCase().includes(Searchquery.toUpperCase()));
  // const Titlearray=useSelector(s=>s?.videoreducer)?.data?.filter(q=>q?.videotitle.toUpperCase().includes(searchquery?.toUpperCase())).map(m=>m?.videotitle)

  return (
    <>
      <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
          <div className="search_div">
            <input
              type="text"
              className="iBox_SearchBar"
              placeholder="search"
              onChange={(e) => setSearchquery(e.target.value)}
              value={Searchquery}
              onClick={() => setSearchlist(true)}
            />
            <Link to={`search/${Searchquery}`}>
              <FaSearch className="serachIcon_SearchBar" />
            </Link>
            <BsMicFill className="Mic_SearchBar" />
            {Searchquery && searchlist && <Searchlist setSearchquery={setSearchquery} Titlearray={Titlearray} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar