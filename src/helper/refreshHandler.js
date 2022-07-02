import ReactDOM from 'react-dom'

export const refreshHandler = (element, ref) => {
  ReactDOM.render(element, ref.current)
}
