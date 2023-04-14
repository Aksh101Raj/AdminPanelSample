import { Grid } from "@mui/material";
import { IconButton, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GridCloseIcon } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Swal from "sweetalert2";
import { ref, update } from "firebase/database";
import "./new.scss";
import StartFirebase from "../../firebaseconfig";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
// import { storage } from "../../firebaseconfig/new";
// import { uploadBytesResumable, getDownloadURL } from "firebase/storage";

function New({ closeEvent, fid }) {
  const db = StartFirebase();
  // const [file, setFile] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [mandal, setMandal] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [bal_sabha, setBal_sabha] = useState("");
  const [yuvak_yuvati_sabha, setYuvak_yuvati_sabha] = useState("");
  const [area_wise_sabha, setArea_wise_sabha] = useState("");
  const [ravi_sabha, setRavi_sabha] = useState("");
  const [gender, setGender] = useState("");
  const [type_of_person, setType_of_person] = useState("");
  const [type_of_devotee, setType_of_devotee] = useState("");
  const [qualification, setQualification] = useState("");
  const [occupation, setOccupation] = useState("");
  const [karyakarta_name, setKaryakarta_name] = useState("");

  useEffect(() => {
    // const uploadFile = () => {
    //   const name = new Date().getTime() + file.name;
    //   console.log(name);
    //   // const storageRef = ref(storage, file.name);
    // };
    // file && uploadFile();
    // console.log("devotee", fid.type_of_devotee);
    // console.log("person", fid.type_of_person);
    setFname(fid.fname);
    setMname(fid.mname);
    setSurname(fid.surname);
    setAddress(fid.address);
    setArea(fid.area);
    setMandal(fid.mandal);
    setCity(fid.city);
    setState(fid.state);
    setCountry(fid.country);
    setPhonenumber(fid.phonenumber);
    setEmail(fid.email);
    setDob(fid.dob);
    setBal_sabha(fid.bal_sabha);
    setYuvak_yuvati_sabha(fid.yuvak_yuvati_sabha);
    setArea_wise_sabha(fid.area_wise_sabha);
    setRavi_sabha(fid.ravi_sabha);
    setGender(fid.gender);
    setType_of_person(fid.type_of_person);
    setType_of_devotee(fid.type_of_devotee);
    setQualification(fid.qualification);
    setOccupation(fid.occupation);
    setKaryakarta_name(fid.karyakarta_name);
  }, [fid]);

  // useEffect(() => {
  //   const uploadFile = () => {
  //     const name = new Date().getTime() + file.name;
  //     console.log(name);
  //     // const storageRef = ref(storage, file.name);
  //   };
  //   file && uploadFile();
  // }, [file]);

  const createUser = async () => {
    if (
      !fname ||
      !mname ||
      !surname ||
      !address ||
      !area ||
      !mandal ||
      !city ||
      !state ||
      !country ||
      !phonenumber ||
      !email ||
      !dob ||
      !bal_sabha ||
      !yuvak_yuvati_sabha ||
      !area_wise_sabha ||
      !ravi_sabha ||
      !gender ||
      !type_of_devotee ||
      !type_of_person ||
      !qualification ||
      !occupation ||
      !karyakarta_name
    ) {
      alert("Please, Fill all the Details...");
      Swal.showValidationMessage(`Please enter login and password`);
    } else {
      try {
        // Get a key for a new Post.
        update(ref(db, "AdmiUsers/" + fid.id), {
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

          // profile_picture: imageUrl,
        });

        closeEvent();
        Swal.fire("Submitted", "Your Data has been submitted", "success");
      } catch (error) {
        alert("there was an error, details: " + error);
      }
    }
  };

  return (
    <div>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit User
        <hr style={{ border: "3px solid black", borderRadius: "10px" }} />
      </Typography>

      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <GridCloseIcon />
      </IconButton>
      {/* <Grid item xs={12}>
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/No-image-icon/No-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <br />
        <br />
        <br />
      </Grid> */}
      <Grid container spacing={2}>
        {/* <Grid item xs={12}>
          <label htmlFor="file">
            Image: <DriveFolderUploadOutlinedIcon className="icon" />
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "None" }}
          />
        </Grid> */}

        <Grid item xs={4}>
          <TextField
            id="fname"
            label="First Name"
            type="text"
            variant="outlined"
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="mname"
            label="Middle Name"
            type="text"
            variant="outlined"
            value={mname}
            onChange={(e) => {
              setMname(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="surname"
            label="Surname"
            type="text"
            variant="outlined"
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="email"
            type="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="phonenumber"
            label="phonenumber"
            variant="outlined"
            type="number"
            value={phonenumber}
            onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            label="Address"
            type="text"
            variant="outlined"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <InputLabel id="demo-simple-select-label">Area</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={area}
            label="Area"
            onChange={(e) => {
              setArea(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          >
            <MenuItem value="Manjalpur">Manjalpur</MenuItem>
            <MenuItem value="Bhavani Nagar">Bhavani Nagar</MenuItem>
            <MenuItem value="Darbar Chokadi">Darbar Chokadi</MenuItem>
            <MenuItem value="Vadsar-Kalali-Atladra">
              Vadsar-Kalali-Atladra
            </MenuItem>
            <MenuItem value="Kubereshwar">Kubereshwar</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel id="demo-simple-select-label">Mandal</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mandal}
            label="Mandal"
            onChange={(e) => {
              setMandal(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          >
            <MenuItem value="Manjalpur">Manjalpur</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            label="City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          >
            <MenuItem value="Vadodara">Vadodara</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state}
            label="State"
            onChange={(e) => {
              setState(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          >
            <MenuItem value="Gujarat">Gujarat</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          >
            <MenuItem value="India">India</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel id="demo-simple-select-label">Date of Birth</InputLabel>
          <TextField
            id="dob"
            variant="outlined"
            type="date"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={3}>
          <FormLabel id="demo-radio-buttons-group-label">Bal Sabha</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={bal_sabha}
            onChange={(e) => {
              setBal_sabha(e.target.value);
            }}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={3}>
          <FormLabel id="demo-radio-buttons-group-label">
            Yuvak/Yuvati Sabha
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={yuvak_yuvati_sabha}
            onChange={(e) => {
              setYuvak_yuvati_sabha(e.target.value);
            }}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={3}>
          <FormLabel id="demo-radio-buttons-group-label">
            Area Wise Sabha
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={area_wise_sabha}
            onChange={(e) => {
              setArea_wise_sabha(e.target.value);
            }}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={3}>
          <FormLabel id="demo-radio-buttons-group-label">Ravi Sabha</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={ravi_sabha}
            onChange={(e) => {
              setRavi_sabha(e.target.value);
            }}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={3}>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Grid>
        <Grid item xs={3}>
          <FormLabel id="demo-radio-buttons-group-label">
            Type of Person
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={type_of_person}
            onChange={(e) => {
              setType_of_person(e.target.value);
            }}
          >
            <FormControlLabel value="Balak" control={<Radio />} label="Balak" />
            <FormControlLabel value="Yuvak" control={<Radio />} label="Yuvak" />
            <FormControlLabel value="Vadil" control={<Radio />} label="Vadil" />
            <FormControlLabel
              value="Balika"
              control={<Radio />}
              label="Balika"
            />
            <FormControlLabel
              value="Yuvati"
              control={<Radio />}
              label="Yuvati"
            />
            <FormControlLabel
              value="Vadil Bahen"
              control={<Radio />}
              label="Vadil Bahen"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={3}>
          <FormLabel id="demo-radio-buttons-group-label">
            Type of Devotee
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={type_of_devotee}
            onChange={(e) => {
              setType_of_devotee(e.target.value);
            }}
          >
            <FormControlLabel
              value="General"
              control={<Radio />}
              label="General"
            />
            <FormControlLabel
              value="Ambrish"
              control={<Radio />}
              label="Ambrish"
            />
            <FormControlLabel
              value="Rushipatni"
              control={<Radio />}
              label="Rushipatni"
            />
            <FormControlLabel
              value="Sadbhav"
              control={<Radio />}
              label="Sadbhav"
            />
            <FormControlLabel value="VIP" control={<Radio />} label="VIP" />
          </RadioGroup>
        </Grid>
        <Grid item xs={3}>
          <FormLabel id="demo-radio-buttons-group-label">Occupation</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={occupation}
            onChange={(e) => {
              setOccupation(e.target.value);
            }}
          >
            <FormControlLabel value="Job" control={<Radio />} label="Job" />
            <FormControlLabel
              value="Student"
              control={<Radio />}
              label="Student"
            />
            <FormControlLabel
              value="Housewife"
              control={<Radio />}
              label="Housewife"
            />
            <FormControlLabel
              value="Business"
              control={<Radio />}
              label="Business"
            />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Grid>
        <Grid item xs={6}>
          <InputLabel id="demo-simple-select-label">Qualification</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={qualification}
            label="Qualification"
            onChange={(e) => {
              setQualification(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          >
            <MenuItem value="SSC">SSC</MenuItem>
            <MenuItem value="HSC">HSC</MenuItem>
            <MenuItem value="Graduate">Graduate</MenuItem>
            <MenuItem value="Post Graduate">Post Graduate</MenuItem>
            <MenuItem value="Doctorate">Doctorate</MenuItem>
            <MenuItem value="Diploma">Diploma</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={6}>
          <InputLabel id="karyakarta_name">Karyakarta Name</InputLabel>
          <TextField
            id="karyakarta_name"
            variant="outlined"
            type="text"
            value={karyakarta_name}
            onChange={(e) => {
              setKaryakarta_name(e.target.value);
            }}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default New;
