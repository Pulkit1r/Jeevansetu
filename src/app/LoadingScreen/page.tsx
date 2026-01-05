"use client"
import React from 'react'
import { LoadingScreen } from '@/Page/index'
import { ScrollToTop } from '@/components/index'
export default function  Page():React.ReactNode{
  return <>
  <ScrollToTop />
  <LoadingScreen /></>
}