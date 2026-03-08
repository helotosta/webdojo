export function getTodayDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // months are zero-based
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}

// Example usage:
console.log(getTodayDate()); // e.g., 17/09/2025