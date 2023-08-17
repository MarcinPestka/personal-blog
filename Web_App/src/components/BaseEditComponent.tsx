import { SectionTypeEnum } from "../services/SectionService";
import { CodeEditComponent } from "./Sections/CodeSection/CodeEditComponent";
import { TitleEditComponent } from "./Sections/TitleComponent/TitleEditComponent";
import { TitleNoImageEditComponent } from "./Sections/TitleNoImageComponent/TitleNoImageEditComponent";

export function BaseEditComponent({sectionType}:{sectionType:SectionTypeEnum | undefined}) {
  var Component;

  (() => {
    switch (sectionType) {
      case SectionTypeEnum.Title:
        Component = <TitleEditComponent/>
        break;
      case SectionTypeEnum.CodeBlockSection:
        Component = <CodeEditComponent/>
        break;
        case SectionTypeEnum.TitleNoImage:
          Component = <TitleNoImageEditComponent/>
          break;
    }
  })();

  return Component;
}
