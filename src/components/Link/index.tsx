import React, { ReactNode } from 'react'

interface Props {
  href?: string
  text?: string
  children?: ReactNode
}

const Link = ({ href, text }: Props) => {
  // const Link: FunctionComponent<Props> = ({ href, text }) => {
  return <a href={href}>{text}</a>
}

export default Link
