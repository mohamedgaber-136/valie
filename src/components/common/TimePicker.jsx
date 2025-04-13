import { setItem } from "@/Redux/cart";
import {  useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { useDispatch, useSelector } from "react-redux";
export default function TimePickerComponent() {
  const [time, setTime] = useState(new Date());
  const dispatch = useDispatch();
  const { item } = useSelector((selector) => selector.cart);

  const handleTimeChange = (newTime) => {
    setTime(newTime);
    dispatch(
      setItem({
        time: newTime.toString(), // Save the new time in string format
      })
    );
  };

  // Function to parse item.time into a valid Date object
  const getItemTime = () => {
    if (item?.time) {
      const timeString = item.time.trim();

      // Try to parse the item.time (e.g., '09:20:58 PM') into a valid Date object
      const [hours, minutes, seconds] = timeString.split(':');
      const [sec, ampm] = seconds.split(' ');

      let hour = parseInt(hours);
      if (ampm === 'PM' && hour !== 12) {
        hour += 12; // Convert PM to 24-hour format
      } else if (ampm === 'AM' && hour === 12) {
        hour = 0; // Convert 12 AM to 00:00
      }

      // Create a new Date object with a valid time
      const formattedDate = new Date();
      formattedDate.setHours(hour, parseInt(minutes), parseInt(sec), 0);
      
      return formattedDate;
    }
    return time; // Default to current time if item.time is unavailable
  };

 

  return (
    <div>
      <DatePicker
        disableDayPicker
        value={getItemTime()}
        format="hh:mm:ss A"
        plugins={[<TimePicker key={1} />]}
        onChange={handleTimeChange}
      />
    </div>
  );
}
