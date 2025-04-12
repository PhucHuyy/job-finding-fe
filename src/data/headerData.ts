// headerData.ts

export interface SubMenuItem {
  label: string;
  href?: string;
}

export interface MegaMenuItem {
  label: string;
  dropdown?: {
    sections: {
      title: string;
      items: SubMenuItem[];
    }[];
  };
  href?: string;
}

export const menuItems: MegaMenuItem[] = [
  {
    label: 'Brows',
    dropdown: {
      sections: [
        {
          title: 'Main Page',
          items: [
            { label: 'Home Page 1', href: '*' },
            { label: 'Home Page 2', href: '#' },
          ],
        },
        {
          title: 'For Candidates',
          items: [
            { label: 'Candidate 1', href: '#' },
            { label: 'Candidate 2', href: '#' },
          ],
        },
      ],
    },
  },
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'Sign up',
    href: '#',
  },
  {
    label: 'Pricing',
    href: '#',
  },
];
