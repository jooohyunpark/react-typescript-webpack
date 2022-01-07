import React, { FunctionComponent } from 'react'
import '@/styles/main.scss'
import Button from '@/components/Button'
import Link from '@/components/Link'

const App: FunctionComponent = () => {
  return (
    <div>
      <h2> react typescript webpack !</h2>

      <Button
        onClick={() => {
          console.log('ddd')
        }}>
        test
      </Button>

      <Link text="test" />
    </div>
  )
}

export default App
