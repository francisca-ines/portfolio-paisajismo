import type { PlantIndex } from "@/domain/plant";
import type { ProjectBlock } from "@/domain/project";
import { GalleryBlock } from "./gallery-block";
import { ImageNotesBlock } from "./image-notes-block";
import { IntroBlock } from "./intro-block";
import { PlansBlock } from "./plans-block";
import { PlantGroupsBlock } from "./plant-groups-block";
import { PlantSelectionBlock } from "./plant-selection-block";
import { SectorBlock } from "./sector-block";

type Props = { blocks: ProjectBlock[]; plants: PlantIndex };

export function ProjectBlocks({ blocks, plants }: Props) {
  return (
    <div className="space-y-24 md:space-y-36">
      {blocks.map((block, i) => (
        <Block key={`${block.type}-${i}`} block={block} plants={plants} />
      ))}
    </div>
  );
}

function Block({ block, plants }: { block: ProjectBlock; plants: PlantIndex }) {
  switch (block.type) {
    case "intro":
      return <IntroBlock block={block} />;
    case "plans":
      return <PlansBlock block={block} />;
    case "sector":
      return <SectorBlock block={block} plants={plants} />;
    case "plantGroups":
      return <PlantGroupsBlock block={block} />;
    case "imageNotes":
      return <ImageNotesBlock block={block} />;
    case "gallery":
      return <GalleryBlock block={block} />;
    case "plantSelection":
      return <PlantSelectionBlock block={block} plants={plants} />;
  }
}
