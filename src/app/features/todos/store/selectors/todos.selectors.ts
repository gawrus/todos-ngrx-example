import { todosEntityAdapter, TodosStorageState, TODOS_STORAGE_FEATURE } from './../reducers/todos.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const featureSelector = createFeatureSelector<TodosStorageState>(TODOS_STORAGE_FEATURE);
const entitySelectors = todosEntityAdapter.getSelectors(featureSelector);

export class EventTypesStorageSelectors {
  static readonly feature = featureSelector;
  static readonly ids = entitySelectors.selectIds;
  static readonly dictionary = entitySelectors.selectEntities;
  static readonly entities = entitySelectors.selectAll;

  static readonly isLoading = createSelector(
    EventTypesStorageSelectors.feature,
    state => state.isLoading
  );
}
