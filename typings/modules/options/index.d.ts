import { ButtonList } from './buttons';
import { ContentOptions } from './content';
export interface SwalOptions {
    title: string;
    text: string;
    icon: string;
    buttons: ButtonList | Array<string | boolean>;
    content: ContentOptions;
    className: string;
    closeOnClickOutside: boolean;
    closeOnEsc: boolean;
    closeOnTopRight: boolean;
    dangerMode: boolean;
    timer: number;
}
export declare const setDefaults: (opts: object) => void;
export declare const getOpts: (...params: (string | Partial<SwalOptions>)[]) => SwalOptions;
