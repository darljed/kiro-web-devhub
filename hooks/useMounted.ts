"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Returns true after the component has mounted on the client.
 * Uses useSyncExternalStore to safely detect client-side rendering
 * without triggering lint warnings about setState in effects.
 */
export function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // client snapshot: always true
    () => false // server snapshot: always false
  );
}
