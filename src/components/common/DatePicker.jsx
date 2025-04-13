import { setItem } from "@/Redux/cart";
import {  useState } from "react";
import DatePicker from "react-multi-date-picker";
import { useDispatch, useSelector } from "react-redux";

export default function DatePickerComponent() {
  const [value, setValue] = useState(new Date());
  const dispatch = useDispatch();
  const { item } = useSelector((selector) => selector.cart);
  const handleDateChange = (newValue) => {
    setValue(newValue.toString());
    dispatch(
      setItem({
        date: newValue.toString(), // Add the new time
      })
    );
  };

  // Get today's date to compare
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Ensure only the date part is considered, not the time
  return (
    <div>
      <DatePicker
        format="MMMM DD YYYY"
        value={item?.date || value}
        onChange={handleDateChange}
        minDate={today} // Prevent selecting dates before today
      />
    </div>
  );
}
