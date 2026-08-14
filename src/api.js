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
  console.log("Submitting booking:", formData);

  return true;
}