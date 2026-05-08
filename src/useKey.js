import { useEffect } from "react";
export function useKey(key, acrion) {
  useEffect(
    function () {
      function handleKeyDown(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          acrion();
        }
      }

      document.addEventListener("keydown", handleKeyDown);

      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    },
    [acrion, key],
  );
}
