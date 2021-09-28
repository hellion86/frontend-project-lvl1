#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { evenGameSrc, evenGameAsq } from '../src/games/brain-even-src.js';

startGame(evenGameSrc, evenGameAsq);
