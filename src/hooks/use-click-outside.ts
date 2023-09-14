import React, { useEffect } from "react";

export const useClickOutside = ({
  ref,
  callback,
  active,
}: {
  ref: React.RefObject<HTMLElement>;
  callback: (event: MouseEvent) => void;
  active: boolean;
}) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    active && document.addEventListener("click", handleClickOutside, { passive: true });
    return () => document.removeEventListener("click", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
};
