import { ParserRegistry } from 'ngl';

class PharPharser {
    streamer: any;
    name: string;
    path: string;

    constructor(streamer: any, params: any) {
        this.streamer = streamer;
        this.name = params.name;
        this.path = params.path;
    }

    get type (){ return 'phar'; }
    get __objName (){ return 'phar'; }

    parse() {

    }
}

ParserRegistry.add('phar', PharPharser);
