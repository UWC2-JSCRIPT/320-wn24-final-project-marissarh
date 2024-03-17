import { iconCode } from '../FetchedData/FetchedData';
import './Home.css';
import PropTypes from 'prop-types';


function Home({title, items}){
    return (
    <div>
        
            <div>
        <div className='hourly-weather'>
        <h2>{title}</h2>
        {items.map((item,index)=>(
            <div key={index}>
        <ul className='weather-cards'>
            <li className='card'>
            <h3 className='time'>{item.title}</h3>
        <div><img src={iconCode(item.icon)} alt="weather-icon"></img></div>
        <h3 className='currentTemp'>{`${item.temp.toFixed()}`}°</h3>
        <p>{item.condition}</p>
       
       
       </li> 
        </ul>
       </div>
       ))}
        </div></div>
        
      
        
        
        </div>
       
  );
        }
        Home.propTypes ={
            title:PropTypes.string.isRequired,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    icon: PropTypes.string.isRequired,
                    temp: PropTypes.number.isRequired,
                    condition: PropTypes.string.isRequired
                }).isRequired
            ).isRequired
        };
export default Home