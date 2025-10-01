import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import UsersTable from "./table";
import { useAppDispatch } from "../store/hooks";
import { fetchUsersRequest } from "../features/usersSlice";
//import Item from "../ui/item";

function Table() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        // Load users on mount via saga
        dispatch(fetchUsersRequest());
    }, [dispatch]);


    return (
        <>
            <Typography component="div" variant="h4"> Test </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5, padding: 2 }}>
                    <UsersTable />
            </Box>
        </>
    );
}

export default Table;
