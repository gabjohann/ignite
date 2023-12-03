import { produce } from 'immer';
import { Action, ActionType } from './actions';

export interface Item {
  id: string;
  quantity: number;
}

export interface Order extends OrderInfo {
  id: number;
  items: Item[];
}

interface CartState {
  shoppingCart: Item[];
  orders: Order[];
}

export function shoppingCartReducer(state: CartState, action: Action) {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.shoppingCart.find(
          (item) => item.id === action.payload.item.id
        );

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.item.quantity;
        } else {
          draft.shoppingCart.push(action.payload.item);
        }
      });

    case ActionType.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemToRemoveId = draft.shoppingCart.findIndex(
          (item) => item.id === action.payload.itemId
        );
        draft.shoppingCart.splice(itemToRemoveId, 1);
      });

    case ActionType.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrement = draft.shoppingCart.find(
          (item) => item.id === action.payload.itemId
        );

        if (itemToIncrement?.id) {
          itemToIncrement.quantity += 1;
        }
      });

    case ActionType.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.shoppingCart.find(
          (item) => item.id === action.payload.itemId
        );

        if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1;
        }
      });

    case ActionType.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.shoppingCart,
          ...action.payload.order,
        };
        draft.orders.push(newOrder);
        draft.shoppingCart = [];

        action.payload.callback(`/order/${newOrder.id}/success`);
      });

    default:
      return state;
  }
}
