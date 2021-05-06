import { ReactNode } from "react";
import Chat from "../../../models/Chat";
import Journey from "../../../models/journey/Journey";

export interface MessagesProps {
    isOpenFilter: boolean,
    component: ReactNode
}

export interface FilteredChat {
    text: string,
    chatId: number,
    journey: Journey
}

export function chatsArrToFilteredChatsArr (chats: Chat[]): FilteredChat[]
{
    let arr: FilteredChat[] = [];

    chats.map(chat => {
        chat!.messages.map(msg => {
            arr.push({
                chatId: chat!.id,
                text: msg!.text,
                journey: chat!.journey!,
            });
        });
    });

    return arr;
}
