import { useEffect } from 'react'
import Hero from '../components/home/Hero'
import QuickAccess from '../components/home/QuickAccess'
import HomeNumbers from '../components/home/HomeNumbers'
import HomeGobierno from '../components/home/HomeGobierno'
import HomeNews from '../components/home/HomeNews'
import HomeTramites from '../components/home/HomeTramites'
import HomePatrimonio from '../components/home/HomePatrimonio'
import HomeTurismo from '../components/home/HomeTurismo'
import HomeTransparencia from '../components/home/HomeTransparencia'
import HomeContacto from '../components/home/HomeContacto'
import HomeEnlaces from '../components/home/HomeEnlaces'

export default function Home() {
  useEffect(() => {
    document.title = 'Municipalidad de Chos Malal | Capital Histórica y Cultural del Neuquén'
  }, [])

  return (
    <>
      <Hero />
      <QuickAccess />
      <HomeNumbers />
      <HomeGobierno />
      <HomeNews />
      <HomeTramites />
      <HomePatrimonio />
      <HomeTurismo />
      <HomeTransparencia />
      <HomeContacto />
      <HomeEnlaces />
    </>
  )
}
