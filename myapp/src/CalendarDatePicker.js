import  {useCallback,useState} from 'react';
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/react-calendar.css';



 
const CalendarFunction=()=>{
 const [dateSelect,setDateSelect]=useState(false);
  const handleDateChange=useCallback(
    (dateSelect)=>{
        setDateSelect(dateSelect);
    },
    [setDateSelect],
  );

return(
        <>
        <div className='set-container'>
            <h1>Calendar </h1>
            <Calendar value={dateSelect} onChange={handleDateChange} />
        </div>
        </>
    );
};
 
export default CalendarFunction;