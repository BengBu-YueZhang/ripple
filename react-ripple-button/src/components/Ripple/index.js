import React from 'react'
import config from '../../config'
import PropTypes from 'prop-types';
import './index.css'

const xmlns = 'http://www.w3.org/2000/svg'

class Ripple extends React.PureComponent {

  constructor (props) {
    super(props)
    this.rippleRef = React.createRef()
  }

  /**
   * 创建动画
   */
  createRipple = (event) => {
    const { rippleColor } = this.props
    const target = event.currentTarget
    const { top, left, width } = target.getBoundingClientRect()
    const x = event.clientX - left
    const y = event.clientY - top
    const ripple = document.createElementNS(xmlns, 'svg')
    ripple.setAttribute('class', 'ripple')
    // 圆
    const circle = document.createElementNS(xmlns, 'circle')
    circle.setAttribute('cx', x)
    circle.setAttribute('cy', y)
    circle.setAttribute('r', 0)
    circle.setAttribute('fill', rippleColor)
    // 扩散动画
    const expandAnimate = document.createElementNS(xmlns, 'animate')
    expandAnimate.setAttribute('attributeName', 'r')
    expandAnimate.setAttribute('dur', `${config.dur}ms`)
    expandAnimate.setAttribute('fill', 'freeze')
    expandAnimate.setAttribute('begin', 'indefinite')
    expandAnimate.setAttribute('to', width)
    // 渐隐动画
    const fadeAnimate = document.createElementNS(xmlns, 'animate')
    fadeAnimate.setAttribute('attributeName', 'opacity')
    fadeAnimate.setAttribute('dur', `${config.dur}ms`)
    fadeAnimate.setAttribute('fill', 'freeze')
    fadeAnimate.setAttribute('begin', 'indefinite')
    fadeAnimate.setAttribute('to', 0)

    circle.appendChild(expandAnimate)
    circle.appendChild(fadeAnimate)
    ripple.append(circle)
    this.rippleRef.current.appendChild(ripple)

    expandAnimate.beginElement()

    const remove = () => {
      target.removeEventListener('mouseup', remove)
      target.removeEventListener('mouseout', remove)
      fadeAnimate.beginElement()
      setTimeout(() => this.rippleRef.current.removeChild(ripple), config.dur)
    }

    target.addEventListener('mouseout', remove)
    target.addEventListener('mouseup', remove)
  }

  render () {
    return (
      <div className="ripple-group" ref={this.rippleRef}>
      </div>
    )
  }
}

Ripple.propTypes = {
  rippleColor: PropTypes.string
}

Ripple.defaultProps = {
  rippleColor: config.color
}

export default Ripple
