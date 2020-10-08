import {
  SortingChartableData,
  SortingChartDataType,
  Steps,
  SortingStep,
  SortingStepType,
} from "./types"

export function isMobile(): boolean {
  return (
    navigator &&
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
): SortingChartableData {
  if (size > range) allowRepeats = true
  const generateRandomNumber = randomNumberGenerator(range, allowRepeats)
  const result = new Array<SortingChartDataType>()
  for (let i = 1; i <= size; i++) {
    const value = generateRandomNumber()
    result.push({ value })
  }
  return result
}

function exchange(arr: Array<SortingChartDataType>, i: number, j: number) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function less(a: SortingChartDataType, b: SortingChartDataType) {
  return a.value < b.value
}

export function selectionSort(data: SortingChartableData): Steps {
  let steps = new Array<SortingStep>(),
    sortable = data.slice()
  let n = sortable.length
  for (let i = 0; i < n; i++) {
    let min = i
    for (let j = i + 1; j < n; j++) {
      steps.push({ type: SortingStepType.COMPARE, indicies: [min, j] })
      if (less(sortable[j], sortable[min])) min = j
    }
    steps.push({ type: SortingStepType.EXCHANGE, indicies: [i, min] })
    exchange(sortable, i, min)
  }
  steps.push(null)
  steps.unshift(null)
  return steps
}

export function insertionSort(data: SortingChartableData): Steps {
  let steps = new Array<SortingStep>(),
    sortable = data.slice()
  let n = sortable.length
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0 && less(sortable[j], sortable[j - 1]); j--) {
      steps.push({ type: SortingStepType.COMPARE, indicies: [j - 1, j] })
      steps.push({ type: SortingStepType.EXCHANGE, indicies: [j - 1, j] })
      exchange(sortable, j, j - 1)
    }
  }
  steps.push(null)
  steps.unshift(null)
  return steps
}

export function shellSort(data: SortingChartableData): Steps {
  let steps = new Array<SortingStep>(),
    sortable = data.slice()
  let n = sortable.length,
    h = 1
  while (h < n / 3) h = 3 * h + 1
  while (h >= 1) {
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && less(sortable[j], sortable[j - h]); j -= h) {
        steps.push({ type: SortingStepType.COMPARE, indicies: [j, j - h] })
        steps.push({ type: SortingStepType.EXCHANGE, indicies: [j, j - h] })
        exchange(sortable, j, j - h)
      }
    }
    h = Math.floor(h / 3)
  }
  steps.push(null)
  steps.unshift(null)
  return steps
}

export function quickSort(data: SortingChartableData): Steps {
  let steps = new Array<SortingStep>(),
    sortable = data.slice()

  const partition = (
    arr: Array<SortingChartDataType>,
    lo: number,
    hi: number
  ) => {
    let i = lo,
      j = hi + 1,
      v = arr[lo]
    while (true) {
      while (less(arr[++i], v)) {
        steps.push({ type: SortingStepType.COMPARE, indicies: [i, lo] })
        if (i === hi) break
      }
      while (less(v, arr[--j])) {
        steps.push({ type: SortingStepType.COMPARE, indicies: [j, lo] })
        if (j === lo) break
      }
      if (i >= j) break
      steps.push({ type: SortingStepType.EXCHANGE, indicies: [i, j] })
      exchange(arr, i, j)
    }
    steps.push({ type: SortingStepType.EXCHANGE, indicies: [lo, j] })
    exchange(arr, lo, j)
    return j
  }
  const sort = (arr: Array<SortingChartDataType>, lo: number, hi: number) => {
    if (hi <= lo) return
    const j = partition(arr, lo, hi)
    sort(arr, lo, j - 1)
    sort(arr, j + 1, hi)
  }
  sort(sortable, 0, sortable.length - 1)
  steps.push(null)
  steps.unshift(null)
  return steps
}
