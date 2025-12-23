import { useEffect, useState } from "react";

export function useWaitlistCount() {
  const [count, setCount] = useState(1); // Default fallback

  useEffect(() => {
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.totalSignups) {
          setCount(data.data.totalSignups);
        }
      })
      .catch(() => {
        // Keep default on error
      });
  }, []);

  return count;
}
