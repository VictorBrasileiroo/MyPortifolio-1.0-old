import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { Header } from './components/header/header'
import { Main } from './components/main/mainn'
import { BtnTop } from './components/buttonTop/buttonTop'

createRoot(document.getElementById('root')).render(
  <>
  <Header></Header>
  <Main></Main>
  <BtnTop></BtnTop>
  </>
)
