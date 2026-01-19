import type { Meta, StoryObj } from '@storybook/react-vite';

import '../../../../theme.css'
import { Paginator } from '../../../../components/Paginator';

const meta = {
  title: 'Drogal Internal UI/DS/Paginator',
  component: Paginator,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    first: {
      control: 'number',
      description: 'Index of the first item',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    rows: {
      control: 'number',
      description: 'Number of rows to display per page',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    totalRecords: {
      control: 'number',
      description: 'Total number of records',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    rowsPerPageOptions: {
      control: 'object',
      description: 'Array of integer values to display inside rows per page dropdown',
      table: {
        type: { summary: 'array' },
      },
    },
    pageLinkSize: {
      control: 'number',
      description: 'Number of page links to display',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    template: {
      control: 'text',
      description: 'Template of the paginator. Available templates are FirstPageLink, PrevPageLink, PageLinks, NextPageLink, LastPageLink, RowsPerPageDropdown, JumpToPageDropdown, JumpToPageInput, CurrentPageReport',
      table: {
        type: { summary: 'string' },
      },
    },
    leftContent: {
      control: 'object',
      description: 'Content for the left side of the paginator',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    rightContent: {
      control: 'object',
      description: 'Content for the right side of the paginator',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    currentPageReportTemplate: {
      control: 'text',
      description: 'Template of the current page report element. Available placeholders are {currentPage}, {totalPages}, {rows}, {first}, {last} and {totalRecords}',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '({currentPage} of {totalPages})' },
      },
    },
    alwaysShow: {
      control: 'boolean',
      description: 'Whether to show the paginator even there is only one page',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    dropdownAppendTo: {
      control: 'text',
      description: 'DOM element instance where the overlay panel should be mounted',
      table: {
        type: { summary: 'self | HTMLElement' },
      },
    },
    style: {
      control: 'object',
      description: 'Inline style of the component',
      table: {
        type: { summary: 'object' },
      },
    },
    className: {
      control: 'text',
      description: 'Style class of the component',
      table: {
        type: { summary: 'string' },
      },
    },
    pt: {
      control: 'object',
      description: 'Uses to pass attributes to DOM elements inside the component',
      table: {
        type: { summary: 'object' },
      },
    },
  },
} satisfies Meta<typeof Paginator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    first: 0,
    rows: 10,
    totalRecords: 120,
  },
};

export const WithRowsPerPage: Story = {
  args: {
    first: 0,
    rows: 10,
    totalRecords: 120,
    rowsPerPageOptions: [10, 20, 30, 50],
  },
};

export const WithPageLinks: Story = {
  args: {
    first: 0,
    rows: 10,
    totalRecords: 200,
    pageLinkSize: 7,
  },
};

export const WithCurrentPageReport: Story = {
  args: {
    first: 0,
    rows: 10,
    totalRecords: 150,
    template: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport',
    currentPageReportTemplate: 'Showing {first} to {last} of {totalRecords} entries',
  },
};

export const WithJumpToPage: Story = {
  args: {
    first: 0,
    rows: 10,
    totalRecords: 120,
    template: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageInput',
  },
};

export const CustomTemplate: Story = {
  args: {
    first: 0,
    rows: 10,
    totalRecords: 120,
    template: 'PrevPageLink CurrentPageReport NextPageLink',
    currentPageReportTemplate: '{currentPage} of {totalPages}',
  },
};

export const LargeDataset: Story = {
  args: {
    first: 0,
    rows: 25,
    totalRecords: 10000,
    rowsPerPageOptions: [25, 50, 100, 200],
    template: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport',
    currentPageReportTemplate: '{first} - {last} of {totalRecords}',
  },
};

export const MinimalPaginator: Story = {
  args: {
    first: 0,
    rows: 10,
    totalRecords: 100,
    template: 'PrevPageLink NextPageLink',
  },
};

export const WithJumpToPageDropdown: Story = {
  args: {
    first: 0,
    rows: 10,
    totalRecords: 120,
    template: 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink JumpToPageDropdown',
    currentPageReportTemplate: 'Page {currentPage}',
  },
};

export const FullTemplate: Story = {
  args: {
    first: 0,
    rows: 10,
    totalRecords: 250,
    rowsPerPageOptions: [5, 10, 20, 50],
    template: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport',
    currentPageReportTemplate: 'Showing {first} to {last} of {totalRecords}',
    pageLinkSize: 5,
  },
};
