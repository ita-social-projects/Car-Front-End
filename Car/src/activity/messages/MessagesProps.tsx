import { ReactNode } from "react";
import NavigationAddAndRemoveListener from "../../types/NavigationAddAndRemoveListener";

export interface MessagesProps extends NavigationAddAndRemoveListener {
    isOpenFilter: boolean,
    component: ReactNode,
}
