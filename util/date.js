export const getFormattedDate = (date) => {
  return date?.toLocaleDateString();
};

export const getDate7DaysAgo = () => {
  const today = Date.now();
  const milliseconds7Day = 7 * 24 * 60 * 60 * 1000;
  return new Date(today - milliseconds7Day);
};

/**
 *
 * @param {Date} dateToCheck
 * @param {Date} minDate
 * @param {Date} [maxDate=Date.now()] - Date.now() will be used by default
 * @returns
 */
export const isDateBetween = (dateToCheck, minDate, maxDate) => {
  if (
    dateToCheck.getMilliseconds() <= (maxDate ?? Date.now()) &&
    dateToCheck > minDate
  ) {
    return true;
  }
  return false;
};
