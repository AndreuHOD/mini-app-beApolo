import { useState } from "react";
import { Paper, Box, Button, TextField, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addUserRequest } from "../features/usersSlice";
import type { RootState } from "../store/store";
import type { User } from "../features/usersSlice";

function UsersGrid() {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state: RootState) => state.users.items);

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        status: "",
        hola: ""
    });

    return (
        <Paper sx={{ padding: 2, width: '100%', overflowX: 'auto', borderTop: '4px solid', borderTopColor: 'secondary.main' }}>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, flexGrow: 1 }}>
                <TextField variant="outlined" label="Nombre" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} sx={{ flexGrow: 1 }} />
                <TextField variant="outlined" label="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} sx={{ flexGrow: 1 }} />
                <TextField variant="outlined" label="Status" value={newUser.status} onChange={(e) => setNewUser({ ...newUser, status: e.target.value })} sx={{ flexGrow: 1 }} />
                <Button variant="contained" color="secondary" onClick={async () => { await dispatch(addUserRequest({ name: newUser.name, email: newUser.email, status: newUser.status, hola: newUser.hola })); /*setNewUser({ name: "", email: "", status: "", hola: "" });*/ }} sx={{ flexGrow: 1 }}>
                    crear usuario
                </Button>
            </Box>
            <br />

            <TableContainer>
                <Table size="small" aria-label="users table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: 'secondary.main' }}>
                            <TableCell sx={{ color: 'secondary.contrastText', fontWeight: 600, width: 100 }}>ID</TableCell>
                            <TableCell sx={{ color: 'secondary.contrastText', fontWeight: 600, minWidth: 160 }}>Name</TableCell>
                            <TableCell sx={{ color: 'secondary.contrastText', fontWeight: 600, minWidth: 220 }}>Email</TableCell>
                            <TableCell sx={{ color: 'secondary.contrastText', fontWeight: 600, minWidth: 140 }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user: User) => (
                            <TableRow key={user.id ?? user.email} hover>
                                <TableCell>{user.id ?? "-"}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default UsersGrid;