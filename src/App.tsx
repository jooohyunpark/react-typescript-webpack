import React, { FunctionComponent } from 'react'
import '@/styles/main.scss'
import Button from '@/components/Button'

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
    </div>
  )
}

export default App
