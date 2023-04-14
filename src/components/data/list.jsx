import "./list.scss";
// import Sidebar from "../../components/sidebar/Sidebarr";
// import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/data/table";

const List = () => {
  return (
    <div className="list">
      {/* <Sidebar /> */}
      <div className="listContainer">
        <div className="head">
          <div className="listTitle">Information</div>
        </div>
        <Datatable />
      </div>
    </div>
  );
};

export default List;
