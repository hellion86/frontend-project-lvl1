#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { primeGameSrc, primeGameAsq } from '../src/games/brain-prime-src.js';

startGame(primeGameSrc, primeGameAsq);
