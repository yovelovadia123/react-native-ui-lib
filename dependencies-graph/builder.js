const Parser = require('./parser');

class Builder {
  _verbose;
  _parser;
  _componentsNames;

  constructor(verbose = false) {
    this._verbose = verbose;
    this._parser = new Parser(verbose);
  }

  buildComponents() {
    this._parse();
    this._componentsNames = this._parser._componentsWithImports.map(component => component.defaultExport);
    this._removeAndRenameComponents();
  }

  _removeAndRenameComponents() {
    for (let i = 0; i < this._parser._componentsWithImports.length; ++i) {
      for (let j = this._parser._componentsWithImports[i].imports.length - 1; j >= 0; --j) {
        const currentImport = this._parser._componentsWithImports[i].imports[j];
        if (
          // this._parser._functions.has(currentImport) ||
          this._parser._enums.has(currentImport) ||
          this._parser._interfaces.has(currentImport) ||
          this._parser._types.has(currentImport) ||
          (!this._componentsNames.includes(currentImport) && !currentImport.endsWith('Old') && !currentImport.endsWith('New'))
        ) {
          this._parser._componentsWithImports[i].imports.splice(j, 1);
        } else if (
          !this._componentsNames.includes(currentImport) &&
          (currentImport.endsWith('Old') || currentImport.endsWith('New')) &&
          this._componentsNames.includes(currentImport.slice(0, -3))
        ) {
          this._parser._componentsWithImports[i].imports[j] = currentImport.slice(0, -3);
        }
      }
    }
  }

  _parse() {
    for (let i = 2; i < process.argv.length; ++i) {
      this._parser.parse(process.argv[i]);
    }
  }
}

module.exports = Builder;
