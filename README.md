# Municipalidad de Chos Malal — Portal web institucional

Portal web oficial de la **Municipalidad de Chos Malal**, Capital Histórica y Cultural del Neuquén.

## Stack

- **React** + **Vite**
- **React Router** (navegación y lazy loading de páginas)
- **CSS modular** (archivos `.module.css` por componente/página)
- Sin TypeScript

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build para producción

```bash
npm run build
npm run preview
```

## Estructura del proyecto

- `src/assets` — Imágenes e íconos
- `src/components` — Componentes reutilizables (common, layout, home, etc.)
- `src/constants` — Tema (paleta), datos del sitio (SITE)
- `src/data` — Datos mock (gobierno, trámites, noticias, boletín, calendario tributario, turismo)
- `src/hooks` — Hooks personalizados (preparado para crecer)
- `src/pages` — Páginas de la aplicación
- `src/routes` — Configuración de rutas y lazy loading
- `src/styles` — Estilos globales y por componente
- `src/utils` — Utilidades (preparado para crecer)

## Secciones del sitio

- **Inicio** — Hero, accesos rápidos, números, gobierno, noticias, trámites, patrimonio, turismo, transparencia, contacto
- **La Ciudad** — Presentación, historia, identidad, patrimonio, cómo llegar, datos útiles
- **Gobierno** — Intendente, organigrama, áreas
- **Trámites y Servicios** — Listado con buscador/filtros y detalle por trámite
- **Novedades** — Listado con buscador/filtros y detalle por noticia
- **Transparencia** — Boletín Oficial (por año) y placeholder para normativa
- **Calendario Tributario** — Vencimientos por tipo (patentes, servicio retributivo, tasa de comercio)
- **Turismo** — Sitios de interés y contenido institucional
- **Contacto** — Datos, horarios, formulario validado, placeholder de mapa
- **404** — Página no encontrada

## Próximas etapas (preparado en estructura)

- Integración con API o CMS para noticias, trámites y boletín
- Panel administrador
- Login ciudadano, seguimiento de expedientes, pagos online, turnos, reclamos
- Mapas interactivos y más áreas/trámites

## Datos de contacto (constantes)

- Dirección: Belgrano Nº 98, CP 8353
- Teléfono: (02948) 41-3722
- Email: recaudaciones@chosmalal.gob.ar
- Ventanilla única: ventanillaunicachml@gmail.com
- Oficina Virtual: chosmalal.oficinavirtual.live
- Facebook: facebook.com/CHMLChosMalal
- Horario: lunes a viernes 7:00 a 14:00 hs

## Personalización

- **Logo (Imagen_CH.jpg):** Colocá el archivo `Imagen_CH.jpg` en la carpeta `public/`. Se usa como favicon y como logo en el header y en el Hero de la página de inicio. La ruta está definida en `src/constants/site.js` (`logoImage`).
- **Colores del logo:** La paleta está en `src/styles/global.css` (variables `--color-primary`, `--color-secondary`, `--color-accent`, etc.). Ajustá esos valores para que coincidan exactamente con los colores de tu logo si hace falta.
- **Foto de fondo del Hero:** Por defecto se usa una imagen de paisaje (Unsplash). Para usar una foto propia de Chos Malal, colocá la imagen en `public/hero-chosmalal.jpg` y en `src/styles/home/Hero.module.css` reemplazá la URL de `background-image` por `url("/hero-chosmalal.jpg")`.
"# Municipalidad-CH" 
