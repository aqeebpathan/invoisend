import validator from "validator";

export function sanitizeEmail(email: string): string {
  const trimmed = email.trim().toLowerCase();
  return validator.normalizeEmail(trimmed) || trimmed;
}

export function sanitizeName(name: string): string {
  // Remove HTML tags and special characters
  let sanitized = validator.escape(name.trim());
  // Remove extra whitespace
  sanitized = sanitized.replace(/\s+/g, " ");
  return sanitized;
}

export function sanitizeText(text: string, maxLength: number = 500): string {
  let sanitized = validator.escape(text.trim());
  sanitized = sanitized.replace(/\s+/g, " ");
  return sanitized.substring(0, maxLength);
}

export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;

  return validator.isEmail(email, {
    allow_utf8_local_part: false,
    require_tld: true,
    allow_ip_domain: false,
  });
}

// Detect disposable email domains
const disposableDomains = [
  "tempmail.com",
  "guerrillamail.com",
  "10minutemail.com",
  "mailinator.com",
  "throwaway.email",
  "maildrop.cc",
];

export function isDisposableEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return disposableDomains.some((d) => domain?.includes(d));
}
