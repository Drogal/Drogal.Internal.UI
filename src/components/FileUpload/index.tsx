import { useId, useState, type ChangeEvent, type DragEvent, type ReactNode } from "react";
import EnumIcons from "../../icons/EnumIcons";
import { Icon } from "../Icon";
import { Tag } from "../Tag";
import { ProgressBar } from "../ProgressBar";
import { formatFileSize, splitFiles, type FileRejection } from "./fileUtils";

export type { FileRejection, FileRejectionReason } from "./fileUtils";

export interface FileUploadProps {
  /** Tipos aceitos, no formato do atributo `accept` (ex.: ".jpg,.png,.pdf" ou "image/*"). */
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  /** Tamanho máximo por arquivo, em bytes. Arquivos maiores vão para `onReject`. */
  maxFileSize?: number;
  /** @default "Arraste o arquivo ou clique para selecionar" */
  title?: ReactNode;
  /** Texto de apoio, como os tipos e o tamanho aceitos (ex.: "JPG, PNG ou PDF até 10 MB"). */
  hint?: ReactNode;
  /** Arquivos escolhidos que passaram em `accept` e `maxFileSize`. */
  onSelect: (files: File[]) => void;
  /** Arquivos recusados, com o motivo (`type` ou `size`). */
  onReject?: (rejections: FileRejection[]) => void;
  id?: string;
  name?: string;
  className?: string;
}

/**
 * @description
 * Componente FileUpload.
 * Área para arrastar ou clicar e escolher arquivos, como a receita na venda.
 * Só escolhe os arquivos e avisa em `onSelect`: o envio fica com a tela,
 * que mostra o andamento com `FileItem`.
 *
 * A área inteira é o rótulo de um `<input type="file">`, então funciona com
 * mouse, teclado (Tab e Enter ou Espaço) e leitor de tela.
 */
export const FileUpload = ({
  accept,
  multiple = false,
  disabled = false,
  maxFileSize,
  title = "Arraste o arquivo ou clique para selecionar",
  hint,
  onSelect,
  onReject,
  id,
  name,
  className,
}: FileUploadProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = `${inputId}-hint`;
  const [dragging, setDragging] = useState(false);

  const handleFiles = (list: FileList | null) => {
    if (!list || disabled) return;
    const files = multiple ? Array.from(list) : Array.from(list).slice(0, 1);
    const { accepted, rejected } = splitFiles(files, accept, maxFileSize);
    if (accepted.length > 0) onSelect(accepted);
    if (rejected.length > 0) onReject?.(rejected);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files);
    // Permite escolher o mesmo arquivo de novo depois de removê-lo.
    event.target.value = "";
  };

  const onDragOver = (event: DragEvent<HTMLLabelElement>) => {
    if (disabled) return;
    event.preventDefault();
    if (!dragging) setDragging(true);
  };

  const onDragLeave = (event: DragEvent<HTMLLabelElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDragging(false);
  };

  const onDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragging(false);
    handleFiles(event.dataTransfer.files);
  };

  const classes = [
    "drg-file-upload",
    dragging ? "drg-file-upload--dragging" : "",
    disabled ? "drg-file-upload--disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classes} htmlFor={inputId} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
      <input
        id={inputId}
        name={name}
        type="file"
        className="drg-file-upload__input"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        aria-describedby={hint ? hintId : undefined}
        onChange={onChange}
      />
      <span className="drg-file-upload__icon" aria-hidden="true">
        <Icon name={EnumIcons.Outlined.upload} />
      </span>
      <span className="drg-file-upload__title">{title}</span>
      {hint && (
        <span id={hintId} className="drg-file-upload__hint">
          {hint}
        </span>
      )}
    </label>
  );
};

export type FileItemStatus = "uploading" | "done" | "error";

export interface FileItemProps {
  name: string;
  /** Tamanho em bytes (formatado como "1,2 MB") ou já como texto. */
  size?: number | string;
  /** @default 'done' */
  status?: FileItemStatus;
  /** Percentual do envio, em `uploading`. */
  progress?: number;
  /** Mensagem abaixo do nome, em `error` (ex.: "Arquivo acima de 10 MB"). */
  error?: string;
  /** Com ele, aparece o botão de remover. */
  onRemove?: () => void;
  /** Rótulo do botão de remover para leitor de tela. @default "Remover <nome>" */
  removeLabel?: string;
  className?: string;
}

/**
 * @description
 * Componente FileItem.
 * Um arquivo escolhido no `FileUpload`, com o andamento do envio:
 * barra e percentual enquanto envia, "Enviado" ao terminar e "Erro"
 * com a mensagem quando falha.
 */
export const FileItem = ({
  name,
  size,
  status = "done",
  progress = 0,
  error,
  onRemove,
  removeLabel,
  className,
}: FileItemProps) => {
  const sizeText = typeof size === "number" ? formatFileSize(size) : size;
  const classes = ["drg-file-item", `drg-file-item--${status}`, className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <span className="drg-file-item__icon" aria-hidden="true">
        <Icon name={EnumIcons.Outlined.description} />
      </span>
      <div className="drg-file-item__body">
        <span className="drg-file-item__name">
          <span className="drg-file-item__filename">{name}</span>
          {sizeText && <span className="drg-file-item__size"> · {sizeText}</span>}
        </span>
        {status === "uploading" && (
          <ProgressBar value={progress} size="small" aria-label={`Enviando ${name}`} />
        )}
        {status === "error" && error && <span className="drg-file-item__error">{error}</span>}
      </div>
      {status === "uploading" && <Tag value={`${Math.round(progress)}%`} severity="secondary" variant="subtle" />}
      {status === "done" && <Tag value="Enviado" severity="success" variant="subtle" />}
      {status === "error" && <Tag value="Erro" severity="danger" variant="subtle" />}
      {onRemove && (
        <button
          type="button"
          className="drg-file-item__remove"
          aria-label={removeLabel ?? `Remover ${name}`}
          onClick={onRemove}
        >
          <Icon name={EnumIcons.Outlined.close} aria-hidden="true" />
        </button>
      )}
    </div>
  );
};
