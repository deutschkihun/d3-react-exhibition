const categories = [
    {
        "_id": 1,
        "name": "SVG"
    },
    {
        "_id": 2,
        "name": "Chart Basic"
    },
    {
        "_id": 3,
        "name": "Line Chart"
    },
    {
        "_id": 4,
        "name": "Bar Chart"
    },
    {
        "_id": 5,
        "name": "Heat Map"
    },
    {
        "_id": 6,
        "name": "Interactive Chart"
    }
]

const level = [
    {
        "_id": 0,
        "name": "All",
    },
    {
        "_id": 1,
        "name": "Newbie",
    },
    {
        "_id": 2,
        "name": "Beginner",
    },
    {
        "_id": 3,
        "name": "Intermediate",
    },
    {
        "_id": 4,
        "name": "Advance",
    },
]

const margin = {top: 10, right: 40, bottom: 30, left: 40}
const width = 450 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;
const pointer = ["Apple","Grape","Banana","StrawBerry","Watermelon"]
const band = ["C","B","B+","A","A+","A++"]

export {
    categories,
    level,
    margin,
    width,
    height,
    pointer,
    band
}
