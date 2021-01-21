import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import populationData from './populationData'

const Title = () => {
  return (
    <div>
      <h1 className="title">30 Days Of React - Day 5</h1>
      <h2 className="subtitle">Number Generator</h2>
    </div>
    )
}

const NumberGrid = () => {
  const numbers = [...Array(32).keys()]
  return (
    <div className="grid-container">
      {numbers.map((number)=><NumberItem key={number} number={number}/>)}
    </div>
  )
}

function determineColour(number) {
  if (isPrime(number)) return "#dc3545" // red
  else if (number % 2 === 0) return "#28a745" // green
  else return "#fd7e14" // amber
}

function isPrime(number) {
  if ([0,1].includes(number)) return false
  if (number === 2) return true
  for (let i=2; i<Math.ceil(Math.sqrt(number))+1; i++) {
    if (number % i === 0) return false
  }
  return true
}

const NumberItem = ({number}) => {
  const colour = determineColour(number)
  const style = {backgroundColor: colour}
  return <div key={number} className="grid-number" style={style}>{number}</div>
}

const HexItem = ({hexCode}) => {
  const style = {backgroundColor: hexCode}
  return <div key={hexCode} className="grid-hex" style={style}>{hexCode}</div>
}

function randomHex () {
  let hexString = "#"
  for (let i=0; i<6; i++) {
    hexString += Math.floor(Math.random() * 16).toString(16)
  }
  return hexString
}

const HexGrid = () => {
  const numbers = [...Array(32).keys()]
  return (
    <div className="grid-container">
      {numbers.map((number)=><HexItem key={number} hexCode={randomHex()}/>)}
    </div>
  )
}

function commaFormattedNumber(number) {
  return number.toString().split("").reverse().reduce((acc, curr, ind)=>{
    if (ind > 0 && ind % 3 === 0) acc = "," + acc
    return curr + acc
  }, "")
}

const CountryPopulation = ({data: {country, population}, percentFill}) => {
  console.log(percentFill)
  const barStyle = {width: `${percentFill}%`}
  return (
    <div key={country} className="country-data">
      <div>{country.toUpperCase()}</div>
      <div className="population-bar" style={barStyle}/>
      <div>{commaFormattedNumber(population)}</div>
    </div>
  )
}

const PopulationGraph = () => {
  const worldPopulation = populationData[0].population
  return (
    <div className="population-graph">
      {populationData.map((countryData) => {
        let percentFill = (countryData.population / worldPopulation)*100
        return <CountryPopulation key={countryData.country} data={countryData} percentFill={percentFill}/>
      })}
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Title/>
      <NumberGrid/>
      <HexGrid/>
      <PopulationGraph/>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
