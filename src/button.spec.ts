import {createAndAppendElement, getShadowRoot} from '../test/test-util';
import {LitElement} from 'lit-element';
import {Button} from './button';

describe('awesome-button', () => {

    const AWESOME_BUTTON_TAG = 'awesome-button';
    const ELEMENT_ID = 'custom-button';
    let buttonElement: LitElement;

    beforeEach(async () => {
        spyOn(Button.prototype, 'clicked').and.callThrough();
        buttonElement = await createAndAppendElement(AWESOME_BUTTON_TAG);
    });

    afterEach(async () => {
       await document.body.getElementsByTagName(AWESOME_BUTTON_TAG)[0].remove();
    });

    it('displays button text', async () => {
        const dummyText = 'Web components & Jest with Electron';
        buttonElement.setAttribute('buttonText', dummyText);
        await buttonElement.updateComplete;

        const renderedText = getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).innerText;

        expect(renderedText).toEqual(dummyText);
    });
    it('handles clicks', async () => {


        getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).click();
        getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).click();
        getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).click();
        getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).click();

        expect(Button.prototype.clicked).toHaveBeenCalledTimes(4);
    });
});
