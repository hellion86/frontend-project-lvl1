#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { calcGameSrc, calcGameAsq } from '../src/games/brain-calc-src.js';

startGame(calcGameSrc, calcGameAsq);
