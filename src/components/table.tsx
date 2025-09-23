import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid"; // Grid v2
import { Paper, Box, Button, Typography, Input, TextField } from "@mui/material";
import { getUser, getUsers, createUser } from "./api";

type User = {
    id?: number;
    name: string;
    email: string;
    status: string;
    hola?: string;
};

type UsersTableProps = {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

function UsersGrid({ users, setUsers }: UsersTableProps) {

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        status: "",
        hola: ""
    });

    return (
        <Paper sx={{ padding: 2, width: '100%', overflowX: 'auto', borderTop: '4px solid', borderTopColor: 'secondary.main' }}>

            <Box className="card">
                {/* Botón para traer todos los usuarios */}
                {/* <Box>
                    <Button variant="contained" onClick={async () => setUsers(await getUsers())}>
                        get users
                    </Button>
                </Box> */}



                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300 }}>
                    <TextField variant="outlined" label="Nombre" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                    <TextField variant="outlined" label="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                    <TextField variant="outlined" label="Status" value={newUser.status} onChange={(e) => setNewUser({ ...newUser, status: e.target.value })} />
                    <Button variant="contained" color="secondary" onClick={() => createUser(newUser)}>
                        crear usuario
                    </Button>
                </Box>
                <br />



            </Box>


            {/* Header row */}
            <Grid container sx={{ fontWeight: "bold", borderBottom: "1px solid #ccc", py: 1, flexWrap: 'nowrap', bgcolor: 'secondary.main', color: 'secondary.contrastText' }}>
                <Grid size={2}>
                    <Typography>ID</Typography>
                </Grid>
                <Grid size={3}>
                    <Typography>Name</Typography>
                </Grid>
                <Grid size={10}>
                    <Typography>Email</Typography>
                </Grid>
                <Grid size={4}>
                    <Typography>Status</Typography>
                </Grid>
            </Grid>

            {/* Data rows */}
            {users.map((user) => (
                <Grid
                    container
                    key={user.id ?? user.email}
                    sx={{ borderBottom: "1px solid #eee", py: 1, flexWrap: 'nowrap' }}
                >
                    <Grid size={2}>
                        {user.id ?? "-"}
                    </Grid>
                    <Grid size={3}>
                        {user.name}
                    </Grid>
                    <Grid size={10}>
                        {user.email}
                    </Grid>
                    <Grid size={4}>
                        {user.status}
                    </Grid>
                </Grid>
            ))}
        </Paper>
    );
}

export default UsersGrid;