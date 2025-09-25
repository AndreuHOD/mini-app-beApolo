import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import UsersTable from "./table";
import { useAppDispatch } from "../store/hooks";
import { fetchUsers } from "../features/users/usersSlice";
//import Item from "../ui/item";

function Table() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        // Cargar los usuarios al montar el componente desde Redux
        dispatch(fetchUsers());
    }, [dispatch]);


    return (
        <>
            <Typography component="div" variant="h4"> Test </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5, padding: 2 }}>


                {/* <Box className="card"> */}
                    {/* Botón para traer todos los usuarios */}
                    {/* <Box>
                        <Button variant="contained" onClick={async () => setUsers(await getUsers())}>
                            get users
                        </Button>
                    </Box>
                    <br /> */}

                    {/* Input para cambiar el ID */}
                    {/* <Box>
                        <Input
                            type="number"
                            value={userId}
                            onChange={(e) => setUserId(Number(e.target.value))}
                        />

                        <Button variant="contained" onClick={() => getUser(userId)}>
                            get user {userId}
                        </Button>
                    </Box>
                    <br />

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300 }}>
                        <TextField variant="outlined" label="Nombre" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                        <TextField variant="outlined" label="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                        <TextField variant="outlined" label="Status" value={newUser.status} onChange={(e) => setNewUser({ ...newUser, status: e.target.value })} />
                        <Button variant="contained" onClick={() => createUser(newUser)}>
                            crear usuario
                        </Button>
                    </Box>
                    <br /> */}



                {/* </Box> */}
                    {/* <UsersTable /> */}
                    <UsersTable />
            </Box>
        </>
    );
}

export default Table;
