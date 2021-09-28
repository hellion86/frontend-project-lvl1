#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { gcdGameSrc, gcdGameAsq } from '../src/games/brain-gcd-src.js';

startGame(gcdGameSrc, gcdGameAsq);
