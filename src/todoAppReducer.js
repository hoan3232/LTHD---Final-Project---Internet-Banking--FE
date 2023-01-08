export default function (state, action) {
  switch (action.type) {
    case "init":
      return {
        items: action.payload.items,
        query: action.payload.query,
      };

    case "add_item":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "update_filter":
      return {
        ...state,
        query: action.payload,
      };

    case "complete_task":
      return {
        ...state,
        items: state.items.map(function (i) {
          if (i.id === action.payload) {
            return { ...i, complete: true };
          }

          return i;
        }),
      };

    default:
      return state;
  }
}

export function initializer() {
  return {
    items: [
      // { id: 1, title: 'Pay Bills', complete: true },
      // { id: 2, title: '@vue/cli vs create-react-app', complete: false },
      // { id: 3, title: 'vue-router vs react-router', complete: false },
      // { id: 4, title: 'redux vs vuex', complete: false },
      // { id: 5, title: 'learn FBM Platform', complete: false }
    ],
    query: "",
  };
}
