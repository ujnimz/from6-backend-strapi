import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCallToAction extends Schema.Component {
  collectionName: 'components_blocks_call_to_actions';
  info: {
    displayName: 'Call To Action';
    icon: 'bullhorn';
    description: '';
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
    icon: 'chalkboard-teacher';
    description: '';
  };
  attributes: {
    clientele: Attribute.Component<'elements.clientele-item', true>;
    sliderType: Attribute.Enumeration<['carousel', 'grid']> &
      Attribute.Required &
      Attribute.DefaultTo<'grid'>;
  };
}

export interface BlocksContactsBlock extends Schema.Component {
  collectionName: 'components_blocks_contacts_blocks';
  info: {
    displayName: 'Contacts Block';
    icon: 'address-card';
    description: '';
  };
  attributes: {
    contacts: Attribute.Component<'elements.contact', true>;
  };
}

export interface BlocksFeaturedBox extends Schema.Component {
  collectionName: 'components_blocks_featured_boxes';
  info: {
    displayName: 'Featured Box';
    icon: 'flag';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    leftIcon: Attribute.Enumeration<
      ['heart', 'magnifier', 'balloon', 'atom', 'rocket']
    > &
      Attribute.Required;
    rightIcon: Attribute.Enumeration<
      ['heart', 'magnifier', 'balloon', 'atom', 'rocket']
    > &
      Attribute.Required;
    buttonText: Attribute.String;
    buttonLink: Attribute.String;
    style: Attribute.Enumeration<
      ['tangerine', 'charcoal', 'atlantic', 'lime', 'white', 'black']
    > &
      Attribute.Required;
    bgImage: Attribute.Media;
  };
}

export interface BlocksFeaturedWork extends Schema.Component {
  collectionName: 'components_blocks_featured_works';
  info: {
    displayName: 'Featured Work';
    icon: 'star';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    height: Attribute.Integer;
  };
}

export interface BlocksHeading extends Schema.Component {
  collectionName: 'components_typography_headings';
  info: {
    displayName: 'Heading';
    icon: 'h-square';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    tag: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.Required &
      Attribute.DefaultTo<'h2'>;
    headingStyle: Attribute.Enumeration<
      ['tangerine', 'charcoal', 'atlantic', 'lime', 'white', 'black']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'white'>;
    bgImage: Attribute.Media;
    headingAlign: Attribute.Enumeration<['center', 'left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'center'>;
  };
}

export interface BlocksImageGrid extends Schema.Component {
  collectionName: 'components_blocks_image_grids';
  info: {
    displayName: 'Image Grid';
    icon: 'images';
    description: '';
  };
  attributes: {
    singleImage: Attribute.Component<'elements.single-image', true>;
    numberOfCols: Attribute.Enumeration<['two', 'three', 'four']> &
      Attribute.DefaultTo<'two'>;
  };
}

export interface BlocksImage extends Schema.Component {
  collectionName: 'components_media_images';
  info: {
    displayName: 'Wide Image';
    icon: 'image';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    animate: Attribute.Enumeration<['none', 'left', 'right', 'up', 'down']> &
      Attribute.Required &
      Attribute.DefaultTo<'none'>;
  };
}

export interface BlocksLocationMap extends Schema.Component {
  collectionName: 'components_blocks_location_maps';
  info: {
    displayName: 'Location Map';
    icon: 'map-marked';
    description: '';
  };
  attributes: {
    placeId: Attribute.String & Attribute.Required;
    mapHeight: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<600>;
    zoomLevel: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<15>;
    apiKey: Attribute.String & Attribute.Required;
  };
}

export interface BlocksMembers extends Schema.Component {
  collectionName: 'components_blocks_members';
  info: {
    displayName: 'Members';
    icon: 'user-friends';
    description: '';
  };
  attributes: {
    members: Attribute.Component<'elements.member', true>;
    hoverAnimate: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface BlocksPostsGrid extends Schema.Component {
  collectionName: 'components_blocks_posts_grids';
  info: {
    displayName: 'Posts Grid';
    icon: 'qrcode';
  };
  attributes: {
    posts: Attribute.Relation<
      'blocks.posts-grid',
      'oneToMany',
      'api::post.post'
    >;
  };
}

export interface BlocksRecentTestimonials extends Schema.Component {
  collectionName: 'components_blocks_recent_testimonials';
  info: {
    displayName: 'Recent Testimonials';
    icon: 'quote-left';
  };
  attributes: {
    testimonials: Attribute.Relation<
      'blocks.recent-testimonials',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface BlocksServicesList extends Schema.Component {
  collectionName: 'components_blocks_services_lists';
  info: {
    displayName: 'Services List';
    icon: 'clipboard-list';
  };
  attributes: {
    services: Attribute.Relation<
      'blocks.services-list',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface BlocksServicesSlider extends Schema.Component {
  collectionName: 'components_blocks_services_sliders';
  info: {
    displayName: 'Services Slider';
    icon: 'boxes';
    description: '';
  };
  attributes: {
    services: Attribute.Relation<
      'blocks.services-slider',
      'oneToMany',
      'api::service.service'
    >;
    spacing: Attribute.Enumeration<['normal', 'none']> &
      Attribute.Required &
      Attribute.DefaultTo<'normal'>;
  };
}

export interface BlocksTextBlock extends Schema.Component {
  collectionName: 'components_blocks_text_blocks';
  info: {
    displayName: 'Text Block';
    icon: 'align-center';
  };
  attributes: {
    paragraphs: Attribute.Component<'elements.paragraph', true>;
  };
}

export interface BlocksTextSlider extends Schema.Component {
  collectionName: 'components_blocks_text_sliders';
  info: {
    displayName: 'Text Slider';
    icon: 'dice-d20';
    description: '';
  };
  attributes: {
    sliderTexts: Attribute.Component<'elements.slider-text', true>;
    mp4Video: Attribute.Media & Attribute.Required;
    ogvVideo: Attribute.Media;
    webmVideo: Attribute.Media;
    fallbackImage: Attribute.Media & Attribute.Required;
  };
}

export interface BlocksWorksGrid extends Schema.Component {
  collectionName: 'components_blocks_works_grids';
  info: {
    displayName: 'Works Grid';
    icon: 'border-all';
    description: '';
  };
  attributes: {
    works: Attribute.Relation<
      'blocks.works-grid',
      'oneToMany',
      'api::work.work'
    >;
    work_category: Attribute.Relation<
      'blocks.works-grid',
      'oneToOne',
      'api::work-category.work-category'
    >;
  };
}

export interface BlocksYouTubeVideo extends Schema.Component {
  collectionName: 'components_blocks_you_tube_videos';
  info: {
    displayName: 'YouTubeVideo';
    icon: 'video';
    description: '';
  };
  attributes: {
    youtubeLink: Attribute.String & Attribute.Required;
    autoPlay: Attribute.Enumeration<['yes', 'no']> &
      Attribute.Required &
      Attribute.DefaultTo<'yes'>;
  };
}

export interface ElementsClienteleItem extends Schema.Component {
  collectionName: 'components_elements_clientele_items';
  info: {
    displayName: 'Clientele Item';
    icon: 'dice-d6';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsContact extends Schema.Component {
  collectionName: 'components_typography_contacts';
  info: {
    displayName: 'Contact Item';
    icon: 'paper-plane';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    icon: Attribute.Enumeration<['call', 'email', 'map']> &
      Attribute.Required &
      Attribute.DefaultTo<'call'>;
    link: Attribute.String & Attribute.Required;
  };
}

export interface ElementsMember extends Schema.Component {
  collectionName: 'components_elements_members';
  info: {
    displayName: 'Member';
    icon: 'user-tie';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    jobTitle: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    hoverImage: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsNavItem extends Schema.Component {
  collectionName: 'components_elements_nav_items';
  info: {
    displayName: 'Nav Item';
    icon: 'share';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface ElementsParagraph extends Schema.Component {
  collectionName: 'components_typography_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'align-left';
    description: '';
  };
  attributes: {
    text: Attribute.RichText & Attribute.Required;
    align: Attribute.Enumeration<['center', 'left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'center'>;
    textType: Attribute.Enumeration<
      ['paragraph', 'bulletList', 'numberedList']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'paragraph'>;
  };
}

export interface ElementsSingleImage extends Schema.Component {
  collectionName: 'components_elements_single_images';
  info: {
    displayName: 'Single Image';
    icon: 'file-image';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsSliderText extends Schema.Component {
  collectionName: 'components_elements_slider_texts';
  info: {
    displayName: 'Slider Text';
    icon: 'text-width';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface ElementsSocialIcon extends Schema.Component {
  collectionName: 'components_elements_social_icons';
  info: {
    displayName: 'Social Icon';
    icon: 'link';
    description: '';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    icon: Attribute.Enumeration<
      ['facebook', 'twitter', 'instagram', 'linkedin']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'facebook'>;
  };
}

export interface SeoSeoMeta extends Schema.Component {
  collectionName: 'components_seo_seo_metas';
  info: {
    displayName: 'SEO Meta';
    icon: 'globe';
    description: '';
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
      'blocks.contacts-block': BlocksContactsBlock;
      'blocks.featured-box': BlocksFeaturedBox;
      'blocks.featured-work': BlocksFeaturedWork;
      'blocks.heading': BlocksHeading;
      'blocks.image-grid': BlocksImageGrid;
      'blocks.image': BlocksImage;
      'blocks.location-map': BlocksLocationMap;
      'blocks.members': BlocksMembers;
      'blocks.posts-grid': BlocksPostsGrid;
      'blocks.recent-testimonials': BlocksRecentTestimonials;
      'blocks.services-list': BlocksServicesList;
      'blocks.services-slider': BlocksServicesSlider;
      'blocks.text-block': BlocksTextBlock;
      'blocks.text-slider': BlocksTextSlider;
      'blocks.works-grid': BlocksWorksGrid;
      'blocks.you-tube-video': BlocksYouTubeVideo;
      'elements.clientele-item': ElementsClienteleItem;
      'elements.contact': ElementsContact;
      'elements.member': ElementsMember;
      'elements.nav-item': ElementsNavItem;
      'elements.paragraph': ElementsParagraph;
      'elements.single-image': ElementsSingleImage;
      'elements.slider-text': ElementsSliderText;
      'elements.social-icon': ElementsSocialIcon;
      'seo.seo-meta': SeoSeoMeta;
    }
  }
}
