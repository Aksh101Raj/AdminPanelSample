import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { useEffect, useState } from "react";
import Startfirebase from "../../firebaseconfig";
import { onValue, ref, remove } from "firebase/database";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Swal from "sweetalert2";
import New from "../../pages/new/New";
import Edit from "../../pages/Edit/Edit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const Datatable = () => {
  const db = Startfirebase();
  const [userdata, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editopen, setEditOpen] = useState(false);
  const [formid, setFormid] = useState("");
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const editData = (
    id,
    fname,
    mname,
    surname,
    address,
    area,
    mandal,
    city,
    state,
    country,
    phonenumber,
    email,
    dob,
    bal_sabha,
    yuvak_yuvati_sabha,
    area_wise_sabha,
    ravi_sabha,
    gender,
    type_of_devotee,
    type_of_person,
    qualification,
    occupation,
    karyakarta_name
  ) => {
    const data = {
      id: id,
      fname: fname,
      mname: mname,
      surname: surname,
      address: address,
      area: area,
      mandal: mandal,
      city: city,
      state: state,
      country: country,
      phonenumber: phonenumber,
      email: email,
      dob: dob,
      bal_sabha: bal_sabha,
      yuvak_yuvati_sabha: yuvak_yuvati_sabha,
      area_wise_sabha: area_wise_sabha,
      ravi_sabha: ravi_sabha,
      gender: gender,
      type_of_person: type_of_person,
      type_of_devotee: type_of_devotee,
      qualification: qualification,
      occupation: occupation,
      karyakarta_name: karyakarta_name,
    };
    setFormid(data);
    handleEditOpen();
  };

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          remove(ref(db, "AdmiUsers/" + id));
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

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

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (userdata) => {
        return (
          <div className="cellAction">
            {/* <NavLink to="/users/test" style={{ textDecoration: "none" }}> */}
            <div>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  try {
                    editData(
                      userdata.id,
                      userdata.row.fname,
                      userdata.row.mname,
                      userdata.row.surname,
                      userdata.row.address,
                      userdata.row.area,
                      userdata.row.mandal,
                      userdata.row.city,
                      userdata.row.state,
                      userdata.row.country,
                      userdata.row.phonenumber,
                      userdata.row.email,
                      userdata.row.dob,
                      userdata.row.bal_sabha,
                      userdata.row.yuvak_yuvati_sabha,
                      userdata.row.area_wise_sabha,
                      userdata.row.ravi_sabha,
                      userdata.row.gender,
                      userdata.row.type_of_person,
                      userdata.row.type_of_devotee,
                      userdata.row.qualification,
                      userdata.row.occupation,
                      userdata.row.karyakarta_name
                    );
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                Edit
              </button>
            </div>
            {/* </NavLink> */}
            <div onClick={() => handleDelete(userdata.row.id)}>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <New closeEvent={handleClose} />
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={editopen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={editopen}>
          <Box sx={style}>
            <Edit closeEvent={handleEditClose} fid={formid} />
          </Box>
        </Fade>
      </Modal>
      <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <button className="btn btn-success" onClick={handleOpen}>
            Add New
          </button>
        </div>
        <DataGrid
          className="datagrid"
          rows={userdata}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Datatable;
