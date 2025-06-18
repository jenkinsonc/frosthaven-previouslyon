import { JSX } from "react"

export type ScenarioLink = {
  fromId?: number,
  fromText: string,
  recap: string|JSX.Element
}