import SunCalc from "suncalc";

/**
 * Classifies day / twilight / night at a point in time, purely from
 * coordinates. This deliberately doesn't use timezones at all — two
 * places at the same longitude have the same sun overhead regardless
 * of which country's clock they use, and that's what actually decides
 * whether it looks light or dark outside.
 */
export function sunState(lat, lon, date = new Date()) {
  const { altitude } = SunCalc.getPosition(date, lat, lon);
  const altitudeDeg = (altitude * 180) / Math.PI;

  if (altitudeDeg > 0) return "day";
  if (altitudeDeg > -6) return "twilight"; // civil dawn/dusk
  return "night";
}

/**
 * A rough "solar" clock for a longitude — 15° of longitude is
 * approximately one hour of offset from UTC. This is NOT a real
 * timezone (no DST, no political borders), just close enough to show
 * "roughly what time it feels like there" next to the day/night state.
 */
export function approxLocalTime(lon, date = new Date()) {
  const offsetHours = Math.round(lon / 15);
  const shifted = new Date(date.getTime() + offsetHours * 3600 * 1000);
  return shifted.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  });
}
