import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  entries?: Maybe<Entries>;
  entry?: Maybe<PokEntry>;
  sync?: Maybe<SyncCollection>;
  taxonomy?: Maybe<PageCollection>;
};


export type QueryEntryArgs = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
};


export type QuerySyncArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: Maybe<SyncCondition>;
};


export type QueryTaxonomyArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: Maybe<PagesCondition>;
};

export type Entries = {
  __typename?: 'Entries';
  tiles?: Maybe<Tiles>;
  modularPage?: Maybe<ModularPage>;
  featureTile?: Maybe<FeatureTile>;
  metadata?: Maybe<Metadata>;
  iconTile?: Maybe<IconTile>;
  earlyAccessForm?: Maybe<EarlyAccessForm>;
  iconTiles?: Maybe<IconTiles>;
  section?: Maybe<Section>;
  blogPost?: Maybe<BlogPost>;
  richText?: Maybe<RichText>;
  hero?: Maybe<Hero>;
  featureTiles?: Maybe<FeatureTiles>;
  resourceTiles?: Maybe<ResourceTiles>;
  tile?: Maybe<Tile>;
  contentPage?: Maybe<ContentPage>;
  resourceTile?: Maybe<ResourceTile>;
  link?: Maybe<Link>;
  allTiles?: Maybe<TilesCollection>;
  allModularPage?: Maybe<ModularPageCollection>;
  allFeatureTile?: Maybe<FeatureTileCollection>;
  allMetadata?: Maybe<MetadataCollection>;
  allIconTile?: Maybe<IconTileCollection>;
  allEarlyAccessForm?: Maybe<EarlyAccessFormCollection>;
  allIconTiles?: Maybe<IconTilesCollection>;
  allSection?: Maybe<SectionCollection>;
  allBlogPost?: Maybe<BlogPostCollection>;
  allRichText?: Maybe<RichTextCollection>;
  allHero?: Maybe<HeroCollection>;
  allFeatureTiles?: Maybe<FeatureTilesCollection>;
  allResourceTiles?: Maybe<ResourceTilesCollection>;
  allTile?: Maybe<TileCollection>;
  allContentPage?: Maybe<ContentPageCollection>;
  allResourceTile?: Maybe<ResourceTileCollection>;
  allLink?: Maybe<LinkCollection>;
};


export type EntriesTilesArgs = {
  id: Scalars['String'];
};


export type EntriesModularPageArgs = {
  id: Scalars['String'];
};


export type EntriesFeatureTileArgs = {
  id: Scalars['String'];
};


export type EntriesMetadataArgs = {
  id: Scalars['String'];
};


export type EntriesIconTileArgs = {
  id: Scalars['String'];
};


export type EntriesEarlyAccessFormArgs = {
  id: Scalars['String'];
};


export type EntriesIconTilesArgs = {
  id: Scalars['String'];
};


export type EntriesSectionArgs = {
  id: Scalars['String'];
};


export type EntriesBlogPostArgs = {
  id: Scalars['String'];
};


export type EntriesRichTextArgs = {
  id: Scalars['String'];
};


export type EntriesHeroArgs = {
  id: Scalars['String'];
};


export type EntriesFeatureTilesArgs = {
  id: Scalars['String'];
};


export type EntriesResourceTilesArgs = {
  id: Scalars['String'];
};


export type EntriesTileArgs = {
  id: Scalars['String'];
};


export type EntriesContentPageArgs = {
  id: Scalars['String'];
};


export type EntriesResourceTileArgs = {
  id: Scalars['String'];
};


export type EntriesLinkArgs = {
  id: Scalars['String'];
};


export type EntriesAllTilesArgs = {
  condition?: Maybe<TilesFilter>;
  orderBy?: Maybe<TilesOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllModularPageArgs = {
  condition?: Maybe<ModularPageFilter>;
  orderBy?: Maybe<ModularPageOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllFeatureTileArgs = {
  condition?: Maybe<FeatureTileFilter>;
  orderBy?: Maybe<FeatureTileOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllMetadataArgs = {
  condition?: Maybe<MetadataFilter>;
  orderBy?: Maybe<MetadataOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllIconTileArgs = {
  condition?: Maybe<IconTileFilter>;
  orderBy?: Maybe<IconTileOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllEarlyAccessFormArgs = {
  condition?: Maybe<EarlyAccessFormFilter>;
  orderBy?: Maybe<EarlyAccessFormOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllIconTilesArgs = {
  condition?: Maybe<IconTilesFilter>;
  orderBy?: Maybe<IconTilesOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllSectionArgs = {
  condition?: Maybe<SectionFilter>;
  orderBy?: Maybe<SectionOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllBlogPostArgs = {
  condition?: Maybe<BlogPostFilter>;
  orderBy?: Maybe<BlogPostOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllRichTextArgs = {
  condition?: Maybe<RichTextFilter>;
  orderBy?: Maybe<RichTextOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHeroArgs = {
  condition?: Maybe<HeroFilter>;
  orderBy?: Maybe<HeroOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllFeatureTilesArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllResourceTilesArgs = {
  condition?: Maybe<ResourceTilesFilter>;
  orderBy?: Maybe<ResourceTilesOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllTileArgs = {
  condition?: Maybe<TileFilter>;
  orderBy?: Maybe<TileOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllContentPageArgs = {
  condition?: Maybe<ContentPageFilter>;
  orderBy?: Maybe<ContentPageOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllResourceTileArgs = {
  condition?: Maybe<ResourceTileFilter>;
  orderBy?: Maybe<ResourceTileOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllLinkArgs = {
  condition?: Maybe<LinkFilter>;
  orderBy?: Maybe<LinkOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type Tiles = PokEntry & PokValue & ITiles & ISection & {
  __typename?: 'Tiles';
  id: Scalars['String'];
  pokko: Pokko;
  body?: Maybe<Array<Maybe<Tile>>>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PokEntry = {
  id: Scalars['String'];
  pokko: Pokko;
};

export type Pokko = {
  __typename?: 'Pokko';
  id: Scalars['String'];
  model: Scalars['String'];
  name: Scalars['String'];
  created: Scalars['String'];
  modified: Scalars['String'];
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PokValue = {
  id?: Maybe<Scalars['String']>;
};

export type ITiles = {
  id: Scalars['String'];
  body?: Maybe<Array<Maybe<Tile>>>;
};

export type Tile = PokEntry & PokValue & ITile & {
  __typename?: 'Tile';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type ITile = {
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type ISection = {
  id: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ModularPage = PokEntry & PokValue & IModularPage & IMetadata & {
  __typename?: 'ModularPage';
  id: Scalars['String'];
  pokko: Pokko;
  metaDescription?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<ModularPage_Body>>>;
  metaImage?: Maybe<PokMedia>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type IModularPage = {
  id: Scalars['String'];
  body?: Maybe<Array<Maybe<ModularPage_Body>>>;
};

export type ModularPage_Body = Hero | ResourceTiles | IconTiles | Tiles | FeatureTiles | EarlyAccessForm | RichText;

export type Hero = PokEntry & PokValue & IHero & {
  __typename?: 'Hero';
  id: Scalars['String'];
  pokko: Pokko;
  image?: Maybe<PokMedia>;
  link?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type IHero = {
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
  link?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PokMedia = {
  __typename?: 'PokMedia';
  id: Scalars['String'];
  url: Scalars['String'];
};


export type PokMediaUrlArgs = {
  process?: Maybe<PokMediaProcess>;
};

export type PokMediaProcess = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  fit?: Maybe<PokMediaFit>;
  position?: Maybe<PokMediaPosition>;
};

export enum PokMediaFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum PokMediaPosition {
  Centre = 'CENTRE',
  Top = 'TOP',
  RightTop = 'RIGHT_TOP',
  Right = 'RIGHT',
  RightBottom = 'RIGHT_BOTTOM',
  Bottom = 'BOTTOM',
  LeftBottom = 'LEFT_BOTTOM',
  Left = 'LEFT',
  LeftTop = 'LEFT_TOP'
}

export type Link = PokEntry & PokValue & ILink & {
  __typename?: 'Link';
  id: Scalars['String'];
  pokko: Pokko;
  target?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ILink = {
  id: Scalars['String'];
  target?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ResourceTiles = PokEntry & PokValue & IResourceTiles & ISection & {
  __typename?: 'ResourceTiles';
  id: Scalars['String'];
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<ResourceTile>>>;
};

export type IResourceTiles = {
  id: Scalars['String'];
  body?: Maybe<Array<Maybe<ResourceTile>>>;
};

export type ResourceTile = PokEntry & PokValue & IResourceTile & ITile & {
  __typename?: 'ResourceTile';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  body?: Maybe<Scalars['String']>;
};

export type IResourceTile = {
  id: Scalars['String'];
  link?: Maybe<Link>;
};

export type IconTiles = PokEntry & PokValue & IIconTiles & ISection & {
  __typename?: 'IconTiles';
  id: Scalars['String'];
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<IconTile>>>;
  layout?: Maybe<Scalars['String']>;
};

export type IIconTiles = {
  id: Scalars['String'];
  body?: Maybe<Array<Maybe<IconTile>>>;
  layout?: Maybe<Scalars['String']>;
};

export type IconTile = PokEntry & PokValue & IIconTile & ITile & {
  __typename?: 'IconTile';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  icon?: Maybe<PokMedia>;
};

export type IIconTile = {
  id: Scalars['String'];
  icon?: Maybe<PokMedia>;
};

export type FeatureTiles = PokEntry & PokValue & IFeatureTiles & {
  __typename?: 'FeatureTiles';
  id: Scalars['String'];
  pokko: Pokko;
  body?: Maybe<Array<Maybe<FeatureTile>>>;
};

export type IFeatureTiles = {
  id: Scalars['String'];
  body?: Maybe<Array<Maybe<FeatureTile>>>;
};

export type FeatureTile = PokEntry & PokValue & IFeatureTile & ITile & IIconTile & {
  __typename?: 'FeatureTile';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  icon?: Maybe<PokMedia>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IFeatureTile = {
  id: Scalars['String'];
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EarlyAccessForm = PokEntry & PokValue & IEarlyAccessForm & {
  __typename?: 'EarlyAccessForm';
  id: Scalars['String'];
  pokko: Pokko;
  style?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
};

export type IEarlyAccessForm = {
  id: Scalars['String'];
  style?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
};

export type RichText = PokEntry & PokValue & IRichText & {
  __typename?: 'RichText';
  id: Scalars['String'];
  pokko: Pokko;
  body?: Maybe<Scalars['JSON']>;
};

export type IRichText = {
  id: Scalars['String'];
  body?: Maybe<Scalars['JSON']>;
};


export type IMetadata = {
  id: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<PokMedia>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type Metadata = PokEntry & PokValue & IMetadata & {
  __typename?: 'Metadata';
  id: Scalars['String'];
  pokko: Pokko;
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<PokMedia>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type Section = PokEntry & PokValue & ISection & {
  __typename?: 'Section';
  id: Scalars['String'];
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BlogPost = PokEntry & PokValue & IBlogPost & IModularPage & IContentPage & IMetadata & {
  __typename?: 'BlogPost';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<ModularPage_Body>>>;
  metaImage?: Maybe<PokMedia>;
  alias?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type IBlogPost = {
  id: Scalars['String'];
  date?: Maybe<Scalars['String']>;
};

export type IContentPage = {
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
};

export type ContentPage = PokEntry & PokValue & IContentPage & IModularPage & IMetadata & {
  __typename?: 'ContentPage';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<ModularPage_Body>>>;
  metaImage?: Maybe<PokMedia>;
  alias?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type TilesCollection = {
  __typename?: 'TilesCollection';
  nodes: Array<Maybe<Tiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
};

export type TilesFilter = {
  /** Filter on the Summary field */
  summary?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum TilesOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type ModularPageCollection = {
  __typename?: 'ModularPageCollection';
  nodes: Array<Maybe<ModularPage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ModularPageFilter = {
  /** Filter on the Meta description field */
  metaDescription?: Maybe<Scalars['String']>;
  /** Filter on the Meta title field */
  metaTitle?: Maybe<Scalars['String']>;
};

export enum ModularPageOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  MetaDescriptionAsc = 'META_DESCRIPTION_ASC',
  MetaDescriptionDesc = 'META_DESCRIPTION_DESC',
  MetaTitleAsc = 'META_TITLE_ASC',
  MetaTitleDesc = 'META_TITLE_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type FeatureTileCollection = {
  __typename?: 'FeatureTileCollection';
  nodes: Array<Maybe<FeatureTile>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FeatureTileFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
  /** Filter on the Features field */
  features?: Maybe<Scalars['String']>;
};

export enum FeatureTileOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  FeaturesAsc = 'FEATURES_ASC',
  FeaturesDesc = 'FEATURES_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type MetadataCollection = {
  __typename?: 'MetadataCollection';
  nodes: Array<Maybe<Metadata>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MetadataFilter = {
  /** Filter on the Meta description field */
  metaDescription?: Maybe<Scalars['String']>;
  /** Filter on the Meta title field */
  metaTitle?: Maybe<Scalars['String']>;
};

export enum MetadataOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  MetaDescriptionAsc = 'META_DESCRIPTION_ASC',
  MetaDescriptionDesc = 'META_DESCRIPTION_DESC',
  MetaTitleAsc = 'META_TITLE_ASC',
  MetaTitleDesc = 'META_TITLE_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type IconTileCollection = {
  __typename?: 'IconTileCollection';
  nodes: Array<Maybe<IconTile>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IconTileFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
};

export enum IconTileOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type EarlyAccessFormCollection = {
  __typename?: 'EarlyAccessFormCollection';
  nodes: Array<Maybe<EarlyAccessForm>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EarlyAccessFormFilter = {
  /** Filter on the Style field */
  style?: Maybe<Scalars['String']>;
  /** Filter on the Summary field */
  summary?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum EarlyAccessFormOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  StyleAsc = 'STYLE_ASC',
  StyleDesc = 'STYLE_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type IconTilesCollection = {
  __typename?: 'IconTilesCollection';
  nodes: Array<Maybe<IconTiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IconTilesFilter = {
  /** Filter on the Summary field */
  summary?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Layout field */
  layout?: Maybe<Scalars['String']>;
};

export enum IconTilesOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  LayoutAsc = 'LAYOUT_ASC',
  LayoutDesc = 'LAYOUT_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type SectionCollection = {
  __typename?: 'SectionCollection';
  nodes: Array<Maybe<Section>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SectionFilter = {
  /** Filter on the Summary field */
  summary?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum SectionOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection';
  nodes: Array<Maybe<BlogPost>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlogPostFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Date field */
  date?: Maybe<Scalars['String']>;
  /** Filter on the Meta description field */
  metaDescription?: Maybe<Scalars['String']>;
  /** Filter on the Alias field */
  alias?: Maybe<Scalars['String']>;
  /** Filter on the Meta title field */
  metaTitle?: Maybe<Scalars['String']>;
};

export enum BlogPostOrderBy {
  AliasAsc = 'ALIAS_ASC',
  AliasDesc = 'ALIAS_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  MetaDescriptionAsc = 'META_DESCRIPTION_ASC',
  MetaDescriptionDesc = 'META_DESCRIPTION_DESC',
  MetaTitleAsc = 'META_TITLE_ASC',
  MetaTitleDesc = 'META_TITLE_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type RichTextCollection = {
  __typename?: 'RichTextCollection';
  nodes: Array<Maybe<RichText>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RichTextFilter = {
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
};

export enum RichTextOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type HeroCollection = {
  __typename?: 'HeroCollection';
  nodes: Array<Maybe<Hero>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HeroFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
};

export enum HeroOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type FeatureTilesCollection = {
  __typename?: 'FeatureTilesCollection';
  nodes: Array<Maybe<FeatureTiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceTilesCollection = {
  __typename?: 'ResourceTilesCollection';
  nodes: Array<Maybe<ResourceTiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceTilesFilter = {
  /** Filter on the Summary field */
  summary?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum ResourceTilesOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type TileCollection = {
  __typename?: 'TileCollection';
  nodes: Array<Maybe<Tile>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TileFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
};

export enum TileOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type ContentPageCollection = {
  __typename?: 'ContentPageCollection';
  nodes: Array<Maybe<ContentPage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContentPageFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Meta description field */
  metaDescription?: Maybe<Scalars['String']>;
  /** Filter on the Alias field */
  alias?: Maybe<Scalars['String']>;
  /** Filter on the Meta title field */
  metaTitle?: Maybe<Scalars['String']>;
};

export enum ContentPageOrderBy {
  AliasAsc = 'ALIAS_ASC',
  AliasDesc = 'ALIAS_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  MetaDescriptionAsc = 'META_DESCRIPTION_ASC',
  MetaDescriptionDesc = 'META_DESCRIPTION_DESC',
  MetaTitleAsc = 'META_TITLE_ASC',
  MetaTitleDesc = 'META_TITLE_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type ResourceTileCollection = {
  __typename?: 'ResourceTileCollection';
  nodes: Array<Maybe<ResourceTile>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceTileFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
};

export enum ResourceTileOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type LinkCollection = {
  __typename?: 'LinkCollection';
  nodes: Array<Maybe<Link>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LinkFilter = {
  /** Filter on the Target field */
  target?: Maybe<Scalars['String']>;
  /** Filter on the Text field */
  text?: Maybe<Scalars['String']>;
};

export enum LinkOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TargetAsc = 'TARGET_ASC',
  TargetDesc = 'TARGET_DESC',
  TextAsc = 'TEXT_ASC',
  TextDesc = 'TEXT_DESC'
}

export type SyncCollection = {
  __typename?: 'SyncCollection';
  nodes: Array<Maybe<Sync>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Sync = {
  __typename?: 'Sync';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['JSON']>;
};

export type SyncCondition = {
  after?: Maybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  nodes: Array<Maybe<Page>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Page = {
  __typename?: 'Page';
  fullPath?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  entry?: Maybe<PokEntry>;
  type?: Maybe<Scalars['String']>;
  entryId?: Maybe<Scalars['String']>;
};

export type PagesCondition = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathExact?: Maybe<Scalars['Boolean']>;
};

type ModularPageContent_ModularPage_Fragment = (
  { __typename?: 'ModularPage' }
  & { body?: Maybe<Array<Maybe<(
    { __typename?: 'Hero' }
    & ModularPageBody_Hero_Fragment
  ) | (
    { __typename?: 'ResourceTiles' }
    & ModularPageBody_ResourceTiles_Fragment
  ) | (
    { __typename?: 'IconTiles' }
    & ModularPageBody_IconTiles_Fragment
  ) | (
    { __typename?: 'Tiles' }
    & ModularPageBody_Tiles_Fragment
  ) | (
    { __typename?: 'FeatureTiles' }
    & ModularPageBody_FeatureTiles_Fragment
  ) | (
    { __typename?: 'EarlyAccessForm' }
    & ModularPageBody_EarlyAccessForm_Fragment
  ) | (
    { __typename?: 'RichText' }
    & ModularPageBody_RichText_Fragment
  )>>> }
  & MetadataContent_ModularPage_Fragment
);

type ModularPageContent_BlogPost_Fragment = (
  { __typename?: 'BlogPost' }
  & { body?: Maybe<Array<Maybe<(
    { __typename?: 'Hero' }
    & ModularPageBody_Hero_Fragment
  ) | (
    { __typename?: 'ResourceTiles' }
    & ModularPageBody_ResourceTiles_Fragment
  ) | (
    { __typename?: 'IconTiles' }
    & ModularPageBody_IconTiles_Fragment
  ) | (
    { __typename?: 'Tiles' }
    & ModularPageBody_Tiles_Fragment
  ) | (
    { __typename?: 'FeatureTiles' }
    & ModularPageBody_FeatureTiles_Fragment
  ) | (
    { __typename?: 'EarlyAccessForm' }
    & ModularPageBody_EarlyAccessForm_Fragment
  ) | (
    { __typename?: 'RichText' }
    & ModularPageBody_RichText_Fragment
  )>>> }
  & MetadataContent_BlogPost_Fragment
);

type ModularPageContent_ContentPage_Fragment = (
  { __typename?: 'ContentPage' }
  & { body?: Maybe<Array<Maybe<(
    { __typename?: 'Hero' }
    & ModularPageBody_Hero_Fragment
  ) | (
    { __typename?: 'ResourceTiles' }
    & ModularPageBody_ResourceTiles_Fragment
  ) | (
    { __typename?: 'IconTiles' }
    & ModularPageBody_IconTiles_Fragment
  ) | (
    { __typename?: 'Tiles' }
    & ModularPageBody_Tiles_Fragment
  ) | (
    { __typename?: 'FeatureTiles' }
    & ModularPageBody_FeatureTiles_Fragment
  ) | (
    { __typename?: 'EarlyAccessForm' }
    & ModularPageBody_EarlyAccessForm_Fragment
  ) | (
    { __typename?: 'RichText' }
    & ModularPageBody_RichText_Fragment
  )>>> }
  & MetadataContent_ContentPage_Fragment
);

export type ModularPageContentFragment = ModularPageContent_ModularPage_Fragment | ModularPageContent_BlogPost_Fragment | ModularPageContent_ContentPage_Fragment;

type ContentPageContent_BlogPost_Fragment = (
  { __typename?: 'BlogPost' }
  & Pick<BlogPost, 'alias' | 'title'>
  & ModularPageContent_BlogPost_Fragment
);

type ContentPageContent_ContentPage_Fragment = (
  { __typename?: 'ContentPage' }
  & Pick<ContentPage, 'alias' | 'title'>
  & ModularPageContent_ContentPage_Fragment
);

export type ContentPageContentFragment = ContentPageContent_BlogPost_Fragment | ContentPageContent_ContentPage_Fragment;

export type BlogPostContentFragment = (
  { __typename?: 'BlogPost' }
  & Pick<BlogPost, 'date'>
  & ContentPageContent_BlogPost_Fragment
);

type MetadataContent_ModularPage_Fragment = (
  { __typename?: 'ModularPage' }
  & Pick<ModularPage, 'metaDescription' | 'metaTitle'>
);

type MetadataContent_Metadata_Fragment = (
  { __typename?: 'Metadata' }
  & Pick<Metadata, 'metaDescription' | 'metaTitle'>
);

type MetadataContent_BlogPost_Fragment = (
  { __typename?: 'BlogPost' }
  & Pick<BlogPost, 'metaDescription' | 'metaTitle'>
);

type MetadataContent_ContentPage_Fragment = (
  { __typename?: 'ContentPage' }
  & Pick<ContentPage, 'metaDescription' | 'metaTitle'>
);

export type MetadataContentFragment = MetadataContent_ModularPage_Fragment | MetadataContent_Metadata_Fragment | MetadataContent_BlogPost_Fragment | MetadataContent_ContentPage_Fragment;

type ModularPageBody_Tiles_Fragment = { __typename: 'Tiles' };

type ModularPageBody_Tile_Fragment = { __typename: 'Tile' };

type ModularPageBody_ModularPage_Fragment = { __typename: 'ModularPage' };

type ModularPageBody_Hero_Fragment = (
  { __typename: 'Hero' }
  & HeroModuleFragment
);

type ModularPageBody_Link_Fragment = { __typename: 'Link' };

type ModularPageBody_ResourceTiles_Fragment = (
  { __typename: 'ResourceTiles' }
  & ResourceTileModuleFragment
);

type ModularPageBody_ResourceTile_Fragment = { __typename: 'ResourceTile' };

type ModularPageBody_IconTiles_Fragment = (
  { __typename: 'IconTiles' }
  & IconTilesModuleFragment
);

type ModularPageBody_IconTile_Fragment = { __typename: 'IconTile' };

type ModularPageBody_FeatureTiles_Fragment = (
  { __typename: 'FeatureTiles' }
  & FeatureTilesModuleFragment
);

type ModularPageBody_FeatureTile_Fragment = { __typename: 'FeatureTile' };

type ModularPageBody_EarlyAccessForm_Fragment = (
  { __typename: 'EarlyAccessForm' }
  & EarlyAccessFormModuleFragment
);

type ModularPageBody_RichText_Fragment = (
  { __typename: 'RichText' }
  & RichTextModuleFragment
);

type ModularPageBody_Metadata_Fragment = { __typename: 'Metadata' };

type ModularPageBody_Section_Fragment = { __typename: 'Section' };

type ModularPageBody_BlogPost_Fragment = { __typename: 'BlogPost' };

type ModularPageBody_ContentPage_Fragment = { __typename: 'ContentPage' };

export type ModularPageBodyFragment = ModularPageBody_Tiles_Fragment | ModularPageBody_Tile_Fragment | ModularPageBody_ModularPage_Fragment | ModularPageBody_Hero_Fragment | ModularPageBody_Link_Fragment | ModularPageBody_ResourceTiles_Fragment | ModularPageBody_ResourceTile_Fragment | ModularPageBody_IconTiles_Fragment | ModularPageBody_IconTile_Fragment | ModularPageBody_FeatureTiles_Fragment | ModularPageBody_FeatureTile_Fragment | ModularPageBody_EarlyAccessForm_Fragment | ModularPageBody_RichText_Fragment | ModularPageBody_Metadata_Fragment | ModularPageBody_Section_Fragment | ModularPageBody_BlogPost_Fragment | ModularPageBody_ContentPage_Fragment;

export type HeroModuleFragment = (
  { __typename?: 'Hero' }
  & Pick<Hero, 'title'>
  & { heroBody: Hero['body'] }
  & { link?: Maybe<(
    { __typename?: 'Link' }
    & Pick<Link, 'target' | 'text'>
  )>, image?: Maybe<(
    { __typename?: 'PokMedia' }
    & Pick<PokMedia, 'url'>
  )> }
);

export type IconTilesModuleFragment = (
  { __typename?: 'IconTiles' }
  & Pick<IconTiles, 'layout' | 'title' | 'summary'>
  & { iconTileBody?: Maybe<Array<Maybe<(
    { __typename?: 'IconTile' }
    & Pick<IconTile, 'title' | 'body'>
    & { icon?: Maybe<(
      { __typename?: 'PokMedia' }
      & Pick<PokMedia, 'url'>
    )> }
  )>>> }
);

export type FeatureTilesModuleFragment = (
  { __typename?: 'FeatureTiles' }
  & { featureTilesBody?: Maybe<Array<Maybe<(
    { __typename?: 'FeatureTile' }
    & Pick<FeatureTile, 'title' | 'body' | 'features'>
    & { icon?: Maybe<(
      { __typename?: 'PokMedia' }
      & Pick<PokMedia, 'url'>
    )> }
  )>>> }
);

export type ResourceTileModuleFragment = (
  { __typename?: 'ResourceTiles' }
  & Pick<ResourceTiles, 'title' | 'summary'>
  & { resourceTilesBody?: Maybe<Array<Maybe<(
    { __typename?: 'ResourceTile' }
    & Pick<ResourceTile, 'title' | 'body'>
    & { link?: Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'text' | 'target'>
    )> }
  )>>> }
);

export type EarlyAccessFormModuleFragment = (
  { __typename?: 'EarlyAccessForm' }
  & Pick<EarlyAccessForm, 'style' | 'title' | 'summary'>
  & { link?: Maybe<(
    { __typename?: 'Link' }
    & Pick<Link, 'text' | 'target'>
  )> }
);

export type RichTextModuleFragment = (
  { __typename?: 'RichText' }
  & Pick<RichText, 'body'>
);

export type GetPageByPathQueryVariables = Exact<{
  path: Array<Scalars['String']>;
}>;


export type GetPageByPathQuery = (
  { __typename?: 'Query' }
  & { entry?: Maybe<{ __typename?: 'Tiles' } | { __typename?: 'Tile' } | (
    { __typename?: 'ModularPage' }
    & ModularPageContent_ModularPage_Fragment
  ) | { __typename?: 'Hero' } | { __typename?: 'Link' } | { __typename?: 'ResourceTiles' } | { __typename?: 'ResourceTile' } | { __typename?: 'IconTiles' } | { __typename?: 'IconTile' } | { __typename?: 'FeatureTiles' } | { __typename?: 'FeatureTile' } | { __typename?: 'EarlyAccessForm' } | { __typename?: 'RichText' } | { __typename?: 'Metadata' } | { __typename?: 'Section' } | (
    { __typename?: 'BlogPost' }
    & ModularPageContent_BlogPost_Fragment
    & BlogPostContentFragment
    & ContentPageContent_BlogPost_Fragment
  ) | (
    { __typename?: 'ContentPage' }
    & ModularPageContent_ContentPage_Fragment
    & ContentPageContent_ContentPage_Fragment
  )> }
);

export type GetDynamicPagePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDynamicPagePathsQuery = (
  { __typename?: 'Query' }
  & { taxonomy?: Maybe<(
    { __typename?: 'PageCollection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Page' }
      & Pick<Page, 'path' | 'entryId'>
    )>> }
  )> }
);

export const MetadataContentFragmentDoc = gql`
    fragment MetadataContent on IMetadata {
  metaDescription
  metaTitle
}
    `;
export const HeroModuleFragmentDoc = gql`
    fragment HeroModule on Hero {
  title
  heroBody: body
  link {
    ... on Link {
      target
      text
    }
  }
  image {
    url
  }
}
    `;
export const IconTilesModuleFragmentDoc = gql`
    fragment IconTilesModule on IconTiles {
  layout
  title
  summary
  iconTileBody: body {
    ... on IconTile {
      title
      body
      icon {
        url
      }
    }
  }
}
    `;
export const FeatureTilesModuleFragmentDoc = gql`
    fragment FeatureTilesModule on FeatureTiles {
  featureTilesBody: body {
    ... on FeatureTile {
      title
      body
      features
      icon {
        url
      }
    }
  }
}
    `;
export const ResourceTileModuleFragmentDoc = gql`
    fragment ResourceTileModule on ResourceTiles {
  title
  summary
  resourceTilesBody: body {
    ... on ResourceTile {
      title
      body
      link {
        ... on Link {
          text
          target
        }
      }
    }
  }
}
    `;
export const EarlyAccessFormModuleFragmentDoc = gql`
    fragment EarlyAccessFormModule on EarlyAccessForm {
  style
  title
  summary
  link {
    ... on Link {
      text
      target
    }
  }
}
    `;
export const RichTextModuleFragmentDoc = gql`
    fragment RichTextModule on RichText {
  body
}
    `;
export const ModularPageBodyFragmentDoc = gql`
    fragment ModularPageBody on PokValue {
  __typename
  ...HeroModule
  ...IconTilesModule
  ...FeatureTilesModule
  ...ResourceTileModule
  ...EarlyAccessFormModule
  ...RichTextModule
}
    ${HeroModuleFragmentDoc}
${IconTilesModuleFragmentDoc}
${FeatureTilesModuleFragmentDoc}
${ResourceTileModuleFragmentDoc}
${EarlyAccessFormModuleFragmentDoc}
${RichTextModuleFragmentDoc}`;
export const ModularPageContentFragmentDoc = gql`
    fragment ModularPageContent on IModularPage {
  ...MetadataContent
  body {
    ...ModularPageBody
  }
}
    ${MetadataContentFragmentDoc}
${ModularPageBodyFragmentDoc}`;
export const ContentPageContentFragmentDoc = gql`
    fragment ContentPageContent on IContentPage {
  ...ModularPageContent
  alias
  title
}
    ${ModularPageContentFragmentDoc}`;
export const BlogPostContentFragmentDoc = gql`
    fragment BlogPostContent on IBlogPost {
  ...ContentPageContent
  date
}
    ${ContentPageContentFragmentDoc}`;
export const GetPageByPathDocument = gql`
    query GetPageByPath($path: [String!]!) {
  entry(path: $path) {
    ...ModularPageContent
    ...BlogPostContent
    ...ContentPageContent
  }
}
    ${ModularPageContentFragmentDoc}
${BlogPostContentFragmentDoc}
${ContentPageContentFragmentDoc}`;

/**
 * __useGetPageByPathQuery__
 *
 * To run a query within a React component, call `useGetPageByPathQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageByPathQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageByPathQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useGetPageByPathQuery(baseOptions: Apollo.QueryHookOptions<GetPageByPathQuery, GetPageByPathQueryVariables>) {
        return Apollo.useQuery<GetPageByPathQuery, GetPageByPathQueryVariables>(GetPageByPathDocument, baseOptions);
      }
export function useGetPageByPathLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageByPathQuery, GetPageByPathQueryVariables>) {
          return Apollo.useLazyQuery<GetPageByPathQuery, GetPageByPathQueryVariables>(GetPageByPathDocument, baseOptions);
        }
export type GetPageByPathQueryHookResult = ReturnType<typeof useGetPageByPathQuery>;
export type GetPageByPathLazyQueryHookResult = ReturnType<typeof useGetPageByPathLazyQuery>;
export type GetPageByPathQueryResult = Apollo.QueryResult<GetPageByPathQuery, GetPageByPathQueryVariables>;
export const GetDynamicPagePathsDocument = gql`
    query GetDynamicPagePaths {
  taxonomy(filter: {path: ["website", "home"]}) {
    nodes {
      path
      entryId
    }
  }
}
    `;

/**
 * __useGetDynamicPagePathsQuery__
 *
 * To run a query within a React component, call `useGetDynamicPagePathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDynamicPagePathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDynamicPagePathsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDynamicPagePathsQuery(baseOptions?: Apollo.QueryHookOptions<GetDynamicPagePathsQuery, GetDynamicPagePathsQueryVariables>) {
        return Apollo.useQuery<GetDynamicPagePathsQuery, GetDynamicPagePathsQueryVariables>(GetDynamicPagePathsDocument, baseOptions);
      }
export function useGetDynamicPagePathsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDynamicPagePathsQuery, GetDynamicPagePathsQueryVariables>) {
          return Apollo.useLazyQuery<GetDynamicPagePathsQuery, GetDynamicPagePathsQueryVariables>(GetDynamicPagePathsDocument, baseOptions);
        }
export type GetDynamicPagePathsQueryHookResult = ReturnType<typeof useGetDynamicPagePathsQuery>;
export type GetDynamicPagePathsLazyQueryHookResult = ReturnType<typeof useGetDynamicPagePathsLazyQuery>;
export type GetDynamicPagePathsQueryResult = Apollo.QueryResult<GetDynamicPagePathsQuery, GetDynamicPagePathsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "PokEntry": [
      "Tiles",
      "Tile",
      "ModularPage",
      "Hero",
      "Link",
      "ResourceTiles",
      "ResourceTile",
      "IconTiles",
      "IconTile",
      "FeatureTiles",
      "FeatureTile",
      "EarlyAccessForm",
      "RichText",
      "Metadata",
      "Section",
      "BlogPost",
      "ContentPage"
    ],
    "PokValue": [
      "Tiles",
      "Tile",
      "ModularPage",
      "Hero",
      "Link",
      "ResourceTiles",
      "ResourceTile",
      "IconTiles",
      "IconTile",
      "FeatureTiles",
      "FeatureTile",
      "EarlyAccessForm",
      "RichText",
      "Metadata",
      "Section",
      "BlogPost",
      "ContentPage"
    ],
    "ITiles": [
      "Tiles"
    ],
    "ITile": [
      "Tile",
      "ResourceTile",
      "IconTile",
      "FeatureTile"
    ],
    "ISection": [
      "Tiles",
      "ResourceTiles",
      "IconTiles",
      "Section"
    ],
    "IModularPage": [
      "ModularPage",
      "BlogPost",
      "ContentPage"
    ],
    "ModularPage_Body": [
      "Hero",
      "ResourceTiles",
      "IconTiles",
      "Tiles",
      "FeatureTiles",
      "EarlyAccessForm",
      "RichText"
    ],
    "IHero": [
      "Hero"
    ],
    "ILink": [
      "Link"
    ],
    "IResourceTiles": [
      "ResourceTiles"
    ],
    "IResourceTile": [
      "ResourceTile"
    ],
    "IIconTiles": [
      "IconTiles"
    ],
    "IIconTile": [
      "IconTile",
      "FeatureTile"
    ],
    "IFeatureTiles": [
      "FeatureTiles"
    ],
    "IFeatureTile": [
      "FeatureTile"
    ],
    "IEarlyAccessForm": [
      "EarlyAccessForm"
    ],
    "IRichText": [
      "RichText"
    ],
    "IMetadata": [
      "ModularPage",
      "Metadata",
      "BlogPost",
      "ContentPage"
    ],
    "IBlogPost": [
      "BlogPost"
    ],
    "IContentPage": [
      "BlogPost",
      "ContentPage"
    ]
  }
};
      export default result;
    