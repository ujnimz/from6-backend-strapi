import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCallToAction extends Schema.Component {
  collectionName: 'components_blocks_call_to_actions';
  info: {
    displayName: 'Call To Action';
    icon: 'cursor';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    buttonText: Attribute.String;
    buttonLink: Attribute.String;
    backgroundImage: Attribute.Media;
    buttonStyle: Attribute.Enumeration<
      ['tangerine', 'charcoal', 'atlantic', 'lime', 'white', 'black']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'tangerine'>;
  };
}

export interface BlocksClientele extends Schema.Component {
  collectionName: 'components_blocks_clienteles';
  info: {
    displayName: 'Clientele';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    Item: Attribute.Component<'elements.clientele-item', true>;
    sliderType: Attribute.Enumeration<['carousel', 'grid']> &
      Attribute.Required &
      Attribute.DefaultTo<'grid'>;
  };
}

export interface BlocksHeading extends Schema.Component {
  collectionName: 'components_blocks_headings';
  info: {
    displayName: 'Heading';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    tag: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.Required &
      Attribute.DefaultTo<'h2'>;
    headingStyle: Attribute.Enumeration<
      ['tangerine', 'charcoal', 'atlantic', 'lime', 'white', 'black']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'white'>;
    bgImage: Attribute.Media & Attribute.Required;
    headingAlign: Attribute.Enumeration<['center', 'left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'center'>;
  };
}

export interface ElementsClienteleItem extends Schema.Component {
  collectionName: 'components_elements_clientele_items';
  info: {
    displayName: 'Clientele Item';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SeoMetaSeoMeta extends Schema.Component {
  collectionName: 'components_seo_meta_seo_metas';
  info: {
    displayName: 'SEO Meta';
    icon: 'earth';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.call-to-action': BlocksCallToAction;
      'blocks.clientele': BlocksClientele;
      'blocks.heading': BlocksHeading;
      'elements.clientele-item': ElementsClienteleItem;
      'seo-meta.seo-meta': SeoMetaSeoMeta;
    }
  }
}
