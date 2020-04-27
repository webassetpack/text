
import * as api from '../src/api';
import WAPText from '../src/WAPText';
import APIDefault from '../src/api';

describe('Public API', () => {
    it('Named import', () => {
        expect(api.WAPText).toBe(WAPText);
    });

    it('Default import', () => {
        expect(APIDefault).toBe(WAPText);
    });
});
