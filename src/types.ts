import { Action } from "redux"

export enum Icons {
  CPP,
  Javascript,
  TypeScript,
  Express,
  Node,
  Axios,
  Jest,
  React,
  CSS,
  SASS,
  MobX,
  OpenGL,
  StyledComponents,
  Github,
  ExternalLink,
  Gatsby,
  Ocaml,
  MaterialUI,
  MongoDB,
  LinkedIn,
  Mail,
  Logo,
  Hamburger,
  Redux,
}

interface Bullets {
  description: string
}

export interface Experience {
  positionTitle: string
  company: string
  timeAt: string
  info: Array<Bullets>
  techUsed?: Array<Icons>
}

interface Link {
  icon: Icons
  link: string
}

export interface Project {
  title: string
  github: Link
  externalLink?: Link
  description: string
  tech: Array<Icons>
}

export enum Actions {
  ADD_CHART_DATA,
  REMOVE_CHART_DATA,
  MODIFY_CHART_DATA,
  CREATE_NEW_CHARTABLE_DATA,
  RUN_ALGORITHMS,
  STEP_ALGORITHM,
  STOP_ALGORITHMS,
  CONTINUE_ALGORITHMS,
}

export type Payloads = {
  [Actions.ADD_CHART_DATA]: ChartData
  [Actions.REMOVE_CHART_DATA]: ChartData["id"]
  [Actions.MODIFY_CHART_DATA]: Pick<ChartData, "id"> & Partial<ChartData>
  [Actions.CREATE_NEW_CHARTABLE_DATA]: null
  [Actions.RUN_ALGORITHMS]: null
  [Actions.STEP_ALGORITHM]: null
  [Actions.STOP_ALGORITHMS]: null
  [Actions.CONTINUE_ALGORITHMS]: null
}

export type PayloadType = Payloads[keyof Payloads]

export interface Payload<T extends PayloadType> {
  payload: T
}

type RA = {
  [A in Actions]: Action<A> & Payload<Payloads[A]>
}

export type ReduxAction = RA[keyof RA]

export interface ChartData {
  type: AlgorithmType
  id: number
  hidden: boolean
  deleted: boolean
}

export type ChartsData = Array<ChartData>

export interface SortingChartDataType {
  value: number
}

export interface SortingChartableData {
  data: Array<SortingChartDataType>
  auxData?: Array<SortingChartDataType>
}

export type ChartableData = SortingChartableData | null

export enum SortingStepType {
  COMPARE,
  EXCHANGE,
  COPY_TO_AUX,
  COPY_FROM_AUX,
  MAKE_AUX,
  COMPARE_AUX,
}

export type SortingStep = {
  type: SortingStepType
  indicies: Array<number>
  auxSize?: number
  auxIndicies?: Array<number>
} | null

export type Steps = Array<SortingStep>

export interface ChartingData {
  currentState: ChartableData
  steps: Steps
}

export type MapToChartingDataType = { [key: number]: ChartingData }

export interface AlgorithmData {
  originalData: ChartableData
  numberOfSteps: number
  currentStep: number
  running: boolean
  currentClass: AlgorithmClass | null
  mapToChartingData: MapToChartingDataType // chart id to charting data
  chartsData: ChartsData
  maxChartSize: number
  maxCharts: number
}

export interface State {
  algorithms: AlgorithmData
}

export enum AlgorithmClass {
  SEARCH,
  SORT,
}

export enum SortClass {
  SELECTION_SORT,
  INSERTION_SORT,
  SHELL_SORT,
  QUICK_SORT,
  HEAP_SORT,
  MERGE_SORT,
}

export enum SearchClass {
  SEQUENTIAL_SEARCH = SortClass["MERGE_SORT"] + 1,
}

export const AlgorithmType = { ...SortClass, ...SearchClass }

export type AlgorithmType = SortClass | SearchClass

export function getAlgorithmClass(algo: AlgorithmType) {
  switch (algo) {
    case AlgorithmType.SELECTION_SORT:
    case AlgorithmType.INSERTION_SORT:
    case AlgorithmType.SHELL_SORT:
    case AlgorithmType.QUICK_SORT:
    case AlgorithmType.HEAP_SORT:
    case AlgorithmType.MERGE_SORT:
      return AlgorithmClass.SORT
    default:
      return AlgorithmClass.SEARCH
  }
}

export function getAlgorithmName(algo: AlgorithmType) {
  switch (algo) {
    case AlgorithmType.SELECTION_SORT:
      return "Selection Sort"
    case AlgorithmType.INSERTION_SORT:
      return "Insertion Sort"
    case AlgorithmType.SHELL_SORT:
      return "Shell Sort"
    case AlgorithmType.SEQUENTIAL_SEARCH:
      return "Sequential Search"
    case AlgorithmType.QUICK_SORT:
      return "Quick Sort"
    case AlgorithmType.HEAP_SORT:
      return "Heap Sort"
    case AlgorithmType.MERGE_SORT:
      return "Merge Sort"
    default:
      return ""
  }
}
