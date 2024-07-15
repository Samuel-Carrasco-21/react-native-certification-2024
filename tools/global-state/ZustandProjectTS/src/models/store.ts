import { Action } from "../store/actions/action";
import { State } from "../store/states/state";

export type StoreAdditionalFunction = {
  clearAll: () => void;
};

export type GlobalStore = State & Action;
