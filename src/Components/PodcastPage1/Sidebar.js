import React from 'react'
import { css, jsx } from '@emotion/core'
//import logo from './1.png'

const Sidebar = ({ children }) => (
  <div
    className="Sidebar"
    css={css`
      width: 200px;
      height: 100%;
      background: #000000;
      padding: 20px;
    `}
  >
    <img src="./1.png" height={50} />
    {children}
  </div>
)

export default Sidebar