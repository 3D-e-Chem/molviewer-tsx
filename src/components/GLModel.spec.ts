import * as NGL from 'ngl';

import { GLModel, IGLModelProps } from './GLModel';

function mockedComponent() {
    return {
        autoView: jest.fn(),
        setVisibility: jest.fn()
    } as any as NGL.StructureComponent;
}

describe('<GLModel />', () => {
    let stage: NGL.Stage;
    let model: GLModel<IGLModelProps, {}>;

    beforeEach(() => {
        const props = {
            data: '...',
            format: 'mol2',
            visible: true
        };
        model = new GLModel(props);
        const mockedStage = {
            loadFile: jest.fn(),
            remove: jest.fn()
        };
        stage = mockedStage as NGL.Stage;
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
                data: '...',
                format: 'mol2',
                visible: true
            };
            const actual = model.shouldComponentUpdate(nextProps);
            expect(actual).toBeFalsy();
        });

        it('should update when visible prop has changed', () => {
            const nextProps = {
                data: '...',
                format: 'mol2',
                visible: false
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

            it('should call autoView on component when it is visible', () => {
                expect(comp.autoView).toHaveBeenCalled();
            });
        });

        describe('visible===false', () => {
            beforeEach(() => {
                const props = {
                    data: '...',
                    format: 'mol2',
                    visible: false
                };
                model = new GLModel(props);
                model.modelLoaded(comp);
            });

            it('should call setVisibility on component', () => {
                expect(comp.setVisibility).toHaveBeenCalledWith(false);
            });

            it('should not call autoView on component when it is not visible', () => {
                expect(comp.autoView).not.toHaveBeenCalled();
            });
        });
    });

    describe('componentWillUnmount()', () => {
        it('should remove model from stage', () => {
            const comp = mockedComponent();
            model.modelLoaded(comp);

            model.componentWillUnmount();

            expect(stage.remove).toHaveBeenCalledWith(comp);
        });
    });
});
