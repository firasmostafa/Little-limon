export function fetchAPI(date) {
  console.log("Fetching available times for:", date);

  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ];
}

export function submitAPI(formData) {
  console.log("Sending booking:", formData);

  if (
    !formData.date ||
    !formData.time ||
    !formData.guests
  ) {
    return false;
  }

  return true;
}