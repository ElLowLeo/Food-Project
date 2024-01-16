import React from 'react'
import ReactDOM from 'react-dom/client'
import { Signup } from './pages/signup/index'
import GlobalStyle from './styles/global.ts'
import {ThemeProvider} from 'styled-components'

import theme from './styles/theme.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Signup />
    </ThemeProvider>
  </React.StrictMode>,
)
