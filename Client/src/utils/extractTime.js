
const extractTime = (dataString) => {
  const date = new Date(dataString);
  let hours = date.getHours();
  const minutes = makeZero(date.getMinutes());

    // Determine AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    hours = hours % 12; // Converts hours to 12-hour format
    hours = hours ? hours : 12; // If hours is 0 (midnight), make it 12
  
    // Format hours with leading zero if needed
    const formattedHours = makeZero(hours);

    return `${formattedHours}:${minutes} ${ampm}`;
};

export default extractTime;

const makeZero = (number) => {
  return number.toString().padStart(2, "0");
};
