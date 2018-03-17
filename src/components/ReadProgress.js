import React from "react";

export default class ReadProgress extends React.Component {

  constructor () {
    super()
    this.state = {
      readProgress: 0,
      max: 0
    }
  }

  onScroll () {
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    this.setState({readProgress: scrollTop})
  }

  componentDidMount () {
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight
    this.setState({
      max: docHeight - windowHeight
    })
    document.addEventListener('scroll', this.onScroll.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.onScroll.bind(this))
  }

  render () {
    const {readProgress, max} = this.state
    return (<progress value={readProgress} max={max}/>)
  }
}
