import { api } from "api";
import { createEffect, createStore } from "effector";
import { createGate } from "effector-react";
import { IDataCard } from "../../components/content/data-card/interface";

export const fetchSuggestionsFx = createEffect(async () => {
  return await api.getData();
});

export const $data = createStore<IDataCard[]>([]).on(
  fetchSuggestionsFx.doneData,
  (_, data) => data
);

export const Gate = createGate();
Gate.open(fetchSuggestionsFx());
