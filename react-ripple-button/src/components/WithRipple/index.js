import React from 'react'
import Ripple from '../Ripple'
import './index.css'

export default function withRipple (Component, rippleColor) {
  const { children, className, onMouseDown } = Component.props

  return class extends React.PureComponent {
    constructor (props) {
      super(props)
      this.rippleRef = React.createRef()
    }

    handleMouseDown = (event) => {
      onMouseDown && onMouseDown(event)
      this.rippleRef.current.createRipple(event)
    }

    render () {
      // 克隆原有JSX, 内部添加Ripple
      return React.cloneElement(Component, {
        className: `${className} with-ripple`,
        onMouseDown: this.handleMouseDown,
        children: (
          <React.Fragment>
            {
              children
            }
            <Ripple rippleColor={rippleColor} ref={this.rippleRef}/>
          </React.Fragment>
        )
      })
    }
  } 
}
