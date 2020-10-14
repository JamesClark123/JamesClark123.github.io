import React, { useRef, useEffect, useState } from "react"
import _ from "lodash"

import { isMobile } from "./utils"

export function useIsMobile(): boolean {
  const [mobile, setMobile] = useState(false)
  const getCurrentMobile = useAlwaysUpdated(mobile)
  const check = () => {
    if (getCurrentMobile() !== isMobile()) setMobile(isMobile())
  }
  useEffect(() => {
    check()
    window.addEventListener("resize", check)
  }, [])
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
