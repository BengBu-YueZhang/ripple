import React from 'react'
import config from '../../config'
import PropTypes from 'prop-types';

const xmlns = 'http://www.w3.org/2000/svg'

class Ripple extends React.PureComponent {

  constructor (props) {
    super(props)
    this.rippleRef = React.createRef()
    this.ripple = null
    this.expandAnimate = null
    this.fadeAnimate = null
  }

  /**
   * 创建动画
   */
  createRipple = (event) => {
    const { x, y, r, color = config.color } = this.props
    this.ripple = document.createElementNS(xmlns, 'svg')
    const circle = document.createElementNS(xmlns, 'circle')
    circle.setAttribute('cx', x)
    circle.setAttribute('cy', y)
    circle.setAttribute('r', 0)
    circle.setAttribute('fill', color)
    this.expandAnimate = document.createElementNS(xmlns, 'animate')
    expandAnimate.setAttribute('attributeName', 'r')
    expandAnimate.setAttribute('dur', `${config.dur}ms`)
    expandAnimate.setAttribute('fill', 'freeze')
    expandAnimate.setAttribute('begin', 'indefinite')
    expandAnimate.setAttribute('to', r)
    this.fadeAnimate = document.createElementNS(xmlns, 'animate')
    fadeAnimate.setAttribute('attributeName', 'opacity')
    fadeAnimate.setAttribute('dur', `${config.dur}ms`)
    fadeAnimate.setAttribute('fill', 'freeze')
    fadeAnimate.setAttribute('begin', 'indefinite')
    fadeAnimate.setAttribute('to', 0)
    circle.appendChild(expandAnimate)
    circle.appendChild(fadeAnimate)
    this.ripple.append(circle)
    this.rippleRef.current.appendChild(this.ripple)
    this.beginExpand()
    const remove = () => {
      this.rippleRef.current.removeEventListener('mouseup', remove)
      this.rippleRef.current.removeEventListener('mouseout', remove)
      this.beginFade()
      setTimeout(() => this.removeSvg(), config.dur)
    }
    this.rippleRef.current.addEventListener('mouseout', remove)
    this.rippleRef.current.addEventListener('mouseup', remove)
  }

  /**
   * 开始执行扩散动画
   */
  beginExpand = () => {
    this.expandAnimate.beginElement()
  }

  /**
   * 开始执行渐隐动画
   */
  beginFade = () => {
    this.fadeAnimate.beginElement()
  }

  /**
   * 删除svg
   */
  removeSvg = () => {
    this.rippleRef.current.removeChild(this.ripple)
  }

  render () {
    return (
      <div className="ripple-wrapper" ref={this.rippleRef}>
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
