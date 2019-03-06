import config from '../config'

const xmlns = 'http://www.w3.org/2000/svg'

/**
 * 创建svg水波纹
 * @param {Number} x 水波纹x坐标
 * @param {Number} y 水波纹y坐标
 * @param {Number} r 水波纹半径
 * @param {String} color 水波纹的填充色
 */
export function createRipple (x, y, r, color = config.color) {
  // svg标签
  const ripple = document.createElementNS(xmlns, 'svg')
  ripple.setAttribute('class', 'ripple')
  // circle标签
  const circle = document.createElementNS(xmlns, 'circle')
  circle.setAttribute('cx', x)
  circle.setAttribute('cy', y)
  circle.setAttribute('r', 0)
  circle.setAttribute('fill', color)
  // 水波纹扩散的动画标签
  const expandAnimate = document.createElementNS(xmlns, 'animate')
  expandAnimate.setAttribute('attributeName', 'r')
  expandAnimate.setAttribute('dur', `${config.dur}ms`)
  expandAnimate.setAttribute('fill', 'freeze')
  expandAnimate.setAttribute('begin', 'indefinite')
  expandAnimate.setAttribute('to', r)
  // 水波纹渐隐的动画标签
  const fadeAnimate = document.createElementNS(xmlns, 'animate')
  fadeAnimate.setAttribute('attributeName', 'opacity')
  fadeAnimate.setAttribute('dur', `${config.dur}ms`)
  fadeAnimate.setAttribute('fill', 'freeze')
  fadeAnimate.setAttribute('begin', 'indefinite')
  fadeAnimate.setAttribute('to', 0)
  circle.appendChild(expandAnimate)
  circle.appendChild(fadeAnimate)
  ripple.append(circle)
  return {
    ripple,
    expandAnimate,
    fadeAnimate
  }
}