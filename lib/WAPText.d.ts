import { WAPPlugin } from '@wap/core';
export declare class WAPText extends WAPPlugin<string> {
    protected _read(data: Uint8Array): Promise<string>;
}
export default WAPText;
