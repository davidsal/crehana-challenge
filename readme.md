````markdown
# Crehana Challenge

Este proyecto es una aplicación móvil desarrollada con React Native, Expo, NativeWind, y Apollo Client. La aplicación permite a los usuarios explorar una lista de países, aplicar filtros y ver detalles específicos de cada país. Además, se utiliza HLS para la reproducción de videos en streaming.

## Estructura del Proyecto

### 1. `src`

La carpeta `src` contiene todo el código fuente de la aplicación. A continuación, se describen las subcarpetas principales:

- **/components**: Componentes reutilizables que se utilizan en diferentes partes de la aplicación.

  - `LoadingDots`: Animación de puntos de carga.
  - `ScreenContainer`: Contenedor base para las pantallas, con soporte para temas y navegación.
  - `HlsVideoPlayer`: Componente que maneja la reproducción de videos en formato HLS, permitiendo reproducir un flujo de video en vivo utilizando una URL `.m3u8`. Incluye controles de reproducción como play/pause y una barra de progreso (agregados a los nativos del reproductor original).

- **/contexts**: Contextos globales para manejar el estado compartido.

  - `countriesContext.tsx`: Proporciona un contexto para manejar los datos de países en toda la aplicación.

- **/graphql**: Configuración de Apollo Client y consultas/mutaciones GraphQL.

  - `apolloClient.ts`: Configura el cliente Apollo para interactuar con la API GraphQL.
  - `queries.ts`: Contiene la query que obtiene la lista de paises junto a sus detalles como continente, idioma, moneda, etc.

- **/hooks**: Hooks personalizados para manejar lógica reutilizable.

  - `useCountries.ts`: Hook para obtener datos de países desde el contexto.
  - `useColors.ts`: Hook para manejar colores dinámicos basados en el tema.

- **/languages**: Internacionalización (i18n) para soportar múltiples idiomas.

  - `i18n.ts`: Configura i18next para manejar traducciones.
  - `locales/`: Contiene archivos JSON con las traducciones para cada idioma (por ejemplo, `en.json`, `es.json`).

- **/navigation**: Configuración de la navegación de la aplicación.

  - `appNavigationContainer.tsx`: Define el contenedor de navegación utilizando `react-navigation` y un stack navigator.

- **/screens**: Pantallas principales de la aplicación.

  - `countryListScreen/`: Pantalla principal que muestra una lista de países con filtros y búsqueda.
  - `countryDetailsScreen.tsx`: Pantalla que muestra los detalles de un país seleccionado.
  - `loadingScreen.tsx`: Pantalla de carga que se muestra mientras se inicializa la aplicación.
  - `errorScreen.tsx`: Pantalla de error que se muestra cuando no es posible obtener la lista de paises.

- **/theme**: Configuraciones relacionadas con el tema de la aplicación.

  - `colors.ts`: Define los colores utilizados en la aplicación.

- **/utils**: Funciones auxiliares y tipos globales.

  - `helpers.ts`: Funciones utilitarias como `convertToEmoji`.
  - `types.ts`: Define tipos TypeScript utilizados en toda la aplicación, como `RootStackParamList`.

- **/App.tsx**: Archivo principal que carga las fuentes personalizadas (Poppins light, regular y medium), gestiona el estado de preparación de la aplicación y renderiza el contenido con los proveedores ApolloProvider y CountriesProvider, además de configurar la navegación y la barra de estado.

- **/tailwind.config.js**: Archivo principal que se encarga de los overrides del tema base de TailWind.

### 2. Internacionalización (i18n)

La aplicación utiliza **i18next** para manejar múltiples idiomas.

**Configuración:**

- Archivo principal: `i18n.ts`
- Idiomas soportados:
  - `en.json`: Traducciones en inglés.
  - `es.json`: Traducciones en español.

**Uso:**
Para traducir textos en la aplicación, utiliza el hook `useTranslation`:

```tsx
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
```
````

### 3. Tailwind y NativeWind

La aplicación utiliza **NativeWind** (una implementación de **Tailwind CSS** para React Native) para manejar estilos de manera eficiente.

**Configuración:**

- Archivo principal: `tailwind.config.js`
- Clases personalizadas: Se han extendido colores y fuentes en la configuración de Tailwind.

**Uso:**
Para aplicar estilos, utiliza las clases de Tailwind directamente en los componentes:

```tsx
<View className="flex-1 items-center justify-center">
  <Text className="font-poppins text-lg">Hello, World!</Text>
</View>
```

## Cómo ejecutar el proyecto

1. **Instalar dependencias**:
   ```bash
   npm install
   ```
2. **Iniciar el servidor de desarrollo**:
   ```bash
   npm start
   ```
3. **Probar en un dispositivo/emulador**:
   - Escanea el código QR con la app de **Expo Go**.
   - O utiliza un emulador Android/iOS.

## Flujo de la Aplicación

1. **Pantalla de Carga (`LoadingScreen`)**:

   - Se muestra mientras se cargan las fuentes y los datos iniciales.

2. **Lista de Países (`CountryListScreen`)**:

   - Muestra una lista de países con opciones de búsqueda y filtros por continente y moneda.

3. **Detalles del País (`CountryDetailsScreen`)**:
   - Muestra información detallada sobre un país seleccionado.

## Tecnologías utilizadas

- **React Native**: Framework principal para el desarrollo móvil.
- **Expo**: Herramienta para simplificar el desarrollo y la ejecución de la app.
- **NativeWind**: Manejo de estilos con clases de Tailwind CSS.
- **Apollo Client**: Cliente GraphQL para manejar datos remotos.
- **i18next**: Internacionalización para soportar múltiples idiomas.

## Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad:
   ```bash
   git checkout -b funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Envía tus cambios:
   ```bash
   git push origin funcionalidad
   ```
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia **MIT**.

```

Este archivo `README.md` proporciona una guía clara y detallada sobre la estructura del proyecto, la configuración y cómo contribuir, cubriendo todos los aspectos importantes.
```
