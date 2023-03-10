import React from 'react'
import { css, jsx } from '@emotion/core'

const Topbar = ({ children }) => (
  <div
    className="Topbar"
    css={css`
      position: absolute;
      top: 0;
      height: 50px;
      background: #070707;
      left: 200px;
      width: calc(100% - 200px);
      padding: 20px;
    `}
  >
    {children}
  </div>
)

export default Topbar