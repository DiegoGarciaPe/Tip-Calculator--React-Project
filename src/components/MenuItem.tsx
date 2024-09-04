import type { MenuItem } from "../types";

type menuItemProps = {
  item: MenuItem;
  addItem: () => void;
};

export default function MenuItem({ item, addItem }: menuItemProps) {
  return (
    <button className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 rounded-lg" onClick={() => addItem()}>
      <p>{item.name}</p>
      <p className="font-black">{item.price}€</p>
    </button>
  );
}
