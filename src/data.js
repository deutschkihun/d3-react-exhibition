import * as d3 from 'd3'

const categories = [
  {
    id: 1,
    name: 'Prerequisite',
  },
  {
    id: 2,
    name: 'SVG',
  },
  {
    id: 3,
    name: 'Chart Basic',
  },
  {
    id: 4,
    name: 'Line Chart',
  },
  {
    id: 5,
    name: 'Bar Chart',
  },
  {
    id: 6,
    name: 'Heat Map',
  },
  {
    id: 7,
    name: 'Interactive Chart',
  },
  {
    id: 8,
    name: 'Data Understanding',
  },
  {
    id: 9,
    name: 'Parsing CSV',
  },
]

const level = [
  {
    id: 0,
    name: 'All',
  },
  {
    id: 1,
    name: 'Newbie',
  },
  {
    id: 2,
    name: 'Beginner',
  },
  {
    id: 3,
    name: 'Intermediate',
  },
  {
    id: 4,
    name: 'Advance',
  },
]

const margin = { top: 10, right: 40, bottom: 30, left: 40 }
const width = 450 - margin.left - margin.right
const height = 400 - margin.top - margin.bottom
const pointer = ['Apple', 'Grape', 'Banana', 'StrawBerry', 'Watermelon']
const band = ['C', 'B', 'B+', 'A', 'A+', 'A++']
const color = d3
  .scaleOrdinal()
  .range(['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'])

export { categories, level, margin, width, height, pointer, band, color }
