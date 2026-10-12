import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function WeatherInfo({info}){

let sunnyImg ='https://images.unsplash.com/photo-1604949210966-9440c324823f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'

let coldImg = 'https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'

let rainImg = 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  
    return <div className='info'>
       
       <div className='card'>
         <Card sx={{ maxWidth: 400 }}>
    
        <CardMedia
          component="img"
          height="200"
         
          image={info.humidity > 80 ? rainImg : info.temp>25 ?sunnyImg:coldImg}
          alt="green iguana"
          
        />
    
          <Typography gutterBottom variant="h5" component="div">
           <h2><b>{info.city}</b></h2>
          </Typography>
          <Typography variant="body2" component="div" sx={{ color: 'text.secondary' }}>
           <p>Tempreture: {info.temp}</p>
           <p>Feel like: {info.feels_like}</p>
           <p>Humidity: {info.humidity}</p>
           <p>Minimum Tempreture: {info.temp_min}</p>
           <p>Maximum Tempreture: {info.temp_max}</p>
          </Typography>
      
      
    </Card>
    <br />
    </div>

    </div>
}