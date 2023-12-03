import { NavigateFunction } from 'react-router-dom';
import { Item } from './reducer';

export enum ActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Action =
  | {
      type: ActionType.ADD_ITEM;
      payload: {
        item: Item;
      };
    }
  | {
      type:
        | ActionType.DECREMENT_ITEM_QUANTITY
        | ActionType.INCREMENT_ITEM_QUANTITY
        | ActionType.REMOVE_ITEM;
      payload: {
        itemId: Item['id'];
      };
    }
  | {
      type: ActionType.CHECKOUT_CART;
      payload: {
        order: OrderInfo;
        callback: NavigateFunction;
      };
    };

export function addItemAction(item: Item) {
  return {
    type: ActionType.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Action;
}

export function removeItemAction(itemId: Item['id']) {
  return {
    type: ActionType.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Action;
}

export function incrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionType.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Action;
}

export function decrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionType.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Action;
}

export function checkoutCartAction(
  order: OrderInfo,
  callback: NavigateFunction
) {
  return {
    type: ActionType.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies Action;
}
