import React, { useState } from 'react'
import styles from './styles.module.css'
const Item = ({
  item,
  onClick,
  bg = '#ffb400',
  textColor = '#fff',
  width = '350px',
  height = '230px'
}) => {
  const [className, setClassName] = useState('')
  let classNameMouse = ''
  const onMouseOver = (e) => {
    const trucX = e.nativeEvent.layerX
    const trucY = e.nativeEvent.layerY
    if (!className.includes('In')) {
      // eslint-disable-next-line no-unused-vars
      let oldMouse = ''
      if (trucX > 0 && trucX < 50) {
        classNameMouse = 'leftToRightIn'
        oldMouse = 'leftToRightIn'
      } else if (
        trucX > Number.parseInt(width) - 50 &&
        trucX < Number.parseInt(width)
      ) {
        classNameMouse = 'rightToLeftIn'
        oldMouse = 'rightToLeftIn'
      } else if (trucY < 50 && trucY > 0) {
        classNameMouse = 'topToBottomIn'
        oldMouse = 'topToBottomIn'
      } else if (
        trucY > Number.parseInt(height) - 50 &&
        trucY < Number.parseInt(height)
      ) {
        classNameMouse = 'bottomToTopIn'
        oldMouse = 'bottomToTopIn'
      }
      setClassName(classNameMouse)
    }
  }
  const onHoverOut = (e) => {
    const trucX = e.nativeEvent.layerX
    const trucY = e.nativeEvent.layerY
    if (className.includes('In')) {
      if (trucX <= 4) {
        setClassName('leftToRightOut')
      } else if (trucX >= Number.parseInt(width) - 4) {
        setClassName('rightToLeftOut')
      } else if (trucY <= 4) {
        setClassName('topToBottomOut')
      } else if (trucY >= Number.parseInt(height) - 15) {
        setClassName('bottomToTopOut')
      }
    }
  }
  const openPreview = function (e) {
    setClassName('bottomToTopOut')
    onClick(item)
  }
  return (
    <div
      // eslint-disable-next-line react/jsx-no-bind
      onClick={openPreview}
      onMouseOut={onHoverOut}
      className={`${styles[item]}  ${styles[className]}`}
      onMouseMove={onMouseOver}
      style={{ backgroundImage: `url(${item.img})`, width, height }}
    >
      <div
        className={[styles.title, styles['flex-center']]}
        style={{ backgroundColor: bg, color: textColor }}
      >
        {item.title}
      </div>
    </div>
  )
}
const FollowMouseImages = (props) => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.content}>
        <div className={[styles.items, styles['flex-center']]}>
          {props.data.map((item, index) => (
            <Item item={item} key={index} {...props} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default FollowMouseImages
