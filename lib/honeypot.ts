// Simple honeypot to catch bots
export function validateHoneypot(honeypotValue: any): boolean {
  // Honeypot should be empty (invisible to real users, filled by bots)
  return !honeypotValue || honeypotValue === "";
}
