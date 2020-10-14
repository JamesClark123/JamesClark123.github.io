import React, { useEffect, useCallback } from "react"
import { BarChart, XAxis, Bar, ResponsiveContainer, Cell } from "recharts"
import { useSelector, useDispatch } from "react-redux"
import _ from "lodash"
import classNames from "classnames"
import { Link } from "gatsby"

import { selectAlgorithmsData } from "../redux/selectors"
import {
  addChartData,
  removeChartData,
  modifyChartData,
  generateRandomData,
  runAlgorithms,
  stepAlgorithm,
  stopAlgorithms,
  contineuAlgorithms,
} from "../redux/actions"
import Layout from "../components/layout"
import {
  ChartData,
  AlgorithmData,
  AlgorithmType,
  getAlgorithmName,
  SortClass,
  SortingChartableData,
  SortingChartDataType,
  SortingStepType,
} from "../types"
import FullPage from "../components/full-page"
import Button from "../components/button"
import SideBar from "../components/sidebar"
import CollapsableButton from "../components/collapsable-button"

import "../styles/algorithms.scss"
import { useAlwaysUpdated, useIsMobile } from "../hooks"

function colorFromType(type?: SortingStepType) {
  switch (type) {
    case SortingStepType.COMPARE:
    case SortingStepType.COMPARE_AUX:
      return "#b9a969"
    case SortingStepType.EXCHANGE:
    case SortingStepType.COPY_FROM_AUX:
    case SortingStepType.COPY_TO_AUX:
      return "green"
    default:
      return "#b9a969"
  }
}

interface BaseSortingChartProps {
  data: Array<SortingChartDataType>
  type?: SortingStepType
  label?: string
  indicies?: Array<number>
}

function BaseSortingChart(props: BaseSortingChartProps) {
  const { data, label, indicies, type } = props
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        {label && (
          <XAxis dataKey="name" tick={false} tickLine={false} label={label} />
        )}
        <Bar dataKey="value" isAnimationActive={false}>
          {data.map((_value, index) => {
            let isIncluded = indicies && indicies.includes(index)
            return (
              <Cell
                key={`cell-${index}`}
                fill={isIncluded ? colorFromType(type) : "lightgrey"}
              />
            )
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

interface SortingChart {
  chartData: ChartData
  removeElement: (id: number) => void
}

function SortingChart(props: SortingChart) {
  const { chartData, removeElement } = props
  const { mapToChartingData, currentStep }: AlgorithmData = useSelector(
    selectAlgorithmsData
  )
  const isMobile = useIsMobile()

  const { currentState, steps } = mapToChartingData[chartData.id]
  const { data, auxData } = currentState as SortingChartableData
  const { indicies, auxIndicies, type } = steps[currentStep] || {}
  if (!currentState || !steps || !data) return null

  return (
    <div
      key={chartData.id}
      className={classNames("chart-container", {
        hidden: chartData.hidden || chartData.deleted,
      })}
      onTransitionEnd={() => removeElement(chartData.id)}
    >
      <BaseSortingChart
        data={data}
        label={
          getAlgorithmName(chartData.type) +
          (steps && steps.length && !isMobile
            ? ` ~ ${steps.length} operations`
            : "")
        }
        indicies={indicies}
        type={type}
      />
      {auxData && (
        <div className="aux-chart-container">
          <BaseSortingChart data={auxData} indicies={auxIndicies} type={type} />
        </div>
      )}
    </div>
  )
}

function Charts() {
  const { chartsData }: AlgorithmData = useSelector(
    selectAlgorithmsData,
    _.isEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    let found
    if ((found = chartsData.findIndex((cD: ChartData) => cD.hidden)) !== -1)
      dispatch(modifyChartData({ id: chartsData[found].id, hidden: false }))
  }, [chartsData])

  const removeElement = useCallback(
    id => {
      const index = chartsData.findIndex(
        (chartData: ChartData) => chartData.id === id
      )
      if (index === -1 || !chartsData[index].deleted) return
      dispatch(removeChartData(chartsData[index].id))
    },
    [chartsData]
  )

  return (
    <div className="flx-row jc-c ai-c charts">
      {chartsData.map(chartData => (
        <SortingChart chartData={chartData} removeElement={removeElement} />
      ))}
    </div>
  )
}

function Controls(props: React.ComponentPropsWithoutRef<"div">) {
  const {
    running,
    currentStep,
    numberOfSteps,
    maxCharts,
    chartsData,
  }: AlgorithmData = useSelector(selectAlgorithmsData, () => false)
  const dispatch = useDispatch()
  const getCurrentValues = useAlwaysUpdated({
    running,
    currentStep,
    numberOfSteps,
  })
  const isMobile = useIsMobile()
  const generateNewData = () => {
    dispatch(generateRandomData())
  }

  const algorithmStepper = () => {
    const { running, currentStep, numberOfSteps } = getCurrentValues()
    if (!running || currentStep >= numberOfSteps) return
    dispatch(stepAlgorithm())
    setTimeout(algorithmStepper, 30)
  }

  const runAlgorithm = () => {
    if (currentStep === 0 || currentStep >= numberOfSteps) {
      dispatch(runAlgorithms())
    } else {
      dispatch(contineuAlgorithms())
    }
    setTimeout(algorithmStepper, 500)
  }

  const stopAlgorithm = () => {
    dispatch(stopAlgorithms())
  }

  const className = classNames("controls-button", { mobile: isMobile })

  return (
    <div {...props}>
      <div className="flx-row jc-c ai-c controls-count">
        <span>
          {chartsData.length}/{maxCharts}
        </span>
      </div>
      <Button
        text="New Data"
        className={className}
        onClick={generateNewData}
        inactive={running}
      />
      <Button
        text={running ? "Stop" : "Start"}
        onClick={running ? stopAlgorithm : runAlgorithm}
        className={className}
      />
    </div>
  )
}

function Algorithms() {
  const isMobile = useIsMobile()
  const dispatch = useDispatch()
  const send = (algorithm: AlgorithmType) => () =>
    dispatch(addChartData(algorithm))

  const colorLegend = classNames(
    classNames("flx-row jc-c ai-c color-legend", {
      mobile: isMobile,
    })
  )

  return (
    <Layout
      showFooter={false}
      navOptions={
        <div className="flx-row">
          <Button>
            <Link to="/">Home</Link>
          </Button>
        </div>
      }
    >
      <FullPage className="flx-col jc-c ai-c" borderBox fixedHeight>
        <div
          className={classNames("flx-row jc-fs ai-c algo-controls-container", {
            mobile: isMobile,
          })}
        >
          <SideBar collapsable={isMobile}>
            <div className="flx-col jc-c ai-c sidebar-title">
              <span>Algorithms</span>
            </div>
            <CollapsableButton buttonHeader="Sorting">
              {Object.keys(SortClass).map(value => {
                if (isNaN(Number(value))) return null
                return (
                  <Button
                    key={value}
                    text={getAlgorithmName(Number(value))}
                    className="collapsable-button"
                    onClick={send(Number(value))}
                  />
                )
              })}
            </CollapsableButton>
          </SideBar>
          <div className="flx-col jc-fs ai-c algo-container">
            <Controls className="flx-row jc-fs ai-c controls-container" />
            <Charts />
            <div className={colorLegend}>
              <div className="flx-row ai-c jc-c">
                <div className="red square" />
                <span>Compares</span>
              </div>
              <div className="flx-row ai-c jc-c">
                <div className="green square" />
                <span>Copies or Exchanges</span>
              </div>
            </div>
          </div>
        </div>
      </FullPage>
    </Layout>
  )
}

export default Algorithms
