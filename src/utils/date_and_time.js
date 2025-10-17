export function getFormattedDateTime() {
  const now = new Date();

  // date parts
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  // time parts
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // build your formats
  const formattedDate = `${day}${month}${year}`; // ddmmdddd
  const formattedTime = `${hours}${minutes}`; // hhmm

  return { formattedDate, formattedTime };
}
