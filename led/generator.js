Blockly.Arduino['led'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var dropdown_stat = block.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};
