// TODO replace with `import React from 'react'`, but tslint complains see https://github.com/palantir/tslint/issues/893
import * as React from 'react';

import { ILigand } from './ligand';
import { LigandList } from './ligandlist';

interface ISdfPdbViewerState {
    ligands: ILigand[];
}

export class SdfPdbViewer extends React.Component<{}, ISdfPdbViewerState> {
    public state = {
        ligands: [{
            // TODO load ligands from api
            // tslint:disable-next-line
            data: '\r\n OpenBabel11041414293D\r\n\r\n 43 45  0  0  0  0  0  0  0  0999 V2000\r\n    5.9063   24.9584   25.9808 C   0  0  1  0  0  0  0  0  0  0  0  0\r\n    4.7041   24.1561   26.7625 C   0  0  1  0  0  0  0  0  0  0  0  0\r\n    4.3137   24.9723   28.0348 C   0  0  2  0  0  0  0  0  0  0  0  0\r\n    5.6843   25.1844   28.7746 C   0  0  1  0  0  0  0  0  0  0  0  0\r\n    6.7356   26.0149   27.8889 C   0  0  2  0  0  0  0  0  0  0  0  0\r\n    7.1258   25.0806   26.8068 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.5113   23.9905   25.9254 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.1108   22.8071   25.3967 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.7384   21.8496   25.5073 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.8037   22.8588   24.6767 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.3693   24.2052   28.8011 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.9504   26.3491   28.7097 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.2497   25.1328   29.5559 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.5738   25.9109   30.0347 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.5765   26.6958   30.7444 C   0  0  1  0  0  0  0  0  0  0  0  0\r\n    3.8370   27.7677   29.9491 C   0  0  1  0  0  0  0  0  0  0  0  0\r\n    3.0139   28.6064   30.8744 C   0  0  2  0  0  0  0  0  0  0  0  0\r\n    2.2228   27.7337   31.8944 C   0  0  1  0  0  0  0  0  0  0  0  0\r\n    3.0305   26.5789   32.5223 C   0  0  2  0  0  0  0  0  0  0  0  0\r\n    3.6985   25.8368   31.4989 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.9524   28.5919   29.2913 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.7764   29.2876   28.1519 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.8923   29.0778   27.4442 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.7995   30.3429   27.9091 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.7768   28.5816   33.0056 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0576   29.3423   30.0865 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.1195   25.5825   33.2269 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    0.7513   25.6243   32.7198 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.2641   24.2063   24.7618 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.6273   24.3604   21.3671 C   0  0  1  0  0  0  0  0  0  0  0  0\r\n    8.9008   25.5399   22.3343 C   0  0  1  0  0  0  0  0  0  0  0  0\r\n    8.2417   25.2652   23.6700 C   0  0  2  0  0  0  0  0  0  0  0  0\r\n    6.7494   24.8542   23.4150 C   0  0  1  0  0  0  0  0  0  0  0  0\r\n    6.4797   23.8858   22.2544 C   0  0  2  0  0  0  0  0  0  0  0  0\r\n    7.1783   24.4097   21.0650 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.3585   25.7246   22.4745 N   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.9478   26.9262   22.6921 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n   10.3285   27.8881   22.7405 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n   12.4231   26.8477   22.8571 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    8.2163   26.4191   24.5232 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    9.2627   24.7279   20.1476 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0185   23.7807   21.8917 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.1265   24.6034   22.7800 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n  1 29  1  6  0  0  0\r\n  1  2  1  0  0  0  0\r\n  1  6  1  0  0  0  0\r\n  2  7  1  6  0  0  0\r\n  2  3  1  0  0  0  0\r\n  3 11  1  1  0  0  0\r\n  3  4  1  0  0  0  0\r\n  4 14  1  1  0  0  0\r\n  4  5  1  0  0  0  0\r\n  5  6  1  0  0  0  0\r\n  5 12  1  1  0  0  0\r\n  7  8  1  0  0  0  0\r\n  8  9  2  0  0  0  0\r\n  8 10  1  0  0  0  0\r\n 12 13  1  0  0  0  0\r\n 15 14  1  6  0  0  0\r\n 15 16  1  0  0  0  0\r\n 15 20  1  0  0  0  0\r\n 16 21  1  1  0  0  0\r\n 16 17  1  0  0  0  0\r\n 17 26  1  6  0  0  0\r\n 17 18  1  0  0  0  0\r\n 18 25  1  1  0  0  0\r\n 18 19  1  0  0  0  0\r\n 19 20  1  0  0  0  0\r\n 19 27  1  6  0  0  0\r\n 21 22  1  0  0  0  0\r\n 22 23  2  0  0  0  0\r\n 22 24  1  0  0  0  0\r\n 27 28  1  0  0  0  0\r\n 30 41  1  6  0  0  0\r\n 30 31  1  0  0  0  0\r\n 30 35  1  0  0  0  0\r\n 31 36  1  1  0  0  0\r\n 31 32  1  0  0  0  0\r\n 32 40  1  1  0  0  0\r\n 32 33  1  0  0  0  0\r\n 33 29  1  1  0  0  0\r\n 33 34  1  0  0  0  0\r\n 34 35  1  0  0  0  0\r\n 34 42  1  6  0  0  0\r\n 36 37  1  0  0  0  0\r\n 37 38  2  0  0  0  0\r\n 37 39  1  0  0  0  0\r\n 42 43  1  0  0  0  0\r\nM  END\r\n>  <minimizedAffinity>\r\n-8.38766\r\n\r\n',
            id: '1',
            label: 'molecule1',
            visible: true,
        }],
    };

    public render() {
        return <div>
            <h1>Sdf & Pdb viewer</h1>
            <LigandList
                ligands={this.state.ligands}
                onLigandVisibilityClick={this.onLigandVisibilityClick.bind(this)}
            />
        </div>;
    }

    protected onLigandVisibilityClick(ligandId: string) {
        const newLigands = this.state.ligands.map((ligand) => {
            if (ligand.id === ligandId) {
                return Object.assign({}, ligand, {
                    visible: !ligand.visible,
                });
            }
            return ligand;
        });
        this.setState({ ligands: newLigands });
    }

}
