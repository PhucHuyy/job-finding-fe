import { MenuItem } from 'primereact/menuitem';

// headerData.ts
export const items: MenuItem[] = [
  {
    label: 'Brows',
    items: [
      [
        {
          label: 'Main Page',
          items: [{ label: 'Home Page 1' }, { label: 'Home Page 2' }],
        },
      ],
      [
        {
          label: 'For Candidates',
          items: [{ label: 'Candidate 1' }, { label: 'Candidate 2' }],
        },
      ],
    ],
  },
  {
    label: 'Blog',
    icon: 'pi pi-book',
  },

  {
    label: 'Sign up',
    icon: 'pi pi-user',
  },
  {
    label: 'Pricing',
    icon: 'pi pi-dollar',
  },
];
