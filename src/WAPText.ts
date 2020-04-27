
import {WAPPlugin} from '@wap/core';

export class WAPText extends WAPPlugin<string> {
    protected async _read(data: Uint8Array): Promise<string> {
        return String.fromCharCode.apply(null, data);
    }
}

export default WAPText;
