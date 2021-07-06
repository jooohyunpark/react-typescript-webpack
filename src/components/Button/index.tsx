import React, { FunctionComponent, ReactNode } from 'react'
import styles from './index.module.scss'

interface Props {
  onClick?: () => void
  children?: ReactNode
}

const Button: FunctionComponent = ({ onClick, children }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
