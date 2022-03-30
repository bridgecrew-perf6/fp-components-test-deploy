type ItemClickedCallback = (item: DropdownItemsTypes, e?: any) => any;

export interface DropdownItemsTypes {
  id: string | number;
  label: string;
  icon?: string;
  isDisabled?: boolean;
  onItemClicked?: ItemClickedCallback;
  activeClass?: string;
  link?: string;
  items?: DropdownItemsTypes[];
}
