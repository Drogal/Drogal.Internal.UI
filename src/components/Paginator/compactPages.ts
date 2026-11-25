export type CompactPageItem = number | "ellipsis-start" | "ellipsis-end";

/**
 * Páginas do paginador compacto (índices a partir de 0): sempre a primeira e a última,
 * a atual com as vizinhas e reticências nos buracos. Com até 5 páginas, mostra todas.
 * Ex.: atual 0 de 156 → 0 1 2 … 155; atual 50 → 0 … 49 50 51 … 155.
 */
export const getCompactPages = (current: number, pageCount: number): CompactPageItem[] => {
  if (pageCount <= 5) return Array.from({ length: pageCount }, (_, page) => page);

  const start = Math.max(1, Math.min(current - 1, pageCount - 3));
  const end = Math.min(pageCount - 2, Math.max(current + 1, 2));
  const pages: CompactPageItem[] = [0];

  if (start > 1) pages.push("ellipsis-start");
  for (let page = start; page <= end; page += 1) pages.push(page);
  if (end < pageCount - 2) pages.push("ellipsis-end");
  pages.push(pageCount - 1);

  return pages;
};
