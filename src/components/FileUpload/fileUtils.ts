export type FileRejectionReason = "type" | "size";

export interface FileRejection {
  file: File;
  reason: FileRejectionReason;
}

/** Tamanho em pt-BR: "1,2 MB", "830 KB". */
export const formatFileSize = (bytes: number): string => {
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  const digits = unit === 0 || value >= 100 ? 0 : 1;
  return `${new Intl.NumberFormat("pt-BR", { maximumFractionDigits: digits }).format(value)} ${units[unit]}`;
};

/** Mesma regra do atributo `accept`: extensões (".pdf") e tipos MIME, com curinga ("image/*"). */
export const matchesAccept = (file: File, accept?: string): boolean => {
  if (!accept) return true;
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();

  return accept
    .split(",")
    .map((rule) => rule.trim().toLowerCase())
    .filter(Boolean)
    .some((rule) => {
      if (rule.startsWith(".")) return name.endsWith(rule);
      if (rule.endsWith("/*")) return type.startsWith(rule.slice(0, -1));
      return type === rule;
    });
};

export const splitFiles = (files: File[], accept?: string, maxFileSize?: number) => {
  const accepted: File[] = [];
  const rejected: FileRejection[] = [];

  files.forEach((file) => {
    if (!matchesAccept(file, accept)) rejected.push({ file, reason: "type" });
    else if (maxFileSize !== undefined && file.size > maxFileSize) rejected.push({ file, reason: "size" });
    else accepted.push(file);
  });

  return { accepted, rejected };
};
