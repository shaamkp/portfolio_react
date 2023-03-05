import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppRouter from './AppRouter'

export const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/*" element={<AppRouter />} />
        </Routes>
    </div>
  )
}
