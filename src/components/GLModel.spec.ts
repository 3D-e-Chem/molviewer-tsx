import * as NGL from 'ngl';

import { GLModel } from './GLModel';

function mockedComponent() {
    return {
        setVisibility: jest.fn(),
        centerView: jest.fn()
    } as any as NGL.StructureComponent;
}

describe('<GLModel />', () => {
    let stage: NGL.Stage;
    let model: GLModel;

    beforeEach(() => {
        const props = {
            visible: true,
            data: '...',
            format: 'mol2'
        };
        model = new GLModel(props);
        const MockedStage = jest.fn();
        stage = new MockedStage() as NGL.Stage;
        model.context = { stage };
    });

    describe('render()', () => {
        it('should return null', () => {
            expect(model.render()).toBeNull();
        });
    });

    describe('shouldComponentUpdate()', () => {
        it('should not update when visible prop has not changed', () => {
            const nextProps = {
                visible: true,
                data: '...',
                format: 'mol2'
            };
            const actual = model.shouldComponentUpdate(nextProps);
            expect(actual).toBeFalsy();
        });

        it('should update when visible prop has changed', () => {
            const nextProps = {
                visible: false,
                data: '...',
                format: 'mol2'
            };
            const actual = model.shouldComponentUpdate(nextProps);
            expect(actual).toBeTruthy();
        });
    });

    describe('modelLoaded()', () => {
        let comp: NGL.StructureComponent;

        beforeEach(() => {
            comp = mockedComponent();
        });

        describe('visible===true', () => {
            beforeEach(() => {
                model.modelLoaded(comp);
            });

            it('should call setVisibility on component', () => {
                expect(comp.setVisibility).toHaveBeenCalledWith(true);
            });

            it('should call centerView on component when it is visible', () => {
                expect(comp.centerView).toHaveBeenCalled();
            });
        });

        describe('visible===false', () => {
            beforeEach(() => {
                model.props.visible = false;
                model.modelLoaded(comp);
            });

            it('should call setVisibility on component', () => {
                expect(comp.setVisibility).toHaveBeenCalledWith(false);
            });

            it('should not call centerView on component when it is not visible', () => {
                expect(comp.centerView).not.toHaveBeenCalled();
            });
        });

    });
});
