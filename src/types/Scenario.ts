import { ScenarioLink } from "./ScenarioLink";
import { ScenarioType } from "./ScenarioType";

export type Scenario = {
  id: number,
  name: string,
  type: ScenarioType,
  predecessors: ScenarioLink[]
}
