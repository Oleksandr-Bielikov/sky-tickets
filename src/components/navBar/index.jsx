import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router';

export default function NavBar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    const handleOpenCart = () => {
        navigate('/cart')
    }
    return (
        <Box sx={{ flexGrow: 1, mb: 10 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <AirplaneTicketIcon fontSize="large" sx={{ mr: 1 }} />
                        <Typography variant="h5" component="div">
                            SkyTickets
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            color="inherit"
                            variant="outlined"
                            startIcon={<HomeIcon />}
                            sx={{
                                fontWeight: 'bold',
                                minWidth: 120,
                                px: 3,
                                borderRadius: 3,
                                borderColor: 'white',
                            }}
                            onClick={handleHomeClick}
                        >
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            variant="outlined"
                            startIcon={<ShoppingCartIcon />}
                            sx={{
                                fontWeight: 'bold',
                                minWidth: 120,
                                px: 3,
                                borderRadius: 3,
                                borderColor: 'white',
                            }}
                            onClick={handleOpenCart}
                        >
                            Cart
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
