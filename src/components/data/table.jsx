import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import Startfirebase from "../../firebaseconfig";

const Datatable = () => {
  const db = Startfirebase();
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    // console.log("test");
    // console.log("userdata", userdata);
    const dbref = ref(db, "AdmiUsers");
    // console.log(dbref);
    onValue(dbref, (snapshot) => {
      // console.log("hie");
      try {
        let records = [];
        snapshot.forEach((childsnapshot) => {
          let keyName = childsnapshot.key;
          let data = childsnapshot.val();
          records.push({ id: keyName, ...data });
        });

        setUserData(records);
      } catch (error) {
        console.log(error, "hi");
      }
    });
  }, [db]);

  return (
    <div className="datatable">
      {/* <div className="datatableTitle">
        Add New User
        <NavLink to="/users/new">
          <button className="btn btn-success">Add New</button>
        </NavLink>
      </div> */}
      <DataGrid
        className="datagrid"
        rows={userdata}
        // columns={userColumns.concat(actionColumn)}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;
