import $ from 'jquery';
import {$3Dmol} from '3dmol/3Dmol.js';
import React from 'react';
import { Button, Glyphicon, ButtonGroup } from 'react-bootstrap';

interface ILigand {
  id: string;
  label: string;
  data: string;
  model: GLModel;
  visible: boolean;
}

interface IProtein {
  id: string;
  label: string;
  data: string;
  model: GLModel;
  visible: boolean;
  hetVisible: boolean;
}

export class MolContainer extends React.Component<{}, {}> {
  molContainerEl: Element;
  viewer: GLViewer;
  protein: IProtein;
  ligands: ILigand[];

  render() {
    let models: JSX.Element[] = [];
    if (this.ligands) {
      models = this.ligands.map((ligand) => <tr key={ligand.id}><td>{ligand.label}</td><td>
          <Button bsSize="small" onClick={(e) => this.toggleLigandVisibility(ligand)}>
            <Glyphicon glyph={ligand.visible ? "eye-open" : "eye-close"}/>
          </Button>
        </td></tr>);
    }
    if (this.protein) {
      models.push(<tr key={this.protein.id}><td>{this.protein.label}</td><td>
          <ButtonGroup>
          <Button bsSize="small" onClick={(e) => this.toggleProteinVisibility(this.protein)}>Whole protein complex&nbsp;
            <Glyphicon glyph={this.protein.visible ? "eye-open" : "eye-close"}/>
          </Button>
          <Button bsSize="small" onClick={(e) => this.toggleProteinHetVisibility(this.protein)}>Just Het atoms&nbsp;
            <Glyphicon glyph={this.protein.hetVisible ? "eye-open" : "eye-close"}/>
          </Button>
          </ButtonGroup></td></tr>);
    }
    return (
      <div style={{
         display: 'flex',
         height: '900px'
      }}>
        <div style={{
          width: '300px',
          marginLeft: '10px',
        }}><table><tbody>{models}</tbody></table></div>
        <div style={{
           flexGrow: 1,
           position: 'relative',
        }}><div style={{width: '100%', height: '100%'}} ref={(c) => this.molContainerEl = c}></div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let element = $(this.molContainerEl);
    let config = {};
    // TODO make $3Dmol.createViewer work
    this.viewer = $3Dmol.createViewer(element, config);
    this.viewer.setBackgroundColor(0xffffff);

    // TODO use fetch API
    // Retrieve data from a store class
    $.getJSON('/api/ligands').done((response) => this.addLigands(response)).fail(() => {
      console.log("error loading ligands");
    });
    $.getJSON('/api/protein').done((response) => this.addProtein(response)).fail(() => {
      console.log("error loading protein");
    });
  }

  addProtein(protein: IProtein) {
    let model = this.viewer.addModel(protein.data, 'pdb');
    model.setStyle({'cartoon':{colorscheme:{prop:'ss',map:$3Dmol.ssColors.Jmol}}});
    model.setStyle({hetflag: true}, {stick: {colorscheme:"orangeCarbon"}});
    this.protein = protein;
    this.protein.model = model;
    this.protein.visible = true;
    this.protein.hetVisible = true;
    this.viewer.zoomTo();
    this.viewer.render();
    this.forceUpdate();
    return this.protein;
  }

  addLigand(ligand: ILigand) {
    let model = this.viewer.addModel(ligand.data, 'sdf');
    model.setStyle({}, {stick: {colorscheme:"greenCarbon"}});
    ligand.model = model;
    ligand.visible = true;
    return ligand;
  }

  addLigands(ligands: ILigand[]) {
    this.ligands = ligands.map((ligand) => this.addLigand(ligand));
    this.viewer.zoomTo();
    this.viewer.render();
    this.forceUpdate();
    return this.ligands;
  }

  toggleLigandVisibility(ligand: ILigand) {
    ligand.visible = !ligand.visible;
    if (ligand.visible) {
      ligand.model.show();
    } else {
      ligand.model.hide();
    }
    this.viewer.render();
    this.forceUpdate();
  }

  toggleProteinHetVisibility(protein: IProtein) {
    protein.hetVisible = !protein.hetVisible;
    if (protein.hetVisible) {
      protein.model.setStyle({hetflag: true}, {stick: {colorscheme:"orangeCarbon"}});
    } else {
      protein.model.setStyle({hetflag: true}, {});
    }
    this.viewer.render();
    this.forceUpdate();
  }

  toggleProteinVisibility(protein: IProtein) {
    protein.visible = !protein.visible;
    if (protein.visible) {
      protein.model.show();
    } else {
      protein.model.hide();
    }
    this.viewer.render();
    this.forceUpdate();
  }
}
