import { Skeleton as PureSkeleton } from "primereact/skeleton";
import type { SkeletonProps } from "../../types/local__primereact/skeleton/skeleton";

/**
 * @description
 * Componente Skeleton baseado no PrimeReact.
 * Utilizado para exibir placeholders de carregamento,
 * melhorando a percepção de desempenho da interface.
 *
 * Ideal para representar o layout do conteúdo enquanto
 * dados assíncronos estão sendo carregados.
 *
 * Encapsula o componente `Skeleton` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const Skeleton = (props: SkeletonProps) => {
  return <PureSkeleton {...props} />;
};
