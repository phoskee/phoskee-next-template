export interface NavItem {
  title: string;
  href: string;
  description?: string;
  items?: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    title: "Sviluppo",
    href: "#",
    items: [
      {
        title: "Frontend",
        href: "#",
        description: "Sviluppo interfacce utente moderne",
      },
      {
        title: "Backend",
        href: "#",
        description: "Architetture e API scalabili",
      },
      {
        title: "DevOps",
        href: "#",
        description: "Automazione e deployment",
      },
    ],
  },
  {
    title: "Formazione",
    href: "#",
    items: [
      {
        title: "Corsi Online",
        href: "#",
        description: "Percorsi formativi personalizzati",
      },
      {
        title: "Workshop",
        href: "#",
        description: "Sessioni pratiche intensive",
      },
      {
        title: "Certificazioni",
        href: "#",
        description: "Programmi di certificazione professionale",
      },
    ],
  },
  {
    title: "Supporto",
    href: "#",
    items: [
      {
        title: "Consulenza",
        href: "#",
        description: "Supporto tecnico specializzato",
      },
      {
        title: "Documentazione",
        href: "#",
        description: "Guide e riferimenti tecnici",
      },
      {
        title: "FAQ",
        href: "#",
        description: "Domande frequenti e soluzioni",
      },
    ],
  },
] 