import { Box, Button, Container, Typography } from "@mui/material";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
    const css = {
        padding: '10px',
        border: '5px solid blue'
    };

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
                    HomePage:)
                </Typography>
                <Typography
                    component="h1"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                </Typography>
                <Box sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" href="/LoginPage" sx={{ width: 1 / 4, mr: 2 }} >Login</Button>
                    <Button variant="contained" href="/RegisterPage" sx={{ width: 1 / 2, mr: 2 }}  >Register</Button>
                </Box>
            </Box>
        </Container>
    </div>
};

export default HomePage;