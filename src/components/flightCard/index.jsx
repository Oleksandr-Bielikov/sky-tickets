import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../images/planeImage.jpg';

export default function FligthCard({ id, airline, from, to, departureTime, arrivalTime, price, terminal, gate, tickets, onShowMore }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="Mriia"
                height="140"
                image={image}
            />
            <CardContent style={{ justifyContent: 'start', alignItems: 'start', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {id}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Airline: {airline}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    From: {from}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    To: {to}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Departure Time: {new Date(departureTime).toLocaleString()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Arrival Time: {new Date(arrivalTime).toLocaleString()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Price: {price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Terminal: {terminal}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Gate: {gate}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Tickets: total - {tickets.total}, remaining - {tickets.remaining}
                </Typography>
            </CardContent>
            {onShowMore && (
                <CardActions>
                    <Button size="small" onClick={onShowMore}>Show more info</Button>
                </CardActions>
            )}
        </Card>
    );
}
