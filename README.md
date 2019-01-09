## Proposal for self contained blocks inside blockly

Problem we are trying to solve : it is hard to share blockes between blockly installs : files representing one block
are in various directories, making it hard to just copy a directory to install a new block inside blockly.

This repository contains some sample blocks and documentation to fix this. This is a proposal or a kind of RFC for blockly.

- "led" contains a simple block to turn on and off a led
- "sds011_particle_sensor" contains to blocks related to a very specific particle sensor

For each block a directory is created with the same name as the containing block. Name is all lowercase and valid js variable name limited to a-z, 0-9,  _ .

Naming convention for blocks representing a specific hardware device :
device-name-human-friendly-name. Example for the sharp infrared distance sensor : gp2y0a02yk0f-ir-distance-sensor


Please comment/pull request on the <a href="https://groups.google.com/forum/#!topic/blockly/t0iO8xmcVGQ">blockly google group</a> or in this repository issue queue.
