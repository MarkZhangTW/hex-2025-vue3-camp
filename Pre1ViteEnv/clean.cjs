#!/usr/bin/env node

'use strict';
const fs = require('fs-extra');

const path = require('path');
const distPath = path.join(__dirname, 'dist');

fs.remove(distPath)
    .then(() => console.log('dist directory removed successfully.'))
    .catch(err => console.error('Error removing dist directory:', err));
