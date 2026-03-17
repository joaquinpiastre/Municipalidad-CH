import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PageLoading from '../components/common/PageLoading'

const Home = lazy(() => import('../pages/Home'))
const LaCiudad = lazy(() => import('../pages/LaCiudad'))
const Gobierno = lazy(() => import('../pages/Gobierno'))
const Tramites = lazy(() => import('../pages/Tramites'))
const TramiteDetalle = lazy(() => import('../pages/TramiteDetalle'))
const Novedades = lazy(() => import('../pages/Novedades'))
const NovedadDetalle = lazy(() => import('../pages/NovedadDetalle'))
const Transparencia = lazy(() => import('../pages/Transparencia'))
const CalendarioTributario = lazy(() => import('../pages/CalendarioTributario'))
const Turismo = lazy(() => import('../pages/Turismo'))
const Contacto = lazy(() => import('../pages/Contacto'))
const NotFound = lazy(() => import('../pages/NotFound'))

export default function AppRoutes() {
  return (
    <Layout>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/la-ciudad" element={<LaCiudad />} />
          <Route path="/gobierno" element={<Gobierno />} />
          <Route path="/tramites" element={<Tramites />} />
          <Route path="/tramites/:slug" element={<TramiteDetalle />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/novedades/:slug" element={<NovedadDetalle />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/calendario-tributario" element={<CalendarioTributario />} />
          <Route path="/turismo" element={<Turismo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
