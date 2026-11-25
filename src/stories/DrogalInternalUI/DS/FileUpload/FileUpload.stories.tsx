import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css';
import { FileItem, FileUpload, type FileItemStatus } from '../../../../components/FileUpload';

const TEN_MB = 10 * 1024 * 1024;

const meta = {
  title: 'Drogal Internal UI/DS/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Área para arrastar ou clicar e escolher arquivos. Só escolhe e avisa em <code>onSelect</code> (ou <code>onReject</code>, para tipo ou tamanho fora do permitido): o envio fica com a tela, que mostra o andamento com <code>FileItem</code>. Funciona com teclado: Tab até a área e Enter ou Espaço para abrir a seleção.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '30rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    accept: { control: 'text', table: { type: { summary: 'string' } } },
    multiple: { control: 'boolean', table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } } },
    disabled: { control: 'boolean', table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } } },
    maxFileSize: { control: 'number', description: 'Tamanho máximo por arquivo, em bytes', table: { type: { summary: 'number' } } },
    title: { control: 'text', table: { type: { summary: 'ReactNode' } } },
    hint: { control: 'text', table: { type: { summary: 'ReactNode' } } },
    onSelect: { action: 'onSelect', table: { type: { summary: '(files: File[]) => void' } } },
    onReject: { action: 'onReject', table: { type: { summary: '(rejections: FileRejection[]) => void' } } },
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    accept: '.jpg,.jpeg,.png,.pdf',
    maxFileSize: TEN_MB,
    hint: 'JPG, PNG ou PDF até 10 MB',
    onSelect: () => undefined,
  },
};

export const Desabilitado: Story = {
  args: { ...Padrao.args, disabled: true, onSelect: () => undefined },
};

interface UploadState {
  file: File;
  status: FileItemStatus;
  progress: number;
  error?: string;
}

/** Exemplo de tela: simula o envio para mostrar os estados do FileItem. */
const AnexarReceita = () => {
  const [uploads, setUploads] = useState<UploadState[]>([]);

  useEffect(() => {
    if (!uploads.some((upload) => upload.status === 'uploading')) return undefined;
    const timer = window.setInterval(() => {
      setUploads((current) =>
        current.map((upload) => {
          if (upload.status !== 'uploading') return upload;
          const progress = Math.min(upload.progress + 20, 100);
          return { ...upload, progress, status: progress === 100 ? 'done' : 'uploading' };
        }),
      );
    }, 400);
    return () => window.clearInterval(timer);
  }, [uploads]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <FileUpload
        accept=".jpg,.jpeg,.png,.pdf"
        maxFileSize={TEN_MB}
        multiple
        hint="JPG, PNG ou PDF até 10 MB"
        onSelect={(files) =>
          setUploads((current) => [...current, ...files.map((file) => ({ file, status: 'uploading' as const, progress: 0 }))])
        }
        onReject={(rejections) =>
          setUploads((current) => [
            ...current,
            ...rejections.map(({ file, reason }) => ({
              file,
              status: 'error' as const,
              progress: 0,
              error: reason === 'size' ? 'Arquivo acima de 10 MB' : 'Tipo de arquivo não aceito',
            })),
          ])
        }
      />
      {uploads.map((upload, index) => (
        <FileItem
          key={`${upload.file.name}-${index}`}
          name={upload.file.name}
          size={upload.file.size}
          status={upload.status}
          progress={upload.progress}
          error={upload.error}
          onRemove={() => setUploads((current) => current.filter((_, position) => position !== index))}
        />
      ))}
    </div>
  );
};

export const ComArquivos: Story = {
  args: { onSelect: () => undefined },
  render: () => <AnexarReceita />,
  parameters: {
    docs: {
      description: {
        story: 'Escolha ou arraste arquivos para ver o envio simulado. Arquivos acima de 10 MB ou de outro tipo aparecem com erro.',
      },
    },
  },
};

export const EstadosDoFileItem: Story = {
  args: { onSelect: () => undefined },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <FileItem name="receita.jpg" size={1258291} status="uploading" progress={62} onRemove={() => undefined} />
      <FileItem name="receita.jpg" size={1258291} status="done" onRemove={() => undefined} />
      <FileItem name="receita.jpg" size={1258291} status="error" error="Arquivo acima de 10 MB" onRemove={() => undefined} />
    </div>
  ),
};
