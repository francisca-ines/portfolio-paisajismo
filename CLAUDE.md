# Ines & Francisca — Diseño del paisaje · reglas del proyecto

Sitio portfolio de un estudio de paisajismo en Argentina. Quien da las indicaciones puede no ser técnico: estas reglas existen para que el código se mantenga ordenado aunque los pedidos sean vagos o cambien seguido. **Si un pedido choca con estas reglas, explicá el conflicto y proponé una alternativa antes de hacer cualquier cosa.**

> Estado: por ahora este documento registra decisiones; todavía no hay código. Describe cómo se tiene que construir, no algo ya implementado.

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
    projects/<slug>.ts
    plants.ts
    schema.ts
  application/     # Lectura del contenido: get-projects, get-project-by-slug, get-featured-projects
  app/             # Next.js: páginas y rutas
  components/      # UI pura (recibe datos por props)
public/
  projects/<slug>/ # Imágenes de cada proyecto (planos, renders, fotos)
  plants/          # Fotos del catálogo de plantas
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

Sigue cómo el estudio presenta sus trabajos (láminas de "Propuesta de paisajismo"):

- **Datos**: `slug`, título (ej: "Balcón / Terraza"), subtítulo (ej: "Propuesta de paisajismo"), ubicación, año, superficie, estado (`propuesta` o `realizado`), destacado sí/no, imagen de portada.
- **Planos**: una o más opciones (ej: "Opción 1 / Sin huerta", "Opción 2 / Con huerta"), cada una con su imagen.
- **Sectores**: nombre (ej: "Sector 01 / Lateral izquierdo"), condición de luz (ej: "Sol directo · alta exposición"), descripción, plano del sector y su **paleta vegetal** (referencias al catálogo de plantas).
- **Composición por jardinera**: nombre, medidas y lista de `{ planta, cantidad }`.
- **Imágenes finales**: renders y/o fotos, con indicación de cuál es cuál.

**Catálogo de plantas** (`content/plants.ts`): cada especie se carga una sola vez (nombre científico, nombre común, descripción corta, foto) y los proyectos la referencian por id. Nunca duplicar los datos de una planta dentro de un proyecto.

## Contenido e imágenes

- Todo el contenido se valida con Zod en build y en tests: si falta un dato obligatorio, una planta referenciada no existe o una imagen no está en `public/`, el build falla.
- Imágenes siempre con `next/image` y `alt` descriptivo en español. Nada de imágenes sin `alt`.
- Antes de agregar imágenes al repo: reducirlas a un máximo de ~2560 px del lado largo y exportarlas en JPG/WebP de calidad alta. Planos en SVG si existe, si no PNG.
- Nombres de archivo en `kebab-case`, sin espacios ni tildes (ej: `public/projects/balcon-terraza/plano-opcion-1.png`).
- Textos visibles en español (Argentina). No inventar datos de proyectos: si falta algo, preguntar.

## Diseño

- Estética de las láminas del estudio: fondo blanco roto, mucho espacio en blanco, líneas finas grises, planos en línea; el color lo ponen las fotos.
- Títulos en mayúsculas con espaciado entre letras amplio y peso liviano; subtítulos chicos también espaciados.
- Colores, pesos de fuente y espaciados definidos **una sola vez** como tokens de Tailwind. No usar colores sueltos fuera de esos tokens.
- Mobile first: todo tiene que verse bien en celular.

## Tests

- `domain/`: tests unitarios puros.
- `content/`: un test que valida todo el contenido (esquemas, referencias a plantas, existencia de imágenes, slugs únicos).
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
