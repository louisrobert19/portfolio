// Importation des types de @react-three/fiber
import { ThreeElements } from '@react-three/fiber';

declare global {
  namespace React {
    namespace JSX {
      // Déclaration pour les éléments JSX de React Three Fiber
      interface IntrinsicElements extends ThreeElements {
        customElement?: any;
      }
    }
  }
}

// Déclaration du module manquant dans Tailwind CSS
declare module 'tailwindcss/lib/util/flattenColorPalette' {
  const flattenColorPalette: (
    colors: Record<string, string | Record<string, string>>
  ) => Record<string, string>;
  export default flattenColorPalette;
}
