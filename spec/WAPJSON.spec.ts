
import {
    WAPTestTools,
    WAPReader,
    WebAssetPack,
    PluginManager
} from '@wap/test-tools';
import WAPText from '../src/WAPText';
import def from './support/def.json';

describe('WAPText', () => {
    let reader: WAPReader = new WAPReader();

    beforeAll(() => {
        PluginManager.getInstance().addPlugin('txt', new WAPText());
    });

    it('reads file properly', async () => {
        let buffer: ArrayBuffer = await WAPTestTools.compile(def);
        let pack: WebAssetPack = await reader.read(buffer);
        let data: any = await pack.get('test.txt');
        expect(data).toBe('And the cow jumped over the moon');
    });
});
