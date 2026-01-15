import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { DataTable } from '../../../../components/DataTable';
import { Column } from 'primereact/column';

// Sample data
const products = [
  { id: '1', code: 'P001', name: 'Bamboo Watch', category: 'Accessories', quantity: 24, price: 65 },
  { id: '2', code: 'P002', name: 'Black Watch', category: 'Accessories', quantity: 61, price: 72 },
  { id: '3', code: 'P003', name: 'Blue Band', category: 'Fitness', quantity: 2, price: 79 },
  { id: '4', code: 'P004', name: 'Blue T-Shirt', category: 'Clothing', quantity: 25, price: 29 },
  { id: '5', code: 'P005', name: 'Bracelet', category: 'Accessories', quantity: 73, price: 15 },
  { id: '6', code: 'P006', name: 'Brown Purse', category: 'Accessories', quantity: 0, price: 120 },
  { id: '7', code: 'P007', name: 'Chakra Bracelet', category: 'Accessories', quantity: 5, price: 32 },
  { id: '8', code: 'P008', name: 'Gaming Set', category: 'Electronics', quantity: 63, price: 299 },
  { id: '9', code: 'P009', name: 'Gold Phone Case', category: 'Accessories', quantity: 24, price: 24 },
  { id: '10', code: 'P010', name: 'Green Earbuds', category: 'Electronics', quantity: 23, price: 89 },
];

// const customers = [
//   { id: 1, name: 'Amy Elsner', country: 'USA', company: 'Benton', date: '2023-01-15', status: 'qualified' },
//   { id: 2, name: 'Anna Fali', country: 'Brazil', company: 'Acme Co', date: '2023-02-20', status: 'unqualified' },
//   { id: 3, name: 'Asiya Javayant', country: 'India', company: 'Tech Solutions', date: '2023-03-10', status: 'proposal' },
//   { id: 4, name: 'Bernardo Dominic', country: 'Spain', company: 'Digital Corp', date: '2023-04-05', status: 'negotiation' },
//   { id: 5, name: 'Elwin Sharvill', country: 'UK', company: 'Innovate Ltd', date: '2023-05-12', status: 'qualified' },
// ];


const meta = {
  title: 'Drogal Internal UI/DS/DataTable',
  component: DataTable,
  subcomponents: { Column },
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'object',
      description: 'An array of objects to display',
      table: {
        type: { summary: 'any[]' },
      }
    },
    dataKey: {
      control: 'text',
      description: 'Name of the field that uniquely identifies a record',
      table: {
        type: { summary: 'string' },
      },
    },
    paginator: {
      control: 'boolean',
      description: 'When specified as true, enables the pagination',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rows: {
      control: 'number',
      description: 'Number of rows to display per page',
      table: {
        type: { summary: 'number' },
      },
    },
    first: {
      control: 'number',
      description: 'Index of the first row to be displayed',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    totalRecords: {
      control: 'number',
      description: 'Number of total records, defaults to length of value when not defined',
      table: {
        type: { summary: 'number' },
      },
    },
    lazy: {
      control: 'boolean',
      description: 'Defines if data is loaded and interacted with in lazy manner',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    sortMode: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Defines whether sorting works on single column or on multiple columns',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single' },
      },
    },
    sortField: {
      control: 'text',
      description: 'Property name or a getter function of a row data used for sorting by default',
      table: {
        type: { summary: 'string' },
      },
    },
    sortOrder: {
      control: 'select',
      options: [1, -1, 0],
      description: 'Order to sort when default sorting is enabled (1 = asc, -1 = desc, 0 = none)',
      table: {
        type: { summary: 'number' },
      },
    },
    multiSortMeta: {
      control: 'object',
      description: 'An array of SortMeta objects to sort the data by default in multiple sort mode',
      table: {
        type: { summary: 'DataTableSortMeta[]' },
      },
    },
    filters: {
      control: 'object',
      description: 'An object to define filtering',
      table: {
        type: { summary: 'DataTableFilterMeta' },
      },
    },
    filterDisplay: {
      control: 'select',
      options: ['menu', 'row'],
      description: 'Layout of the filter elements',
      table: {
        type: { summary: 'string' },
      },
    },
    globalFilterFields: {
      control: 'object',
      description: 'An array of fields as string to use in global filtering',
      table: {
        type: { summary: 'string[]' },
      },
    },
    selection: {
      control: 'object',
      description: 'Selected row in single mode or an array of values in multiple mode',
      table: {
        type: { summary: 'any | any[]' },
      },
    },
    selectionMode: {
      control: 'select',
      options: ['single', 'multiple', 'checkbox', 'radiobutton'],
      description: 'Specifies the selection mode',
      table: {
        type: { summary: 'string' },
      },
    },
    metaKeySelection: {
      control: 'boolean',
      description: 'Defines whether metaKey is required for the selection',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectAll: {
      control: 'boolean',
      description: 'Whether all data is selected',
      table: {
        type: { summary: 'boolean' },
      },
    },
    rowHover: {
      control: 'boolean',
      description: 'When enabled, background of the rows change on hover',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    stripedRows: {
      control: 'boolean',
      description: 'Whether to display rows with alternating colors',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showGridlines: {
      control: 'boolean',
      description: 'Whether to show grid lines between cells',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'normal', 'large'],
      description: 'Defines the size of the table',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    tableStyle: {
      control: 'object',
      description: 'Inline style of the table element',
      table: {
        type: { summary: 'object' },
      },
    },
    tableClassName: {
      control: 'text',
      description: 'Style class of the table element',
      table: {
        type: { summary: 'string' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Displays a loader to indicate data load is in progress',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    emptyMessage: {
      control: 'text',
      description: 'Text to display when there is no data',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'No records found' },
      },
    },
    // responsive: {
    //   control: 'boolean',
    //   description: 'Defines if the table is responsive',
    //   table: {
    //     type: { summary: 'boolean' },
    //     defaultValue: { summary: 'false' },
    //   },
    // },
    resizableColumns: {
      control: 'boolean',
      description: 'When enabled, columns can be resized using drag and drop',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    columnResizeMode: {
      control: 'select',
      options: ['fit', 'expand'],
      description: 'Defines whether the overall table width changes on column resize',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fit' },
      },
    },
    reorderableColumns: {
      control: 'boolean',
      description: 'When enabled, columns can be reordered using drag and drop',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    scrollable: {
      control: 'boolean',
      description: 'When specified, enables horizontal and/or vertical scrolling',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    scrollHeight: {
      control: 'text',
      description: 'Height of the scroll viewport',
      table: {
        type: { summary: 'string' },
      },
    },
    virtualScrollerOptions: {
      control: 'object',
      description: 'Options for virtual scrolling',
      table: {
        type: { summary: 'object' },
      },
    },
    frozenValue: {
      control: 'object',
      description: 'Items of the frozen part in scrollable DataTable',
      table: {
        type: { summary: 'any[]' },
      },
    },
    csvSeparator: {
      control: 'text',
      description: 'Character to use as the csv separator',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ',' },
      },
    },
    exportFilename: {
      control: 'text',
      description: 'Name of the exported file',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'download' },
      },
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    tableStyle: { minWidth: '50rem' },
  },
};

export const WithPagination: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    paginator: true,
    rows: 5,
    tableStyle: { minWidth: '50rem' },
  },
};

export const Sortable: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" sortable />
      <Column field="name" header="Name" sortable />
      <Column field="category" header="Category" sortable />
      <Column field="quantity" header="Quantity" sortable />
      <Column field="price" header="Price" sortable />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    tableStyle: { minWidth: '50rem' },
  },
};

export const Filterable: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" filter filterPlaceholder="Search" />
      <Column field="name" header="Name" filter filterPlaceholder="Search" />
      <Column field="category" header="Category" filter filterPlaceholder="Search" />
      <Column field="quantity" header="Quantity" filter filterPlaceholder="Search" />
      <Column field="price" header="Price" filter filterPlaceholder="Search" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    filterDisplay: 'row',
    tableStyle: { minWidth: '50rem' },
  },
};

export const SingleSelection: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    selectionMode: 'single',
    tableStyle: { minWidth: '50rem' },
  },
};

export const MultipleSelection: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    tableStyle: { minWidth: '50rem' },
  },
};

export const StripedRows: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    stripedRows: true,
    tableStyle: { minWidth: '50rem' },
  },
};

export const WithGridlines: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    showGridlines: true,
    tableStyle: { minWidth: '50rem' },
  },
};

export const RowHover: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    rowHover: true,
    tableStyle: { minWidth: '50rem' },
  },
};

export const SmallSize: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    size: 'small',
    tableStyle: { minWidth: '50rem' },
  },
};

export const LargeSize: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    size: 'large',
    tableStyle: { minWidth: '50rem' },
  },
};

export const Loading: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: [],
    loading: true,
    tableStyle: { minWidth: '50rem' },
  },
};

export const EmptyMessage: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: [],
    emptyMessage: 'No products found',
    tableStyle: { minWidth: '50rem' },
  },
};

export const Scrollable: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    scrollable: true,
    scrollHeight: '300px',
    tableStyle: { minWidth: '50rem' },
  },
};

export const ResizableColumns: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    resizableColumns: true,
    tableStyle: { minWidth: '50rem' },
  },
};

export const ReorderableColumns: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    reorderableColumns: true,
    tableStyle: { minWidth: '50rem' },
  },
};

export const FullFeatured: Story = {
  render: (args) => (
    <DataTable {...args}>
      <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
      <Column field="code" header="Code" sortable filter filterPlaceholder="Search" />
      <Column field="name" header="Name" sortable filter filterPlaceholder="Search" />
      <Column field="category" header="Category" sortable filter filterPlaceholder="Search" />
      <Column field="quantity" header="Quantity" sortable filter filterPlaceholder="Search" />
      <Column field="price" header="Price" sortable filter filterPlaceholder="Search" />
    </DataTable>
  ),
  args: {
    value: products,
    dataKey: 'id',
    paginator: true,
    rows: 5,
    rowHover: true,
    stripedRows: true,
    showGridlines: true,
    filterDisplay: 'row',
    tableStyle: { minWidth: '50rem' },
  },
};
