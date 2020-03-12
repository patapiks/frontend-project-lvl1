#!/usr/bin/env node
import { game, calc, greeting } from '../index.js';

game(greeting('What is the result of the expression?'), calc);
