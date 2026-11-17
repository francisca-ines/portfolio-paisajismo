# Ines & Francisca — Diseño del paisaje · reglas del proyecto

Sitio portfolio de un estudio de paisajismo en Argentina. Quien da las indicaciones puede no ser técnico: estas reglas existen para que el código se mantenga ordenado aunque los pedidos sean vagos o cambien seguido. **Si un pedido choca con estas reglas, explicá el conflicto y proponé una alternativa antes de hacer cualquier cosa.**

## Stack (fijo — no cambiar sin aprobación explícita del dueño del repo)

- **Next.js** (App Router) + **TypeScript** en modo `strict`
- **Tailwind CSS** para estilos. Sin otras librerías de UI salvo aprobación.
- **Zod** para validar el contenido de los proyectos y todo input externo (formulario de contacto)
- Tipografía **Montserrat**, cargada con `next/font/google` (sin CDN externo)
- **pnpm** como gestor de paquetes
- Hosting en **Vercel**, DNS en **Cloudflare**
- **Sin base de datos ni panel de administración**: el contenido vive en el repo (ver "Contenido"). Si más adelante se quiere un panel, se agrega Supabase (Storage + Auth) como en Zonda, previa aprobación.

## Alcance

Incluido:
- **Inicio**: presentación del estudio y proyectos destacados
- **Proyectos**: listado y página de cada proyecto (ver "Modelo de proyecto")
- **Estudio**: quiénes son
- **Servicios**
- **Contacto**: links a email, WhatsApp e Instagram. Un formulario que envíe mails necesita un proveedor de email: no implementarlo sin que se haya elegido.

Fuera de alcance (no implementar sin pedido explícito y confirmado): panel de administración, tienda o pagos, cuentas de usuario, blog, multi-idioma, chat, comentarios.

Si se pide algo fuera de alcance, avisá que lo está y preguntá si se agrega al alcance antes de empezar.

## Arquitectura

Capas livianas, con la misma idea que Zonda: las dependencias apuntan hacia adentro y la UI no conoce de dónde sale el contenido.

```
src/
  domain/          # TypeScript puro: tipos y reglas del contenido (Project, Plant, Sector, Planter…)
  content/         # Los datos: un archivo por proyecto + catálogo de plantas + esquemas Zod
    projects/<slug>/index.ts   # datos del proyecto
    projects/<slug>/*.jpg      # sus imágenes (planos, renders, fotos), importadas desde index.ts
    plants.ts                  # catálogo de plantas (fotos en content/plants/)
    schema.ts                  # esquemas Zod
    index.ts                   # registra los proyectos y valida todo al cargar
  application/     # Lectura del contenido: getProjects, getProjectBySlug, getFeaturedProjects…
  app/             # Next.js: páginas y rutas
  components/      # UI pura (recibe datos por props)
```

| Capa | Puede importar de | No puede importar de |
|---|---|---|
| `domain` | sólo `domain` | todo lo demás (ni Next, ni Zod) |
| `content` | `domain`, Zod | `application`, `app`, `components` |
| `application` | `domain`, `content` | `app`, `components` |
| `app` | `application`, tipos de `domain`, `components` | `content` directamente |
| `components` | tipos de `domain` | `content`, `application` |

- La regla se verifica con lint (`eslint-plugin-boundaries` o dependency-cruiser). Si el lint de capas falla, el cambio no está terminado. Nunca desactivar la regla para que pase.
- Las páginas no arman ni filtran contenido: llaman a una función de `application/` y renderizan.
- Si mañana el contenido pasa a una base o a un CMS, sólo cambian `content/` y `application/`; páginas y componentes quedan igual.

## Modelo de proyecto

Cada proyecto tiene datos generales y una lista ordenada de **bloques**, porque no todas las láminas del estudio tienen la misma estructura (ej: "Balcón / Terraza" se arma por sectores; "Diseño vegetal" por implantación y estaciones).

- **Datos**: `slug`, título, subtítulo, contexto opcional (ej: "Estudio de paisaje · Trabajo práctico 01"), resumen, tipo (`propuesta`, `realizado` o `academico`), ubicación, año, superficie, destacado sí/no, orden, portada.
- **Bloques** (definidos en `domain/project.ts`):
  - `intro`: concepto con criterios numerados y opcionalmente una imagen.
  - `plans`: planos con una o más opciones (ej: "Opción 1 / Sin huerta").
  - `sector`: sector con condición de luz, texto, plano, **paleta vegetal** (ids del catálogo) y **composición por jardinera** (`{ planta, cantidad }`).
  - `plantGroups`: paleta vegetal por grupos numerados del plano (ej: "02–03 Arbustos de acompañamiento"), cuando no se nombran especies.
  - `imageNotes`: imagen con notas al costado (plano de implantación, lecturas estacionales).
  - `gallery`: renders y/o fotos, indicando cuál es cuál.
- Un bloque nuevo se agrega sólo si ninguno de los existentes sirve: se define en `domain/`, su esquema en `content/schema.ts` y su componente en `components/blocks/`.

**Catálogo de plantas** (`content/plants.ts`): cada especie se carga una sola vez (nombre científico, nombre común, descripción corta, foto) y los proyectos la referencian por id. Nunca duplicar los datos de una planta dentro de un proyecto.

## Contenido e imágenes

- Todo el contenido se valida con Zod al cargar (build y tests): si falta un dato obligatorio, una planta referenciada no existe o un slug se repite, el build falla.
- Las imágenes se **importan** desde el `index.ts` del proyecto (`import plano from "./plano.jpg"`): si el archivo no existe, el build falla, y Next calcula solo el tamaño.
- Imágenes siempre con `next/image` y `alt` descriptivo en español. Nada de imágenes sin `alt`.
- Antes de agregar imágenes al repo: reducirlas a un máximo de ~2560 px del lado largo y exportarlas en JPG/WebP de calidad alta. Planos en SVG si existe, si no PNG.
- Nombres de archivo en `kebab-case`, sin espacios ni tildes (ej: `src/content/projects/balcon-terraza/plano-opcion-1.jpg`).
- Textos visibles en español (Argentina). No inventar datos de proyectos: si falta algo, preguntar.

## Diseño

- Estética de las láminas del estudio: fondo blanco roto, mucho espacio en blanco, líneas finas grises, planos en línea; el color lo ponen las fotos.
- Títulos en mayúsculas con espaciado entre letras amplio y peso liviano; subtítulos chicos también espaciados.
- Colores, pesos de fuente y espaciados definidos **una sola vez** como tokens de Tailwind. No usar colores sueltos fuera de esos tokens.
- Mobile first: todo tiene que verse bien en celular.

## Tests

- `domain/`: tests unitarios puros.
- `content/`: un test que valida todo el contenido (esquemas, referencias a plantas, imágenes, slugs únicos, que cada carpeta de proyecto esté registrada).
- `application/`: tests de las funciones de lectura (orden, destacados, proyecto inexistente → 404).

## Convenciones de código

- Server Components por defecto; `"use client"` sólo cuando hace falta interactividad (ej: galería/lightbox).
- Nombres de código y archivos en inglés (`kebab-case` para archivos); textos visibles en español (Argentina).
- Archivos chicos y con una responsabilidad. Si un archivo pasa ~200 líneas, dividirlo.
- **No agregar dependencias** sin justificar por qué no alcanza con lo que ya hay.
- No dejar código comentado, `console.log` ni TODOs sin explicación.
- Accesibilidad básica: `alt`, labels, contraste, navegación con teclado.
- SEO básico: título y descripción por página, imagen para compartir (Open Graph) por proyecto.

## Flujo de trabajo

- Nunca commitear directo a `main`. Una rama por tarea y un PR chico y enfocado. Vercel genera un preview por PR: usarlo para revisar.
- Antes de dar algo por terminado: `pnpm lint` (incluye la regla de capas), `pnpm typecheck`, `pnpm test` y `pnpm build` tienen que pasar. Si algo falla, decirlo, no esconderlo.
- Si el pedido es ambiguo, hacer **una** pregunta concreta en vez de adivinar. Si es chico y hay una opción obvia, elegirla y aclararlo.
- Al terminar, explicar en lenguaje simple qué cambió y cómo probarlo.
