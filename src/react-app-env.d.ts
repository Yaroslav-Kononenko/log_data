// eslint-disable-next-line
/// <reference types="react-scripts" />
export interface Tests {
  abcent: boolean,
  concept: string,
  data: string,
  expSpeed: string,
  label: string,
  score: number,
  speed: string,
  total: number,
}

export interface PersonFromServer {
  class: string,
  id: number,
  name: string,
  parents?: string[],
  score: string,
  speed: string,
  tests?: Tests[],
}

export interface Data {
  data: PersonFromServer[],
  totalCount: number,
  totalPages: number,
}
