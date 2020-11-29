const DateDiff = {
  inDays: (d1, d2) => {
    const t2 = d2.getTime();
    const t1 = d1.getTime();

    return parseInt((t2 - t1) / (24 * 3600 * 1000));
  },

  inWeeks: (d1, d2) => {
    const t2 = d2.getTime();
    const t1 = d1.getTime();

    return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
  },

  inMonths: (d1, d2) => {
    const d1Y = d1.getFullYear();
    const d2Y = d2.getFullYear();
    const d1M = d1.getMonth();
    const d2M = d2.getMonth();

    return d2M + 12 * d2Y - (d1M + 12 * d1Y);
  },

  inYears: (d1, d2) => {
    return d2.getFullYear() - d1.getFullYear();
  },
};

const getCalculatedYears = (months) => {
  return Math.floor(months / 12);
};

const getPluralYears = (years) => {
  return years > 1 ? 'years' : 'year';
};

const getCalculatedMonths = (years, months) => {
  return Math.abs(years * 12 - months);
};

const getPluralMonths = (months) => {
  return months > 1 ? 'months' : 'month';
};

const calculateDateString = (months) => {
  let calculatedYears = getCalculatedYears(months);
  const yearString =
    calculatedYears === 0
      ? ''
      : `${calculatedYears} ${getPluralYears(calculatedYears)},`;

  let calculatedMonths = getCalculatedMonths(calculatedYears, months);
  const monthString = `${calculatedMonths} ${getPluralMonths(
    calculatedMonths
  )}`;

  const dateString = `${yearString} ${monthString}`;

  return dateString;
};

export const getDateString = (initialStartDate, initialEndDate) => {
  const endDate = initialEndDate.toLowerCase();

  let d1;
  let d2;

  d1 = new Date(initialStartDate);

  if (endDate === 'present') {
    d2 = new Date(Date.now());
  } else {
    d2 = new Date(endDate);
  }

  const dateString = calculateDateString(DateDiff.inMonths(d1, d2));
  return dateString;
};
