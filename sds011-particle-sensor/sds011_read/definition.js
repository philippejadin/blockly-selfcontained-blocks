
Blockly.Blocks.sds011_read = {
  init: function() {
    this.appendDummyInput()
      .appendField("Quantité de particules fines");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["pm2.5", "25"],
        ["pm10", "10"]
      ]), "pmtype");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#00929f");
    this.setTooltip('Ce bloc sert à lire le nombre de particule fines détectées');
    this.setHelpUrl('https://github.com/lewapek/sds-dust-sensors-arduino-library');
  }
};
