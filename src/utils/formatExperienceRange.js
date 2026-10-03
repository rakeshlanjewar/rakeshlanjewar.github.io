const formatMonthYear = (value) =>
  new Date(`${value}-01T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

export const formatExperienceRange = (start, end, endLabel) => {
  const displayEnd = endLabel ?? end;
  if (end === "Present") {
    return `${formatMonthYear(start)} — ${displayEnd}`;
  }

  return `${formatMonthYear(start)} — ${formatMonthYear(end)}`;
};
