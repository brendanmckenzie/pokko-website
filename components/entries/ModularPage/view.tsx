import * as React from "react";
import {
  ModularPageBodyFragment,
  ModularPageContentFragment,
} from "../../../pokko/queries";
import { Footer } from "../../Footer/module";
import { Metadata } from "../../Metadata";
import { Banner } from "../../modules/Banner/module";
import { EarlyAccessFormModule } from "../../modules/EarlyAccessForm/module";
import { FeatureTilesModule } from "../../modules/FeatureTiles/module";
import { HeroModule } from "../../modules/Hero/module";
import { IconTilesModule } from "../../modules/IconTiles/module";
import { ResourceTileModule } from "../../modules/ResourceTile/module";
import { RichTextModule } from "../../modules/RichText/module";

export type ModularPageProps = {
  entry: ModularPageContentFragment;
};

export const ModularPage: React.FC<ModularPageProps> = ({ entry }) => (
  <>
    <Metadata entry={entry} />

    <Banner
      icon={
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.71999 1.80007C9.3054 1.79601 8.89104 1.94989 8.5746 2.26653L5.87461 4.9682C5.24173 5.60147 5.24173 6.62713 5.87461 7.2604L6.95461 8.34107L2.70001 12.5983V15.3H5.4V13.679H7.02V12.058H8.63999L9.6546 11.0427L10.7346 12.1234C11.3675 12.7567 12.3925 12.7567 13.0254 12.1234L15.7254 9.42174C16.3582 8.78847 16.3582 7.76227 15.7254 7.12954L10.8654 2.28236C10.5489 1.96572 10.1346 1.80412 9.71999 1.80007ZM10.8 4.4933C10.9381 4.4933 11.0762 4.54596 11.1818 4.6516L13.3418 6.81294C13.5529 7.02421 13.5529 7.36573 13.3418 7.577C13.2365 7.68237 13.0982 7.7353 12.96 7.7353C12.8217 7.7353 12.6835 7.68237 12.5782 7.577L10.4182 5.41566C10.207 5.20439 10.207 4.86287 10.4182 4.6516C10.5238 4.54596 10.6619 4.4933 10.8 4.4933Z"
            fill="black"
          />
        </svg>
      }
      body="Early access is now open!"
    />
    {entry.body.map((ent, idx) => (
      <ModuleHandler key={idx} {...ent} />
    ))}
    <Footer />
  </>
);

const ModuleHandler: React.FC<ModularPageBodyFragment> = (props) => {
  switch (props.__typename) {
    case "Hero":
      return <HeroModule {...props} />;
    case "IconTiles":
      return <IconTilesModule {...props} />;
    case "FeatureTiles":
      return <FeatureTilesModule {...props} />;
    case "ResourceTiles":
      return <ResourceTileModule {...props} />;
    case "EarlyAccessForm":
      return <EarlyAccessFormModule {...props} />;
    case "RichText":
      return <RichTextModule {...props} />;
    default:
      return (
        <pre>
          unhandled module: {props.__typename} - {JSON.stringify(props)}
        </pre>
      );
  }
};
