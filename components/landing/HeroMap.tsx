'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

/**
 * El territorio publicándose: los puntos del destino entran uno a uno sobre el
 * mapa y la ruta se traza entre ellos. Es una demostración, no un widget —
 * el mapa no se arrastra ni hace zoom.
 */

const CENTER: [number, number] = [-41.3192, -72.9852]

// Puntos de interés de Puerto Varas. El orden es el de entrada en pantalla.
const POINTS: [number, number][] = [
  [-41.3187, -72.9857], // Plaza de Armas
  [-41.3175, -72.9848], // Iglesia del Sagrado Corazón
  [-41.3196, -72.9832], // Del Salvador
  [-41.3162, -72.982], // Costanera
  [-41.3151, -72.9805], // Muelle
  [-41.321, -72.984], // Mercado
  [-41.3202, -72.9871], // Casa Kuschel
  [-41.3225, -72.988], // Parque Philippi
  [-41.317, -72.9895], // Mirador
  [-41.323, -72.9855], // Estación
]

// La ruta une el borde del lago: subconjunto ordenado, no todos los puntos.
const ROUTE: [number, number][] = [
  [-41.3225, -72.988],
  [-41.3202, -72.9871],
  [-41.3187, -72.9857],
  [-41.3175, -72.9848],
  [-41.3162, -72.982],
  [-41.3151, -72.9805],
]

const STAGGER_MS = 90

const pinIcon = L.divIcon({
  html: '<span class="rt-pin"></span>',
  className: 'rt-pin-wrap',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
})

export default function HeroMap() {
  const [shown, setShown] = useState(0)
  const [routeVisible, setRouteVisible] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setShown(POINTS.length)
      setRouteVisible(true)
      return
    }

    const timers = POINTS.map((_, i) =>
      setTimeout(() => setShown(n => Math.max(n, i + 1)), 380 + i * STAGGER_MS)
    )
    const routeTimer = setTimeout(() => setRouteVisible(true), 380 + POINTS.length * STAGGER_MS)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(routeTimer)
    }
  }, [])

  return (
    <MapContainer
      center={CENTER}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
      zoomControl={false}
      attributionControl={false}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      keyboard={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

      {routeVisible && (
        <Polyline
          positions={ROUTE}
          pathOptions={{
            // Hex literal: Leaflet lo escribe como atributo SVG, donde var() no resuelve
            color: '#c41230',
            weight: 2.5,
            opacity: 0.85,
            dashArray: '1 7',
            lineCap: 'round',
          }}
          className="rt-route"
        />
      )}

      {POINTS.slice(0, shown).map((pos, i) => (
        <Marker key={i} position={pos} icon={pinIcon} interactive={false} />
      ))}
    </MapContainer>
  )
}
