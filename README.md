# 🚀 Landing Page Template - Astro

Una **landing page template** reutilizable construida con [Astro](https://astro.build/), diseñada para ser fácilmente personalizable utilizando archivos JSON. Ideal para desarrolladores que buscan una estructura rápida y flexible para proyectos de presentación, productos o servicios.

---

## ✨ Características

- ⚡ Desarrollada con Astro para rendimiento ultra rápido.
- 🧩 Estructura modular y limpia.
- 📝 Fácil de personalizar mediante archivos en `data/`.
- 🎨 Estilos modernos y responsive.
- 🌐 SEO básico incorporado.

## 🧑‍💻 Tecnologías Utilizadas

- [Astro](https://astro.build/) - Framework para construir sitios web rápidos.
- [Bun](https://bun.sh/) - Gestor de dependencias y ejecutador de scripts.
- [Tailwind CSS](https://tailwindcss.com/) - Framework de diseño para crear interfaces modernas.
- [TypeScript](https://www.typescriptlang.org/) - Para tipado estático y mejorar la calidad del código.
- [JSON](https://www.json.org/json-en.html) - Para configuración dinámica del contenido.

---

## 📁 Estructura del Proyecto

```
└── 📁src
    └── 📁application
        └── 📁use-cases
            └── getBannerBenefits.ts
            └── getBannerTryItNow.ts
            └── getExperiencePayment.ts
            └── getFooterData.ts
            └── getHero.ts
            └── getMenuData.ts
            └── getOurMission.ts
            └── getPlansTable.ts
    └── 📁assets
        └── 📁sponsors
            └── Coinbase.svg
            └── Instacart.svg
            └── Klarna.svg
        └── 📁svg
            └── Arrow-right-left.svg
            └── ArrowUp.svg
            └── chart.svg
            └── Facebook.svg
            └── Landmark.svg
            └── Linkedin.svg
            └── logo.svg
            └── MasterCard.svg
            └── Shield.svg
            └── Spaces.svg
            └── X.svg
    └── 📁components
        └── 📁common
            └── Footer.astro
            └── Header.astro
        └── 📁presentational
            └── BannerTryItNow.astro
            └── BenefitsBanner.astro
            └── ExperiencePayment.astro
            └── Hero.astro
            └── OurMission.astro
            └── PlansTable.astro
            └── WhyUs.astro
    └── 📁data
        └── BannerBenefits.json
        └── BannerTryItNow.json
        └── ExperincePayment.json
        └── Footer.json
        └── Hero.json
        └── Menu.json
        └── OurMission.json
        └── PlansTable.json
    └── 📁domain
        └── BannerBenefits.ts
        └── BannerTryItNow.ts
        └── ExperiencePayment.ts
        └── footer.ts
        └── Hero.ts
        └── menu.ts
        └── OurMission.ts
        └── PlansTable.ts
    └── 📁infrastructure
        └── 📁repositories
            └── BannerBenefitsRepository.ts
            └── BannerTryItNowRepository.ts
            └── ExperiencePayment.ts
            └── footerRepository.ts
            └── HeroRepository.ts
            └── menuRepository.ts
            └── OurMissionRepository.ts
            └── PlansTableRepository.ts
    └── 📁interfaces
        └── 📁containers
            └── LandingContainer.astro
    └── 📁layouts
        └── Layout.astro
    └── 📁pages
        └── index.astro
    └── 📁styles
        └── global.css
```

## ⚙️ Personalización

Todo el contenido principal de la landing page se configura desde los archivos:
```
    └── 📁data
        └── BannerBenefits.json
        └── BannerTryItNow.json
        └── ExperincePayment.json
        └── Footer.json
        └── Hero.json
        └── Menu.json
        └── OurMission.json
        └── PlansTable.json
```

- `BannerBenefits.json`: Configura los beneficios que se muestran en la sección de banner.
- `BannerTryItNow.json`: Configura el texto y enlace del botón en el banner.
- `ExperiencePayment.json`: Configura los detalles de los métodos de pago.
- `Footer.json`: Personaliza el contenido del pie de página (links, información de contacto, etc.).
- `Hero.json`: Modifica el título, subtítulo y otros elementos de la sección principal.
- `Menu.json`: Personaliza el contenido del menú de navegación.
- `OurMission.json`: Agrega o edita la información sobre la misión de tu empresa o proyecto.
- `PlansTable.json`: Define los planes o precios que se mostrarán en la landing.

## 🛠️ Instalación y Desarrollo
```sh
# Clonar el repositorio
git clone https://github.com/KevinRivera1/SimplexPay-Landing-Page-Template

# Ir al directorio del proyecto
cd SimplexPay-Landing-Page-Template

# Instalar dependencias
bun install

# Iniciar el servidor de desarrollo
bun run dev
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un Fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.