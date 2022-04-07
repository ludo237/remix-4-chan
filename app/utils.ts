import { useMemo } from "react";

/**
 * Create Mnemonic react classes
 * @param func
 */
export function createMemoClass (func: (props: any) => string) {
  return function useMemoClass (args?: any) {
    const dependencies = typeof args === "object" && args !== null
      ? Object.keys(args)
        .filter((key) => key !== "theme")
        .map((key) => args[key])
      : [];

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useMemo(() => func(args), dependencies);
  };
}

