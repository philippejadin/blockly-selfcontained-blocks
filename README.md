## Proposal for self contained blocks inside blockly

Problem we are trying to solve : it is hard to share blockes between blockly installs : files representing one block
are in various directories, making it hard to just copy a directory to install a new block inside blockly.

This repository contains some sample blocks and documentation to fix this. This is a proposal or a kind of RFC for blockly.

- `led` contains a simple block to turn on and off a led
- `sds011_particle_sensor` contains to blocks related to a very specific particle sensor

For each block a directory is created with the same name as the containing block. Name is all lowercase and valid js variable name limited to a-z, 0-9,  _ .

Naming convention for blocks representing a specific hardware device :
device_name_human_friendly_name. Example for the sharp infrared distance sensor : `gp2y0a02yk0f_ir_distance_sensor` . It's a bit long and ugly but needed because such block can usualy only be used with a very specific piece of hardware.

Multiple blocks can be grouped in a single directory.

Each block directory must at least contain :
- `description.js` : block description
- `generator.js` : block code generator

Each block directory may contain :
- `package.json` : metadata
- `readme` : developer info
- `/res` : directory containing additional files like images and icons
- `/msg` : directory containing translations in json format like blockly

## Distribution
My goal is to open a git repository with all the collected blocks and be very open to contributions in the form of pull requests / zip files sent by email for those who don't manage git well.

## Compilation
Once a directory of blocks is created, a script will be provided to aggregate everything in a few JS files. This would complement blockly build.py script.

## Comments, ideas?
Please comment/pull request on the <a href="https://groups.google.com/forum/#!topic/blockly/t0iO8xmcVGQ">blockly google group</a> or in this repository issue queue.
