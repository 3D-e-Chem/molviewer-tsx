import $ from 'jquery';
import $3Dmol from '3dmol/3Dmol.js';
import React from 'react';

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
}

export class MolContainer extends React.Component<{}, {}> {
  molContainerEl: Element;
  viewer: GLViewer;
  protein: IProtein;
  ligands: ILigand[];

  render() {
    let divStyle = {
      width: '90%',
      height: '800px',
      position: 'relative'
    };
    // let models = this.ligands.map((ligand) => <li key="{ligand.id}">{ligand.label}</li>);
    // models.push(<li key={this.protein.id}>{this.protein.label}</li>);
    // <ul>{models}</ul>
    return (
      <div>
      <div style={divStyle} ref={(c) => this.molContainerEl = c}>
      </div>
      </div>
    )
  }

  componentDidMount() {
    let element = $(this.molContainerEl);
    let config = {};
    // TODO make $3Dmol.createViewer work
    this.viewer = $3Dmol.$3Dmol.createViewer(element, config);
    this.viewer.setBackgroundColor(0xffffff);

    $.getJSON('/api/ligands').done((response) => this.addLigands(response)).fail(() => {
      console.log("error loading ligands");
    });
    $.getJSON('/api/protein').done((response) => this.addProtein(response)).fail(() => {
      console.log("error loading protein");
    });
  }

  addProtein(protein: IProtein) {
    let model = this.viewer.addModel(protein.data, 'pdb');
    model.setStyle({hetflag: false}, {cartoon: {arrows: true, tubes: true}});
    model.setColorByFunction({hetflag: false}, function(atom: AtomSpec) {
			if(atom.ss == 'h') return "magenta";
			else if(atom.ss == 's') return "orange";
			else return "white";
		});
    model.setStyle({hetflag: true}, {stick: {colorscheme:"orangeCarbon"}});
    this.viewer.zoomTo();
    this.viewer.render();
    this.protein = protein;
    this.protein.model = model;
    this.protein.visible = true;
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
}
