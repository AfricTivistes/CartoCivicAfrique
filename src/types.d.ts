import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { HTMLAttributes } from 'astro/types';

export interface Post {
  /** Identifiant unique du post. */
  id: string;

  /** Slug unique du post, partie de l'URL basée sur son nom. */
  slug: string;

  /** Permalien du post. */
  permalink: string;

  /** Date de publication du post. */
  publishDate: Date;

  /** Date de mise à jour du post, facultative. */
  date_de_mise_a_jour?: Date;

  /** Titre du post. */
  titre: string;

  /** Résumé facultatif du post. */
  resume?: string;

  /** Image associée au post. */
  image?: string;

  /** Catégorie du post */
  category?: string;
  tags?: Array<string>;

  /** Auteur du post. */
  auteur?: string;

  /** Métadonnées du post. */
  metadata?: MetaData;

  /** Indique si le post est un brouillon. */
  brouillon?: boolean;

    /**  */
  Content?: AstroComponentFactory;
  content?: string;

  /** Temps de lecture estimé du post. */
  temps_de_lecture?: number;

  /** Informations spécifiques aux initiatives. */

  organisation?: string;
  date_de_debut?: Date;
  date_de_fin?: Date;
  localisation?: string;
  theme?: string;
  type_initiative?: string;
  statut?: string;
  annee?: number;
  contacts?: Array<Contact>;
  lien_du_site_web?: string;
  

}

export interface MetaData {
  titre?: string;
  ignorerModeleDeTitre?: boolean;
  canonique?: string;
  robots?: MetaDataRobots;
  description?: string;
  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  suivre?: boolean;
}

export interface MetaDataImage {
  url: string;
  largeur?: number;
  hauteur?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  nomDuSite?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  typeDeCarte?: string;
}

export interface Contact {
  nom: string;
  email?: string;
  telephone?: string;
  fonction?: string;
  reseaux_sociaux?: Array<{ type: string; lien: string }>;
}


export interface Image {
  src: string;
  alt?: string;
  href?: string;
}

export interface Video {
  src: string;
  type?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

interface TeamMember {
  name?: string;
  job?: string;
  image?: Image;
  socials?: Array<Social>;
  description?: string;
  classes?: Record<string, string>;
}

interface Social {
  icon?: string;
  href?: string;
}

export interface Stat {
  amount?: number;
  title?: string;
  icon?: string;
}





export interface Team extends Headline, Widget {
  team?: Array<TeamMember>;
}

export interface Stats extends Headline, Widget {
  stats?: Array<Stat>;
}



export interface Brands extends Headline, Widget {
  icons?: Array<string>;
  images?: Array<Image>;
}

export interface Contact extends Headline, Form, Widget {}
