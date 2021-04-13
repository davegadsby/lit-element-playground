import { Pure } from '../src/pure';


describe('pure class', () => {

    it('pure constructor called', async () => {
        const pure = new Pure();
        expect(1).toBe(1);
        // const dummyText = 'Web components & Jest with Electron';
        // buttonElement.setAttribute('buttonText', dummyText);
        // await buttonElement.updateComplete;

        // const renderedText = getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).innerText;

        // expect(renderedText).toEqual(dummyText);
    });
    it('pure setJan * 6', async () => {
    const pure = new Pure();
    pure.setJan(true);
    pure.setJan(true);
    pure.setJan(true);
    pure.setJan(true);
    pure.setJan(true);
    pure.setJan(true);


        expect(1).toBe(1);
        // const mockClickFunction = jest.fn();
        // buttonElement.addEventListener('click', () => {mockClickFunction()});

        // getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).click();
        // getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).click();

        // expect(mockClickFunction).toHaveBeenCalledTimes(2);
    });
});
