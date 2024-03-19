import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticulosEtiqueta extends Schema.Component {
  collectionName: 'components_etiquetas_etiquetas';
  info: {
    displayName: 'etiquetas';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    etiqueta: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'articulos.etiqueta': ArticulosEtiqueta;
    }
  }
}
