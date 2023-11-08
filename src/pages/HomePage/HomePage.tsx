import { Box, Button, Container, Typography } from "@mui/material";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useStore } from 'react-redux';
import type { Store } from 'redux'



const HomePage = () => {
    const store: Store = useStore();
    const globSt = store.getState();
    let auth:boolean = useSelector((state: any) => state.user.isAuthenticated)
    let textPage;
    console.log('auth',auth);
    if(auth)
    textPage = <div>HomePage:) А я знаю твою почту: {globSt.user.user.email}</div>;
    else
    textPage =  <div>HomePage:)</div>;    

    return <div>
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                   {textPage}
                </Typography>
                <Typography
                    component="h1"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                </Typography>
                <Box sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" href="/login" sx={{ width: 1 / 4, mr: 2 }} >Login</Button>
                    <Button variant="contained" href="/register" sx={{ width: 1 / 2, mr: 2 }}  >Register</Button>
                </Box>
            </Box>
        </Container>
    </div>
};

export default HomePage;