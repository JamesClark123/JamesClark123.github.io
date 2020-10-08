import React, { useRef, useEffect } from "react"
import _ from "lodash"

import { isMobile } from "./utils"

export function useIsMobile(): boolean {
  return isMobile()
}

function deepCompareEquals(a: any, b: any) {
  return _.isEqual(a, b)
}

function useDeepCompareMemoize(value: any) {
  const ref = useRef()

  if (!deepCompareEquals(value, ref.current)) ref.current = value

  return ref.current
}

export function useDeepCompareEffect(
  callback: React.EffectCallback,
  dependencies: Array<any>
) {
  useEffect(callback, useDeepCompareMemoize(dependencies))
}

export function useAlwaysUpdated(value: any) {
  const ref = useRef<any>(null)

  ref.current = value

  return () => ref.current
}
