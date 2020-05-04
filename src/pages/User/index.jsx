import React from "react";
import { Container, Grid } from "@material-ui/core";
import { v4 as uuiiv4 } from 'uuid'
import styles from "./style";
import Form from "../../components/Form";
import Table from "../../components/Table";
// import { MovieIcon } from '../../icons';
// import useGet from '../../hooks/useGet'
import { useState, useEffect } from "react";
import { getService, postService, putService, deleteService } from "../../services";


const columns = [
  // { id: 'id', label: 'id', minWidth: 0 },
  // { id: 'idgroup', label: 'group', minWidth: 0 },
  { id: 'lastname', label: 'Apellido', minWidth: 70 },
  { id: 'name', label: 'Nombre', minWidth: 70 },
  { id: 'user', label: 'Usuario', minWidth: 70 },
  { id: 'id', label: 'Opciones', type: 'button', minWidth: 0 },
];

const User = () => {
  const classes = styles();
  const [users, setUsers] = useState([]);
  const [user,setUser] = useState({})

  const urlUsers = process.env.REACT_APP_URL + "users";

  const selected = (data) => {
    setUser(data)
  };

  const getUsers = async () => {
    const res = await getService(urlUsers);
    if (res.status === 200) {
      setUsers(res.data);
    
    }
  };

  const addUser = async (data) => {
    data= {...data,id:uuiiv4()}
    const res = await postService(urlUsers,data);
    if (res.status === 201) {
      setUser({
        user: "",
        name: "",
        lastname: "",
        password: "",
        idgroup: 1,
      });
      getUsers();
    }
  };

  const editUser = async (data) => {
    const res = await putService(urlUsers+"/"+data.id,data);
    if (res.status === 200) {
      setUser({
        user: "",
        name: "",
        lastname: "",
        password: "",
        idgroup: 1,
      });
      getUsers();
    }
  };

  const deleteUser = async (data) => {
    const res = await deleteService(urlUsers+"/"+data.id);
    if (res.status === 200) {
      setUser({
        user: "",
        name: "",
        lastname: "",
        password: "",
        idgroup: 1,
      });
      getUsers();
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container className={classes.container}>
      <Grid
        container
        className={classes.titleGridContainer}
        spacing={2}
        alignItems="flex-start"
      >
        <Grid item md={4}>
          <Form addUser={addUser} editUser={editUser} selected={user} />
        </Grid>
        <Grid item md={8} className={classes.tableContainer}>
          <Table data={users} columns={columns} edit={selected}  delete={deleteUser}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default User;
