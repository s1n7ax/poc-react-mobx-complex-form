import { ComponentType } from "./ComponentType";

export interface BaseComponentModel {
  id: number;
  name: string;
  type: ComponentType;
}

export interface AtomicComponentModel<T, Y> {
  value: T;
  error: Y;
}

export interface GroupComponentModel<Y> {
  error: Y;
  components: BaseComponentModel[];
}
