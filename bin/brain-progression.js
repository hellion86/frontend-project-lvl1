#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { progressionGameSrc, progressionGameAsq } from '../src/games/brain-progression-src.js';

startGame(progressionGameSrc, progressionGameAsq);
