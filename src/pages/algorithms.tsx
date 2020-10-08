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
} from "../redux/actions"
import Layout from "../components/layout"
import {
  ChartData,
  AlgorithmData,
  AlgorithmType,
  getAlgorithmName,
  SortClass,
} from "../types"
import FullPage from "../components/full-page"
import Button from "../components/button"
import SideBar from "../components/sidebar"
import CollapsableButton from "../components/collapsable-button"

import "../styles/algorithms.scss"
import { useAlwaysUpdated, useIsMobile } from "../hooks"

const ChartContainer = React.forwardRef(
  (
    { children, className, ...props }: React.ComponentProps<"div">,
    ref: any
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className={classNames("chart-container", className)}
      >
        {children}
      </div>
    )
  }
)

function Charts() {
  const {
    chartsData,
    mapToChartingData,
    currentStep,
  }: AlgorithmData = useSelector(selectAlgorithmsData, _.isEqual)
  const dispatch = useDispatch()
  const isMobile = useIsMobile()

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
      {chartsData.map(chartData => {
        const { currentState, steps } = mapToChartingData[chartData.id]
        if (!currentState || !steps) return
        return (
          <ChartContainer
            key={chartData.id}
            className={chartData.hidden || chartData.deleted ? "hidden" : ""}
            onTransitionEnd={() => removeElement(chartData.id)}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentState}>
                <XAxis
                  dataKey="name"
                  tick={false}
                  tickLine={false}
                  label={
                    getAlgorithmName(chartData.type) +
                    (steps && steps.length && !isMobile
                      ? `: ${steps.length} compares & exchanges`
                      : "")
                  }
                />
                <Bar dataKey="value" isAnimationActive={false}>
                  {currentState.map((_value, index) => {
                    const indicies = steps[currentStep]?.indicies
                    return (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          indicies && indicies.includes(index)
                            ? "#b9a969"
                            : "lightgrey"
                        }
                      />
                    )
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        )
      })}
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
    dispatch(runAlgorithms())
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
        <div className="flx-col jc-fs ai-c algo-container">
          <Controls className="flx-row jc-fs ai-c controls-container" />
          <Charts />
          <SideBar collapsable={isMobile}>
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
        </div>
      </FullPage>
    </Layout>
  )
}

export default Algorithms
