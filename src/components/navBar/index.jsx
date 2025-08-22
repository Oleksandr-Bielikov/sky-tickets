import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function NavBar() {
    const items = useSelector(state => state.cart.items);

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
                        <IconButton color="inherit" sx={{ ml: 2, mr: 1 }} onClick={handleOpenCart}>
                            <Badge badgeContent={items.length} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
