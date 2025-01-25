'use client'

import { useCallback, useEffect, useState } from 'react'

import { appConfig } from '@/contants/app-config'
import { getRandomInt } from '@/utils/random-index-position'

export function DoomFire() {
  const [fireArray, setFireArray] = useState<number[]>([])
  const [isInDebugMode] = useState(false)
  const [isInPauseMode] = useState(false)

  function initializeFireArray() {
    const fireSize = appConfig.fire.width * appConfig.fire.height

    const auxArray = new Array(fireSize).fill(0)
    setFireArray(auxArray)
  }

  function handleCreateFireSource() {
    const auxFireArray: number[] = [...fireArray]
    const overFlowPixelIndex = appConfig.fire.width * appConfig.fire.height
    for (let col = 0; col <= appConfig.fire.width; col++) {
      const pixelIndex = overFlowPixelIndex - appConfig.fire.width + col
      auxFireArray[pixelIndex] = 36
    }

    setFireArray([...auxFireArray])
  }

  const handleCalculateFirePropagation = useCallback(() => {
    const auxFireArray: number[] = [...fireArray]
    for (let col = 0; col < appConfig.fire.width; col++) {
      for (let row = 0; row < appConfig.fire.height; row++) {
        const pixelIndex = col + appConfig.fire.width * row
  
        const updateResult = handleUpdateFireIntensityPerPixel(pixelIndex)
        if (updateResult) {
          auxFireArray[updateResult.pixelIndex] = updateResult.intensity
        }
      }
    }
  
    setFireArray([...auxFireArray])
  }, [fireArray])

  const handleUpdateFireIntensityPerPixel = useCallback((pixelIndex: number) => {
    const belowPixelIndex = pixelIndex + appConfig.fire.width
  
    if (belowPixelIndex >= appConfig.fire.width * appConfig.fire.height) {
      return
    }
  
    const decay = Math.floor(Math.random() * 3)
    const belowPixelFireIntensity = fireArray[belowPixelIndex]
    const newFireIntensity =
      belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0
  
    const windDirection = getRandomInt(0, 2)
    switch (windDirection) {
      case 0:
        return {
          intensity: newFireIntensity,
          pixelIndex: pixelIndex - decay,
        }
      case 1:
        return {
          intensity: newFireIntensity,
          pixelIndex: pixelIndex,
        }
      case 2:
        return {
          intensity: newFireIntensity,
          pixelIndex: pixelIndex - decay - 1,
        }
    }
  }, [fireArray])

  useEffect(() => {
    initializeFireArray()
    handleCreateFireSource()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      handleCalculateFirePropagation()

      if (isInPauseMode) {
        clearInterval(interval)
      }
    }, 5)

    return () => clearInterval(interval)
  }, [fireArray, isInPauseMode, handleCalculateFirePropagation])

  return (
    <table>
      <tbody>
        {Array.from({ length: appConfig.fire.height }).map((_, row) => {
          return (
            <tr key={row}>
              {Array.from({ length: appConfig.fire.width }).map((_, col) => {
                const pixelIndex = col + appConfig.fire.width * row
                const fireIntensity =
                  fireArray[col + row * appConfig.fire.width]
                const fireColor = appConfig.fire.colors[fireIntensity]

                if (isInDebugMode) {
                  return (
                    <td key={col} className={`relative`}>
                      <div className="absolute top-0.5 right-0.5 text-[4px]">
                        {pixelIndex}
                      </div>
                      {fireIntensity}
                    </td>
                  )
                }

                return (
                  <td
                    key={col}
                    className='pixel'
                    style={{
                      backgroundColor: fireColor,
                    }}
                  ></td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
