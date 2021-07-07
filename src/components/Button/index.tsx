import React, { ReactNode, FunctionComponent } from 'react'
import styles from './index.module.scss'

interface Props {
  onClick?: () => void
  children?: ReactNode
}

const Button: FunctionComponent<Props> = ({ onClick, children }) => {
  // const Button = ({ onClick, children }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
