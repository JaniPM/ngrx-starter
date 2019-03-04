
// Representation of the entire app state shared by all modules
// Uncomment the line below when app has a root state
// tslint:disable-next-line:no-empty-interface
export interface AppState {}

const initialState: AppState = {
};

export function reducer(state = initialState, action): AppState {
  switch (action.type) {
    default:
      return state;
  }
}
