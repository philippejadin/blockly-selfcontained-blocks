Blockly.Blocks.sds011_setup = {
  init: function() {
    this.appendDummyInput().appendField("Configurer le capteur de particules fines SDS011");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("RX pin :")
      .appendField(new Blockly.FieldNumber("1"), "RX");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("TX pin :")
      .appendField(new Blockly.FieldNumber("2"), "TX");
    this.setInputsInline(false);
    this.setColour("#00929F");
    this.setTooltip('Ce bloc sert à initialiser le capteur de particules fines. Spécifiez les bonnes pin de connexion sur l\'arduino');
    this.setHelpUrl('https://github.com/lewapek/sds-dust-sensors-arduino-library');
  }
};
