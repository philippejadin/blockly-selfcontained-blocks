
Blockly.Blocks.sds011_read = {
  init: function() {
    this.appendDummyInput()
      .appendField('%{BKY_DUST_SENSOR_AMOUNT_OF_PARTICLES}');
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["pm2.5", "25"],
        ["pm10", "10"]
      ]), "pmtype");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#00929f");
    this.setTooltip('%{BKY_DUST_SENSOR_TOOLTIP}');
    this.setHelpUrl('https://github.com/lewapek/sds-dust-sensors-arduino-library');
  }
};
