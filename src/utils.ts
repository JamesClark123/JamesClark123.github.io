import {
  SortingChartDataType,
  Steps,
  SortingStep,
  SortingStepType,
} from "./types"

export function isMobile(): boolean {
  return (
    typeof window !== "undefined" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  )
}

function getRandomNumber(range: number) {
  return Math.max(Math.floor(Math.random() * range), 1)
}

function randomNumberGenerator(range: number, allowRepeats: boolean) {
  const randomNumbers = new Set<number>()
  return () => {
    const newNumber = getRandomNumber(range)
    if (allowRepeats || !randomNumbers.has(newNumber)) {
      randomNumbers.add(newNumber)
      return newNumber
    } else {
      let top = newNumber + 1,
        bottom = newNumber - 1
      while (top <= range || bottom >= 1) {
        if (top <= range && !randomNumbers.has(top)) {
          randomNumbers.add(top)
          return top
        }
        if (bottom >= 1 && !randomNumbers.has(bottom)) {
          randomNumbers.add(bottom)
          return bottom
        }
        top++
        bottom--
      }
    }
    throw new Error("No possible numbers available")
  }
}

/**Takes a size and returns an array with elements between 1-range. If size is greater than range allowRepeats will be set to true */
export function generateRandomIntArray(
  size: number,
  range: number,
  { allowRepeats = false } = {}
): Array<SortingChartDataType> {
  if (size > range) allowRepeats = true
  const generateRandomNumber = randomNumberGenerator(range, allowRepeats)
  const result = new Array<SortingChartDataType>()
  for (let i = 1; i <= size; i++) {
    const value = generateRandomNumber()
    result.push({ value })
  }
  return result
}

function exchange(
  arr: Array<SortingChartDataType>,
  i: number,
  j: number,
  steps: Array<SortingStep>
) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  steps.push({ type: SortingStepType.EXCHANGE, indicies: [i, j] })
}

function less(
  arr: Array<SortingChartDataType>,
  i: number,
  j: number,
  steps: Array<SortingStep>
) {
  steps.push({ type: SortingStepType.COMPARE, indicies: [i, j] })
  return arr[i].value < arr[j].value
}

function finalize(steps: Array<SortingStep>) {
  steps.push(null)
  steps.unshift(null)
  return steps
}

export function selectionSort(data: Array<SortingChartDataType>): Steps {
  let steps = new Array<SortingStep>(),
    sortable = data.slice()
  let n = sortable.length
  for (let i = 0; i < n; i++) {
    let min = i
    for (let j = i + 1; j < n; j++) {
      if (less(sortable, j, min, steps)) min = j
    }
    exchange(sortable, i, min, steps)
  }
  return finalize(steps)
}

export function insertionSort(data: Array<SortingChartDataType>): Steps {
  let steps = new Array<SortingStep>(),
    sortable = data.slice()
  let n = sortable.length
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0 && less(sortable, j, j - 1, steps); j--) {
      exchange(sortable, j, j - 1, steps)
    }
  }
  return finalize(steps)
}

export function shellSort(data: Array<SortingChartDataType>): Steps {
  let steps = new Array<SortingStep>(),
    sortable = data.slice()
  let n = sortable.length,
    h = 1
  while (h < n / 3) h = 3 * h + 1
  while (h >= 1) {
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && less(sortable, j, j - h, steps); j -= h) {
        exchange(sortable, j, j - h, steps)
      }
    }
    h = Math.floor(h / 3)
  }
  return finalize(steps)
}

export function quickSort(data: Array<SortingChartDataType>): Steps {
  let steps = new Array<SortingStep>(),
    sortable = data.slice()

  const partition = (
    arr: Array<SortingChartDataType>,
    lo: number,
    hi: number
  ) => {
    let i = lo,
      j = hi + 1
    while (true) {
      while (less(arr, ++i, lo, steps)) if (i === hi) break
      while (less(arr, lo, --j, steps)) if (j === lo) break
      if (i >= j) break
      exchange(arr, i, j, steps)
    }
    exchange(arr, lo, j, steps)
    return j
  }
  const sort = (arr: Array<SortingChartDataType>, lo: number, hi: number) => {
    if (hi <= lo) return
    const j = partition(arr, lo, hi)
    sort(arr, lo, j - 1)
    sort(arr, j + 1, hi)
  }
  sort(sortable, 0, sortable.length - 1)
  return finalize(steps)
}

export function heapSort(data: Array<SortingChartDataType>): Steps {
  let steps = new Array<SortingStep>(),
    sortable = data.slice()
  let n = sortable.length

  const sink = (k: number) => {
    while (2 * k <= n) {
      let j = 2 * k
      if (j < n && less(sortable, j, j + 1, steps)) j++
      if (j >= n || !less(sortable, k, j, steps)) break
      exchange(sortable, k, j, steps)
      k = j
    }
  }

  for (let k = Math.floor(n / 2); k >= 0; k--) sink(k)
  while (n > 1) {
    exchange(sortable, 0, --n, steps)
    sink(0)
  }
  return finalize(steps)
}

function copyToAux(
  arr: Array<SortingChartDataType>,
  aux: Array<SortingChartDataType>,
  from: number,
  to: number,
  steps: Steps
) {
  aux[to] = arr[from]
  steps.push({
    type: SortingStepType.COPY_TO_AUX,
    auxIndicies: [to],
    indicies: [from],
  })
}

function copyFromAux(
  arr: Array<SortingChartDataType>,
  aux: Array<SortingChartDataType>,
  from: number,
  to: number,
  steps: Steps
) {
  arr[to] = aux[from]
  steps.push({
    type: SortingStepType.COPY_FROM_AUX,
    auxIndicies: [from],
    indicies: [to],
  })
}

function lessAux(
  aux: Array<SortingChartDataType>,
  i: number,
  j: number,
  steps: Steps
) {
  steps.push({
    type: SortingStepType.COMPARE_AUX,
    indicies: [],
    auxIndicies: [i, j],
  })
  return aux[i].value < aux[j].value
}

//bottom up mergesort
export function mergeSort(data: Array<SortingChartDataType>): Steps {
  let steps = new Array<SortingStep>(),
    sortable = data.slice()
  let n = sortable.length
  let aux: Array<SortingChartDataType> = new Array(n)
  steps.push({ type: SortingStepType.MAKE_AUX, indicies: [], auxSize: n })

  const merge = (
    arr: Array<SortingChartDataType>,
    lo: number,
    mid: number,
    hi: number
  ) => {
    let i = lo,
      j = mid + 1

    for (let k = lo; k <= hi; k++) copyToAux(arr, aux, k, k, steps)

    for (let k = lo; k <= hi; k++)
      if (i > mid) copyFromAux(arr, aux, j++, k, steps)
      else if (j > hi) copyFromAux(arr, aux, i++, k, steps)
      else if (lessAux(aux, j, i, steps)) copyFromAux(arr, aux, j++, k, steps)
      else copyFromAux(arr, aux, i++, k, steps)
  }

  for (let len = 1; len < n; len *= 2)
    for (let lo = 0; lo < n - len; lo += len + len)
      merge(sortable, lo, lo + len - 1, Math.min(lo + len + len - 1, n - 1))

  return finalize(steps)
}
